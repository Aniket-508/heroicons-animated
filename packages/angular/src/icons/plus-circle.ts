import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-plus-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'plus-circle'",
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
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
    <path
      d="M12 9v6"
      pathLength="1"
      class="pluscircle-vertical"
      [class.pluscircle-vertical-animate]="shouldAnimate()"
    />
    <path
      d="M9 12h6"
      pathLength="1"
      class="pluscircle-horizontal"
      [class.pluscircle-horizontal-animate]="shouldAnimate()"
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

      .pluscircle-vertical,
      .pluscircle-horizontal {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .pluscircle-vertical.pluscircle-vertical-animate {
        animation: pluscircle-line-draw 0.2s ease-in-out 0.3s both;
      }

      .pluscircle-horizontal.pluscircle-horizontal-animate {
        animation: pluscircle-line-draw 0.2s ease-in-out 0.6s both;
      }

      @keyframes pluscircle-line-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `,
  ],
})
export class PlusCircleIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  onMouseEnter() {
    this.isHovered.set(true);
  }

  onMouseLeave() {
    this.isHovered.set(false);
  }
}
