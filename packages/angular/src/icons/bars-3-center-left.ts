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
  selector: "hi-bars-3-center-left",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bars-3-center-left'",
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
    <path class="top-bar" [class.animate]="shouldAnimate()" d="M3.75 6.75h16.5" />
    <path #centerBarPath class="center-bar" [class.animate]="shouldAnimate()" d="M3.75 12H12" />
    <path class="bottom-bar" [class.animate]="shouldAnimate()" d="M3.75 17.25h16.5" />
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
      .top-bar,
      .center-bar,
      .bottom-bar {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.4s ease-in-out;
      }
      .top-bar.animate {
        animation: slide-left 0.4s ease-in-out forwards;
      }
      .center-bar.animate {
        animation: slide-left-short 0.5s ease-in-out 0.05s forwards;
      }
      .bottom-bar.animate {
        animation: slide-left 0.4s ease-in-out 0.1s forwards;
      }
      @keyframes slide-left {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-3px);
        }
        100% {
          transform: translateX(0);
        }
      }
      @keyframes slide-left-short {
        0% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class Bars3CenterLeftIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly centerBarRef =
    viewChild<ElementRef<SVGPathElement>>("centerBarPath");
  private readonly destroyRef = inject(DestroyRef);

  private centerBarAnimation: Animation | null = null;

  constructor() {
    effect(() => {
      if (this.shouldAnimate()) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    });
    this.destroyRef.onDestroy(() => this.stopAnimation());
  }

  private startAnimation() {
    const el = this.centerBarRef()?.nativeElement;
    if (el) {
      const pathLength = el.getTotalLength();
      el.style.strokeDasharray = `${pathLength}`;
      el.style.strokeDashoffset = "0";
      this.centerBarAnimation = el.animate(
        [
          { strokeDashoffset: 0 },
          { strokeDashoffset: pathLength * 0.5 },
          { strokeDashoffset: 0 },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          delay: 50,
          fill: "forwards" as FillMode,
        }
      );
    }
  }

  private stopAnimation() {
    if (this.centerBarAnimation) {
      this.centerBarAnimation.cancel();
      this.centerBarAnimation = null;
    }
    const el = this.centerBarRef()?.nativeElement;
    if (el) {
      el.style.strokeDasharray = "";
      el.style.strokeDashoffset = "";
    }
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
