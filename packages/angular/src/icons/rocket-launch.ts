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
  selector: "hi-rocket-launch",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'rocket-launch'",
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
    [class.rocketlaunch-float]="shouldAnimate()"
  >
    <path
      d="M15.5904 14.3696C15.6948 14.8128 15.75 15.275 15.75 15.75C15.75 19.0637 13.0637 21.75 9.75 21.75V16.9503M15.5904 14.3696C19.3244 11.6411 21.75 7.22874 21.75 2.25C16.7715 2.25021 12.3595 4.67586 9.63122 8.40975M15.5904 14.3696C13.8819 15.6181 11.8994 16.514 9.75 16.9503M9.63122 8.40975C9.18777 8.30528 8.72534 8.25 8.25 8.25C4.93629 8.25 2.25 10.9363 2.25 14.25H7.05072M9.63122 8.40975C8.38285 10.1183 7.48701 12.1007 7.05072 14.25M9.75 16.9503C9.64659 16.9713 9.54279 16.9912 9.43862 17.0101C8.53171 16.291 7.70991 15.4692 6.99079 14.5623C7.00969 14.4578 7.02967 14.3537 7.05072 14.25M16.5 9C16.5 9.82843 15.8284 10.5 15 10.5C14.1716 10.5 13.5 9.82843 13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9Z"
    />
    <path
      #firePath
      class="rocketlaunch-fire"
      d="M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881"
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
      .icon-svg.rocketlaunch-float {
        animation: rocketlaunch-float 6s ease-in-out infinite alternate;
      }
      @keyframes rocketlaunch-float {
        0% {
          transform: translate(0, 0);
        }
        15% {
          transform: translate(0, -3px);
        }
        30% {
          transform: translate(-3px, 0);
        }
        45% {
          transform: translate(2px, -2px);
        }
        60% {
          transform: translate(-2px, -3px);
        }
        75% {
          transform: translate(1px, -1px);
        }
        90% {
          transform: translate(-1px, -2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
      .rocketlaunch-fire {
        opacity: 1;
      }
    `,
  ],
})
export class RocketLaunchIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly firePathRef =
    viewChild<ElementRef<SVGPathElement>>("firePath");
  private readonly destroyRef = inject(DestroyRef);

  private readonly FIRE_PATHS = [
    "M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881",
    "M4.81191 16.6408C3.21213 17.9612 2.5 19.2724 2.5 20.75C2.5 20.9869 2.5183 21.2195 2.55356 21.4464C2.78054 21.4817 3.01313 21.5 3.25 21.5C4.72758 21.5 6.03883 20.7879 6.85925 19.6881",
    "M4.81191 16.6408C3.51213 17.2612 3.2 18.1724 3.2 19.65C3.2 19.8869 3.2183 20.1195 3.25356 20.3464C3.48054 20.3817 3.71313 20.4 3.95 20.4C5.42758 20.4 6.73883 19.6879 7.55925 18.5881",
    "M4.81191 16.6408C3.41213 18.0612 2.8 19.4724 2.8 20.95C2.8 21.1869 2.8183 21.4195 2.85356 21.6464C3.08054 21.6817 3.31313 21.7 3.55 21.7C5.02758 21.7 6.33883 20.9879 7.15925 19.8881",
    "M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881",
  ] as const;
  private readonly FIRE_TIMES = [0, 0.2, 0.5, 0.8, 1] as const;
  private readonly FIRE_DURATION = 2000;
  private readonly NUMBER_PATTERN = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;

  private readonly parsedFirePaths: { template: string; numbers: number[] }[];
  private readonly fireTemplate: string;
  private readonly fireNumberCount: number;
  private readonly canMorphFire: boolean;
  private fireAnimationFrame: number | null = null;

  constructor() {
    this.parsedFirePaths = this.FIRE_PATHS.map((path) => {
      const numbers: number[] = [];
      const template = path.replace(this.NUMBER_PATTERN, (value) => {
        numbers.push(Number.parseFloat(value));
        return "__N__";
      });
      return { template, numbers };
    });
    this.fireTemplate = this.parsedFirePaths[0].template;
    this.fireNumberCount = this.parsedFirePaths[0].numbers.length;
    this.canMorphFire = this.parsedFirePaths.every(
      (p) =>
        p.template === this.fireTemplate &&
        p.numbers.length === this.fireNumberCount
    );

    effect(() => {
      if (this.shouldAnimate()) {
        this.startFireAnimation();
      } else {
        this.stopFireAnimation();
      }
    });
    this.destroyRef.onDestroy(() => this.stopFireAnimation());
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

  private setFirePathAt(progress: number) {
    const el = this.firePathRef()?.nativeElement;
    if (!el) {
      return;
    }
    if (!this.canMorphFire) {
      const idx = Math.min(
        this.FIRE_PATHS.length - 1,
        Math.floor(progress * this.FIRE_PATHS.length)
      );
      el.setAttribute("d", this.FIRE_PATHS[idx]);
      return;
    }
    const cp = Math.max(0, Math.min(progress, 1));
    let si = this.FIRE_TIMES.length - 2;
    for (let i = 1; i < this.FIRE_TIMES.length; i++) {
      if (cp <= this.FIRE_TIMES[i]) {
        si = i - 1;
        break;
      }
    }
    const ss = this.FIRE_TIMES[si];
    const se = this.FIRE_TIMES[si + 1];
    const lp = se === ss ? 0 : (cp - ss) / (se - ss);
    el.setAttribute(
      "d",
      this.interpolatePath(
        this.fireTemplate,
        this.parsedFirePaths[si].numbers,
        this.parsedFirePaths[si + 1].numbers,
        lp
      )
    );
  }

  private startFireAnimation() {
    this.stopFireAnimation();
    const startTime = performance.now();
    const step = (time: number) => {
      const elapsed = time - startTime;
      const cycleProgress = (elapsed % this.FIRE_DURATION) / this.FIRE_DURATION;
      this.setFirePathAt(cycleProgress);
      this.fireAnimationFrame = requestAnimationFrame(step);
    };
    this.fireAnimationFrame = requestAnimationFrame(step);
  }

  private stopFireAnimation() {
    if (this.fireAnimationFrame !== null) {
      cancelAnimationFrame(this.fireAnimationFrame);
      this.fireAnimationFrame = null;
    }
    const el = this.firePathRef()?.nativeElement;
    if (el) {
      el.setAttribute("d", this.FIRE_PATHS[0]);
    }
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
