import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-minus",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'minus'",
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
      d="M5 12h14"
      pathLength="1"
      class="minus-line"
      [class.minus-line-animate]="shouldAnimate()"
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

      .minus-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
      }

      .minus-line.minus-line-animate {
        animation: minus-line-draw 0.3s ease-out forwards;
      }

      @keyframes minus-line-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        33% {
          opacity: 1;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `,
  ],
})
export class MinusIcon {
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
