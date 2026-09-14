import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-window",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'window'",
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
      d="M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21"
    />
    <path
      class="window-btn window-btn-0"
      [class.window-btn-pop]="shouldAnimate()"
      d="M5.25 6H5.2575V6.0075H5.25V6Z"
    />
    <path
      class="window-btn window-btn-1"
      [class.window-btn-pop]="shouldAnimate()"
      d="M7.5 6H7.5075V6.0075H7.5V6Z"
    />
    <path
      class="window-btn window-btn-2"
      [class.window-btn-pop]="shouldAnimate()"
      d="M9.75 6H9.7575V6.0075H9.75V6Z"
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

      .window-btn {
        transform-box: fill-box;
        transform-origin: center;
        opacity: 1;
        transform: scale(1);
      }

      .window-btn.window-btn-pop {
        animation: window-btn-pop 0.3s ease-out forwards;
      }

      .window-btn-0.window-btn-pop {
        animation-delay: 0s;
      }
      .window-btn-1.window-btn-pop {
        animation-delay: 0.1s;
      }
      .window-btn-2.window-btn-pop {
        animation-delay: 0.2s;
      }

      @keyframes window-btn-pop {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.3);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `,
  ],
})
export class WindowIcon {
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
