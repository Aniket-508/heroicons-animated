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
  selector: "hi-bolt",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bolt'",
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
    <path #pathElement d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
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
    `,
  ],
})
export class BoltIcon {
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
      const pathLength = el.getTotalLength();
      el.style.strokeDasharray = `${pathLength}`;
      el.style.strokeDashoffset = `${pathLength}`;
      el.style.opacity = "0";

      this.pathAnimation =
        el.animate(
          [
            { strokeDashoffset: pathLength, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
          ],
          { duration: 600, easing: "linear", fill: "forwards" }
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
    }
  }
  onMouseEnter() {
    this.isHovered.set(true);
  }

  onMouseLeave() {
    this.isHovered.set(false);
  }
}
