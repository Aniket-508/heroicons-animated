import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-pause-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'pause-circle'",
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
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path
      d="M9.75 9v6"
      class="pausecircle-left"
      [class.pausecircle-left-animate]="shouldAnimate()"
    />
    <path
      d="M14.25 9v6"
      class="pausecircle-right"
      [class.pausecircle-right-animate]="shouldAnimate()"
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

      .pausecircle-left,
      .pausecircle-right {
        transform-box: fill-box;
        transform-origin: center;
      }

      .pausecircle-left.pausecircle-left-animate {
        animation: pausecircle-left-bounce 0.5s ease-in-out forwards;
      }

      .pausecircle-right.pausecircle-right-animate {
        animation: pausecircle-right-bounce 0.5s ease-in-out forwards;
      }

      @keyframes pausecircle-left-bounce {
        0% {
          transform: translateY(0);
        }
        20% {
          transform: translateY(2px);
        }
        50%,
        100% {
          transform: translateY(0);
        }
      }

      @keyframes pausecircle-right-bounce {
        0%,
        20% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(2px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class PauseCircleIcon {
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
