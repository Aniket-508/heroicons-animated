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
  selector: "hi-arrow-trending-down",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-trending-down'",
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
    [class.animate]="shouldAnimate()"
  >
    <path
      #pathElement
      d="M2.25 6L9 12.75L13.3064 8.44365C14.5101 10.812 16.5042 12.7978 19.1203 13.9625L21.8609 15.1827"
    />
    <path #arrowElement d="M21.8609 15.1827L15.9196 17.4634M21.8609 15.1827L19.5802 9.24152" />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-block;
      }
      .icon-svg {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
      }
      .icon-svg.animate {
        animation: svg-translate 0.5s ease-in-out forwards;
      }
      @keyframes svg-translate {
        0% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(2px, 2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    `,
  ],
})
export class ArrowTrendingDownIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly pathRef =
    viewChild<ElementRef<SVGPathElement>>("pathElement");
  private readonly arrowRef =
    viewChild<ElementRef<SVGPathElement>>("arrowElement");
  private readonly destroyRef = inject(DestroyRef);

  private pathAnimation: Animation | null = null;
  private arrowAnimation: Animation | null = null;
  private arrowTimeout: ReturnType<typeof setTimeout> | null = null;

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
    const pathEl = this.pathRef()?.nativeElement;
    const arrowEl = this.arrowRef()?.nativeElement;

    if (pathEl) {
      const pathLength = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = `${pathLength}`;
      pathEl.style.strokeDashoffset = `${pathLength}`;
      pathEl.style.opacity = "0";
      this.pathAnimation = pathEl.animate(
        [
          { strokeDashoffset: pathLength, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        { duration: 400, easing: "ease-in-out", fill: "forwards" as FillMode }
      );
    }

    if (arrowEl) {
      const arrowLength = arrowEl.getTotalLength();
      arrowEl.style.strokeDasharray = `${arrowLength}`;
      arrowEl.style.strokeDashoffset = `${arrowLength * 0.5}`;
      arrowEl.style.opacity = "0";
      this.arrowTimeout = setTimeout(() => {
        if (arrowEl) {
          this.arrowAnimation = arrowEl.animate(
            [
              { strokeDashoffset: arrowLength * 0.5, opacity: 0 },
              { strokeDashoffset: 0, opacity: 1 },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
              fill: "forwards" as FillMode,
            }
          );
        }
      }, 300);
    }
  }

  private stopAnimation() {
    if (this.arrowTimeout) {
      clearTimeout(this.arrowTimeout);
      this.arrowTimeout = null;
    }
    if (this.pathAnimation) {
      this.pathAnimation.cancel();
      this.pathAnimation = null;
    }
    if (this.arrowAnimation) {
      this.arrowAnimation.cancel();
      this.arrowAnimation = null;
    }
    const pathEl = this.pathRef()?.nativeElement;
    const arrowEl = this.arrowRef()?.nativeElement;
    if (pathEl) {
      pathEl.style.strokeDasharray = "";
      pathEl.style.strokeDashoffset = "";
      pathEl.style.opacity = "1";
    }
    if (arrowEl) {
      arrowEl.style.strokeDasharray = "";
      arrowEl.style.strokeDashoffset = "";
      arrowEl.style.opacity = "1";
    }
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
