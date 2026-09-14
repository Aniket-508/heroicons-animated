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
  selector: "hi-battery-100",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'battery-100'",
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
    <defs>
      <clipPath [attr.id]="clipId">
        <rect #clipRect height="4.5" x="4.5" y="10.5" width="0" />
      </clipPath>
    </defs>
    <path d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21" />
    <path
      d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
    />
    <path d="M4.5 10.5h13.5V15H4.5v-4.5Z" />
    <path
      [attr.clip-path]="'url(#' + clipId + ')'"
      d="M4.5 10.5h13.5V15H4.5v-4.5Z"
      [attr.fill]="color()"
      stroke="none"
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
    `,
  ],
})
export class Battery100Icon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  protected readonly clipId =
    `battery-clip-${Math.random().toString(36).substr(2, 9)}`;

  private readonly clipRectRef =
    viewChild<ElementRef<SVGRectElement>>("clipRect");
  private readonly destroyRef = inject(DestroyRef);

  private readonly clipWidthMin = 0;
  private readonly clipWidthExpanded = 13.5;
  private readonly clipAnimationDuration = 500;
  private clipAnimationFrame: number | null = null;
  private clipAnimationToken = 0;

  constructor() {
    effect(() => {
      if (this.shouldAnimate()) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    });
    this.destroyRef.onDestroy(() => this.cancelClipAnimation());
  }

  private clampClipWidth(value: number): number {
    return Math.max(this.clipWidthMin, Math.min(value, this.clipWidthExpanded));
  }

  private cancelClipAnimation() {
    if (this.clipAnimationFrame !== null) {
      cancelAnimationFrame(this.clipAnimationFrame);
      this.clipAnimationFrame = null;
    }
    this.clipAnimationToken += 1;
  }

  private animateClipWidth(targetWidth: number) {
    const el = this.clipRectRef()?.nativeElement;
    if (!el) {
      return;
    }
    this.cancelClipAnimation();

    const parsedWidth = Number.parseFloat(el.getAttribute("width") ?? "0");
    const startWidth = Number.isFinite(parsedWidth)
      ? this.clampClipWidth(parsedWidth)
      : this.clipWidthMin;
    const boundedTargetWidth = this.clampClipWidth(targetWidth);
    const delta = boundedTargetWidth - startWidth;

    if (delta === 0) {
      el.setAttribute("width", boundedTargetWidth.toFixed(3));
      return;
    }

    const animationToken = this.clipAnimationToken;
    const startTime = performance.now();
    const step = (time: number) => {
      if (animationToken !== this.clipAnimationToken) {
        return;
      }
      const elapsed = time - startTime;
      const progress = Math.max(
        0,
        Math.min(elapsed / this.clipAnimationDuration, 1)
      );
      const easedProgress = 1 - (1 - progress) ** 3; // easeOutCubic
      const nextWidth = startWidth + delta * easedProgress;
      el.setAttribute("width", this.clampClipWidth(nextWidth).toFixed(3));
      if (progress < 1) {
        this.clipAnimationFrame = requestAnimationFrame(step);
      } else {
        el.setAttribute("width", boundedTargetWidth.toFixed(3));
        this.clipAnimationFrame = null;
      }
    };
    this.clipAnimationFrame = requestAnimationFrame(step);
  }

  private startAnimation() {
    this.animateClipWidth(this.clipWidthExpanded);
  }
  private stopAnimation() {
    this.cancelClipAnimation();
    const el = this.clipRectRef()?.nativeElement;
    if (el) {
      el.setAttribute("width", this.clipWidthMin.toFixed(3));
    }
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
