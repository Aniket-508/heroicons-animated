import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  type ElementRef,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from "@angular/core";

@Component({
  selector: "hi-face-frown",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'face-frown'",
    role: "img",
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()",
  },
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
    fill="none"
    [attr.stroke]="color()"
    [attr.stroke-width]="strokeWidth()"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-svg facefrown-svg"
    [class.facefrown-svg-animate]="shouldAnimate()"
  >
    <circle cx="12" cy="12" r="9" />
    <path
      #mouthPath
      d="M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
      pathLength="1"
      class="facefrown-mouth"
      [class.facefrown-mouth-animate]="shouldAnimate()"
    />
    <path
      d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
      class="facefrown-eye facefrown-eye-left"
      [class.facefrown-eye-animate]="shouldAnimate()"
    />
    <path
      d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
      class="facefrown-eye facefrown-eye-right"
      [class.facefrown-eye-animate]="shouldAnimate()"
    />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-block;
      }
      .icon-svg {
        transform-box: fill-box;
        transform-origin: center;
      }
      .facefrown-svg.facefrown-svg-animate {
        animation: facefrown-svg-bounce 0.8s ease-in-out forwards;
      }
      @keyframes facefrown-svg-bounce {
        0% {
          transform: scale(1) rotate(0deg);
        }
        30% {
          transform: scale(1.15) rotate(-2deg);
        }
        60% {
          transform: scale(1.05) rotate(2deg);
        }
        100% {
          transform: scale(1.08) rotate(0deg);
        }
      }
      .facefrown-mouth {
        stroke-dasharray: 1;
      }
      .facefrown-mouth.facefrown-mouth-animate {
        animation: facefrown-mouth-draw 0.5s ease-in-out 0.1s forwards;
      }
      @keyframes facefrown-mouth-draw {
        0% {
          stroke-dashoffset: 0.7;
        }
        50% {
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      .facefrown-eye {
        transform-box: fill-box;
        transform-origin: center;
      }
      .facefrown-eye-left.facefrown-eye-animate {
        animation: facefrown-eye-left-bounce 0.6s ease-in-out forwards;
      }
      @keyframes facefrown-eye-left-bounce {
        0% {
          transform: scale(1) translateY(0);
        }
        30% {
          transform: scale(1.3) translateY(-0.5px);
        }
        60% {
          transform: scale(0.9) translateY(0.3px);
        }
        100% {
          transform: scale(1.1) translateY(0);
        }
      }
      .facefrown-eye-right.facefrown-eye-animate {
        animation: facefrown-eye-right-bounce 0.6s ease-in-out forwards;
      }
      @keyframes facefrown-eye-right-bounce {
        0% {
          transform: scale(1) translateY(0);
        }
        30% {
          transform: scale(0.9) translateY(-0.5px);
        }
        60% {
          transform: scale(1.3) translateY(0.3px);
        }
        100% {
          transform: scale(1.1) translateY(0);
        }
      }
    `,
  ],
})
export class FaceFrownIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly mouthPathRef =
    viewChild<ElementRef<SVGPathElement>>("mouthPath");
  private readonly destroyRef = inject(DestroyRef);

  private readonly MOUTH_PATHS = [
    "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
    "M15.5 17C14.5 16 13 15.5 12 15.5C11 15.5 9.5 16 8.5 17",
    "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
  ] as const;
  private readonly MOUTH_TIMES = [0, 0.5, 1] as const;
  private readonly MOUTH_MORPH_DURATION = 500;
  private readonly MOUTH_MORPH_DELAY = 100;
  private readonly NUMBER_PATTERN = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;

  private readonly parsedMouthPaths: { template: string; numbers: number[] }[];
  private readonly mouthTemplate: string;
  private readonly mouthNumberCount: number;
  private readonly canMorphMouth: boolean;
  private mouthAnimationFrame: number | null = null;
  private mouthDelayTimeout: number | null = null;

  constructor() {
    this.parsedMouthPaths = this.MOUTH_PATHS.map((path) => {
      const numbers: number[] = [];
      const template = path.replace(this.NUMBER_PATTERN, (value) => {
        numbers.push(Number.parseFloat(value));
        return "__N__";
      });
      return { template, numbers };
    });
    this.mouthTemplate = this.parsedMouthPaths[0].template;
    this.mouthNumberCount = this.parsedMouthPaths[0].numbers.length;
    this.canMorphMouth = this.parsedMouthPaths.every(
      (p) =>
        p.template === this.mouthTemplate &&
        p.numbers.length === this.mouthNumberCount
    );

    effect(() => {
      if (this.shouldAnimate()) {
        this.startMouthMorph();
      } else {
        this.stopMouthMorph();
      }
    });
    this.destroyRef.onDestroy(() => this.cancelMouthMorph());
  }

  private formatNumber(value: number): string {
    return Number(value.toFixed(4)).toString();
  }

  private interpolatePath(
    template: string,
    from: number[],
    to: number[],
    progress: number
  ): string {
    let numberIndex = 0;
    return template.replace(/__N__/g, () => {
      const s = from[numberIndex];
      const e = to[numberIndex];
      numberIndex += 1;
      return this.formatNumber(s + (e - s) * progress);
    });
  }

  private cancelMouthMorph() {
    if (this.mouthDelayTimeout !== null) {
      clearTimeout(this.mouthDelayTimeout);
      this.mouthDelayTimeout = null;
    }
    if (this.mouthAnimationFrame !== null) {
      cancelAnimationFrame(this.mouthAnimationFrame);
      this.mouthAnimationFrame = null;
    }
  }

  private setMouthPathAt(progress: number) {
    const el = this.mouthPathRef()?.nativeElement;
    if (!el) {
      return;
    }
    if (!this.canMorphMouth) {
      el.setAttribute("d", this.MOUTH_PATHS[0]);
      return;
    }

    const cp = Math.max(0, Math.min(progress, 1));
    let si = this.MOUTH_TIMES.length - 2;
    for (let i = 1; i < this.MOUTH_TIMES.length; i++) {
      if (cp <= this.MOUTH_TIMES[i]) {
        si = i - 1;
        break;
      }
    }
    const ss = this.MOUTH_TIMES[si];
    const se = this.MOUTH_TIMES[si + 1];
    const lp = se === ss ? 0 : (cp - ss) / (se - ss);
    el.setAttribute(
      "d",
      this.interpolatePath(
        this.mouthTemplate,
        this.parsedMouthPaths[si].numbers,
        this.parsedMouthPaths[si + 1].numbers,
        lp
      )
    );
  }

  private startMouthMorph() {
    this.cancelMouthMorph();
    this.mouthDelayTimeout = window.setTimeout(() => {
      const startTime = performance.now();
      const step = (time: number) => {
        const progress = Math.min(
          (time - startTime) / this.MOUTH_MORPH_DURATION,
          1
        );
        this.setMouthPathAt(progress);
        if (progress < 1) {
          this.mouthAnimationFrame = requestAnimationFrame(step);
        } else {
          this.mouthAnimationFrame = null;
        }
      };
      this.mouthAnimationFrame = requestAnimationFrame(step);
      this.mouthDelayTimeout = null;
    }, this.MOUTH_MORPH_DELAY);
  }

  private stopMouthMorph() {
    this.cancelMouthMorph();
    const el = this.mouthPathRef()?.nativeElement;
    if (el) {
      el.setAttribute("d", this.MOUTH_PATHS[0]);
    }
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
