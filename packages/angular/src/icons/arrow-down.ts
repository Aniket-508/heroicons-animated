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
  selector: "hi-arrow-down",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-down'",
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
    <path class="head-path" [class.animate]="shouldAnimate()" d="M19.5 13.5 12 21m0 0-7.5-7.5" />
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
export class ArrowDownIcon {
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
      const start = from[numberIndex];
      const end = to[numberIndex];
      numberIndex += 1;
      return this.formatNumber(start + (end - start) * progress);
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

    const clampedProgress = Math.max(0, Math.min(progress, 1));
    let segmentIndex = this.LINE_PATH_TIMES.length - 2;
    for (let index = 1; index < this.LINE_PATH_TIMES.length; index += 1) {
      if (clampedProgress <= this.LINE_PATH_TIMES[index]) {
        segmentIndex = index - 1;
        break;
      }
    }

    const segmentStart = this.LINE_PATH_TIMES[segmentIndex];
    const segmentEnd = this.LINE_PATH_TIMES[segmentIndex + 1];
    const localProgress =
      segmentEnd === segmentStart
        ? 0
        : (clampedProgress - segmentStart) / (segmentEnd - segmentStart);
    const easedProgress = this.getEaseInOut(localProgress);
    const from = this.parsedLinePaths[segmentIndex].numbers;
    const to = this.parsedLinePaths[segmentIndex + 1].numbers;
    el.setAttribute(
      "d",
      this.interpolatePath(this.lineTemplate, from, to, easedProgress)
    );
  }

  private startAnimation() {
    this.clearLineAnimation();
    const startTime = performance.now();
    const step = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / this.lineAnimationDuration, 1);
      this.setLinePath(progress);
      if (progress < 1) {
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
