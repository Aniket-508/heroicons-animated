import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-pause",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'pause'",
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
    <path d="M15.75 5.25v13.5" class="pause-left" [class.pause-left-animate]="shouldAnimate()" />
    <path d="M8.25 5.25v13.5" class="pause-right" [class.pause-right-animate]="shouldAnimate()" />
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

      .pause-left,
      .pause-right {
        transform-box: fill-box;
        transform-origin: center;
      }

      .pause-left.pause-left-animate {
        animation: pause-left-bounce 0.5s ease-in-out forwards;
      }

      .pause-right.pause-right-animate {
        animation: pause-right-bounce 0.5s ease-in-out forwards;
      }

      @keyframes pause-left-bounce {
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

      @keyframes pause-right-bounce {
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
    `,
  ],
})
export class PauseIcon {
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
