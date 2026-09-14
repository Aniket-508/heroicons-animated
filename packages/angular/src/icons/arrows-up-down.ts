import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrows-up-down",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrows-up-down'",
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
    <g class="up-arrow-group" [class.animate]="shouldAnimate()">
      <path d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5" />
    </g>
    <g class="down-arrow-group" [class.animate]="shouldAnimate()">
      <path d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
    </g>
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

      .up-arrow-group,
      .down-arrow-group {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
      }

      .up-arrow-group.animate {
        animation: up-arrow-translate 0.5s ease-in-out forwards;
      }

      .down-arrow-group.animate {
        animation: down-arrow-translate 0.5s ease-in-out forwards;
      }

      @keyframes up-arrow-translate {
        0% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-2px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes down-arrow-translate {
        0% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(2px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ArrowsUpDownIcon {
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
