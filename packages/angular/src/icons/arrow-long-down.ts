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
  selector: "hi-arrow-long-down",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-long-down'",
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
    class="icon-svg"
  >
    <path
      class="head-path"
      [class.animate]="shouldAnimate()"
      d="M15.75 17.25 12 21m0 0-3.75-3.75"
    />
    <path #linePath d="M12 21V3" />
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
      .head-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.4s ease-in-out;
      }
      .head-path.animate {
        animation: head-translate 0.4s ease-in-out forwards;
      }
      @keyframes head-translate {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ArrowLongDownIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly linePathRef =
    viewChild<ElementRef<SVGPathElement>>("linePath");
  private readonly destroyRef = inject(DestroyRef);

  private readonly LINE_PATH_KEYFRAMES = [
    "M12 21V3",
    "M12 18V3",
    "M12 21V3",
  ] as const;
  private readonly LINE_PATH_TIMES = [0, 0.5, 1] as const;
  private readonly lineAnimationDuration = 400;
  private readonly NUMBER_PATTERN = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;
  private lineAnimationFrame: number | null = null;
  private readonly parsedLinePaths: { template: string; numbers: number[] }[];
  private readonly lineTemplate: string;
  private readonly lineNumberCount: number;
  private readonly canMorphLine: boolean;

  constructor() {
    this.parsedLinePaths = this.LINE_PATH_KEYFRAMES.map((path) => {
      const numbers: number[] = [];
      const template = path.replace(this.NUMBER_PATTERN, (value) => {
        numbers.push(Number.parseFloat(value));
        return "__N__";
      });
      return { template, numbers };
    });
    this.lineTemplate = this.parsedLinePaths[0].template;
    this.lineNumberCount = this.parsedLinePaths[0].numbers.length;
    this.canMorphLine = this.parsedLinePaths.every(
      (p) =>
        p.template === this.lineTemplate &&
        p.numbers.length === this.lineNumberCount
    );
    effect(() => {
      if (this.shouldAnimate()) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    });
    this.destroyRef.onDestroy(() => this.clearLineAnimation());
  }

  private clearLineAnimation() {
    if (this.lineAnimationFrame !== null) {
      cancelAnimationFrame(this.lineAnimationFrame);
      this.lineAnimationFrame = null;
    }
  }
  private getEaseInOut(value: number): number {
    return 0.5 - Math.cos(Math.PI * value) / 2;
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
  private setLinePath(progress: number) {
    const el = this.linePathRef()?.nativeElement;
    if (!el) {
      return;
    }
    if (!this.canMorphLine) {
      el.setAttribute("d", this.LINE_PATH_KEYFRAMES[0]);
      return;
    }
    const cp = Math.max(0, Math.min(progress, 1));
    let si = this.LINE_PATH_TIMES.length - 2;
    for (let i = 1; i < this.LINE_PATH_TIMES.length; i++) {
      if (cp <= this.LINE_PATH_TIMES[i]) {
        si = i - 1;
        break;
      }
    }
    const ss = this.LINE_PATH_TIMES[si];
    const se = this.LINE_PATH_TIMES[si + 1];
    const lp = se === ss ? 0 : (cp - ss) / (se - ss);
    el.setAttribute(
      "d",
      this.interpolatePath(
        this.lineTemplate,
        this.parsedLinePaths[si].numbers,
        this.parsedLinePaths[si + 1].numbers,
        this.getEaseInOut(lp)
      )
    );
  }
  private startAnimation() {
    this.clearLineAnimation();
    const st = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - st) / this.lineAnimationDuration, 1);
      this.setLinePath(p);
      if (p < 1) {
        this.lineAnimationFrame = requestAnimationFrame(step);
      } else {
        this.lineAnimationFrame = null;
      }
    };
    this.lineAnimationFrame = requestAnimationFrame(step);
  }
  private stopAnimation() {
    this.clearLineAnimation();
    const el = this.linePathRef()?.nativeElement;
    if (el) {
      el.setAttribute("d", this.LINE_PATH_KEYFRAMES[0]);
    }
  }
  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
