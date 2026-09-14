import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-power",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'power'",
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
      d="M5.636 5.636a9 9 0 1 0 12.728 0"
      class="power-circle"
      [class.power-circle-animate]="shouldAnimate()"
    />
    <path d="M12 3v9" class="power-line" [class.power-line-animate]="shouldAnimate()" />
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

      .power-circle {
        transform-box: fill-box;
        transform-origin: center center;
      }

      .power-circle.power-circle-animate {
        animation: power-circle-pulse 0.5s ease-in-out forwards;
      }

      @keyframes power-circle-pulse {
        0% {
          opacity: 0.5;
          transform: scale(1);
        }
        33% {
          opacity: 1;
          transform: scale(1.05);
        }
        66% {
          opacity: 0.5;
          transform: scale(1);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      .power-line {
        transform-box: fill-box;
        transform-origin: center;
      }

      .power-line.power-line-animate {
        animation: power-line-bounce 0.3s ease-in-out forwards;
      }

      @keyframes power-line-bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-2px);
        }
      }
    `,
  ],
})
export class PowerIcon {
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
