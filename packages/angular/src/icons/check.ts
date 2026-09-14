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
  selector: "hi-check",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'check'",
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
    <path #pathElement d="m4.5 12.75 6 6 9-13.5" />
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

      .icon-svg path {
        transform-box: fill-box;
        transform-origin: center;
      }
    `,
  ],
})
export class CheckIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  protected readonly pathElement =
    viewChild<ElementRef<SVGPathElement>>("pathElement");

  private pathAnimation: Animation | null = null;
  private readonly destroyRef = inject(DestroyRef);

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
    const el = this.pathElement()?.nativeElement;
    if (el) {
      const len = el.getTotalLength();
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
      el.style.opacity = "0";
      el.style.transform = "scale(0.5)";
      el.style.transformOrigin = "center";

      this.pathAnimation =
        el.animate(
          [
            {
              strokeDashoffset: len,
              opacity: 0,
              transform: "scale(0.5)",
            },
            {
              strokeDashoffset: 0,
              opacity: 1,
              transform: "scale(1)",
            },
          ],
          { duration: 400, easing: "ease-out", fill: "forwards" }
        ) ?? null;
    }
  }

  private stopAnimation() {
    if (this.pathAnimation) {
      this.pathAnimation.cancel();
      this.pathAnimation = null;
    }

    const el = this.pathElement()?.nativeElement;
    if (el) {
      el.style.strokeDasharray = "";
      el.style.strokeDashoffset = "";
      el.style.opacity = "";
      el.style.transform = "";
    }
  }
  onMouseEnter() {
    this.isHovered.set(true);
  }

  onMouseLeave() {
    this.isHovered.set(false);
  }
}
