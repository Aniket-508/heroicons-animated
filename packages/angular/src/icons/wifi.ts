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
  selector: "hi-wifi",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'wifi'",
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
    <path d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0" />
    <path #arcOnePath d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0" class="wifi-arc" />
    <path #arcTwoPath d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0" class="wifi-arc" />
    <path #arcThreePath d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" class="wifi-arc" />
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
      .wifi-arc {
        opacity: 1;
        transform: scale(1);
        transform-box: fill-box;
        transform-origin: center;
      }
    `,
  ],
})
export class WifiIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly arcOneRef =
    viewChild<ElementRef<SVGPathElement>>("arcOnePath");
  private readonly arcTwoRef =
    viewChild<ElementRef<SVGPathElement>>("arcTwoPath");
  private readonly arcThreeRef =
    viewChild<ElementRef<SVGPathElement>>("arcThreePath");
  private readonly destroyRef = inject(DestroyRef);

  private arcAnimations: Animation[] = [];
  private readonly arcAnimationDurationMs = 600;
  private readonly arcAnimationDelayStepMs = 200;

  constructor() {
    effect(() => {
      if (this.shouldAnimate()) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    });
    this.destroyRef.onDestroy(() => this.clearArcAnimations());
  }

  private clearArcAnimations() {
    for (const animation of this.arcAnimations) {
      animation.cancel();
    }
    this.arcAnimations = [];
  }

  private resetArcPaths() {
    const refs = [this.arcOneRef(), this.arcTwoRef(), this.arcThreeRef()];
    for (const ref of refs) {
      const el = ref?.nativeElement;
      if (!el) {
        continue;
      }
      el.style.opacity = "1";
      el.style.transform = "scale(1)";
    }
  }

  private startAnimation() {
    const refs = [this.arcOneRef(), this.arcTwoRef(), this.arcThreeRef()];
    this.clearArcAnimations();

    refs.forEach((ref, index) => {
      const el = ref?.nativeElement;
      if (!el) {
        return;
      }

      const animation = el.animate(
        [
          {
            opacity: "1",
            transform: "scale(1)",
            offset: 0,
            easing: "ease-in-out",
          },
          {
            opacity: "0",
            transform: "scale(0)",
            offset: 1 / 3,
            easing: "ease-in-out",
          },
          { opacity: "0", transform: "scale(0)", offset: 2 / 3 },
          {
            opacity: "1",
            transform: "scale(1)",
            offset: 1,
            easing: "ease-in-out",
          },
        ],
        {
          duration: this.arcAnimationDurationMs,
          delay: this.arcAnimationDelayStepMs * index,
          fill: "both" as FillMode,
        }
      );

      this.arcAnimations.push(animation);
    });
  }

  private stopAnimation() {
    this.clearArcAnimations();
    this.resetArcPaths();
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
