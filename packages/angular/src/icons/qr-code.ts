import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-qr-code",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'qr-code'",
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
      d="M3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H9.375C9.99632 3.75 10.5 4.25368 10.5 4.875V9.375C10.5 9.99632 9.99632 10.5 9.375 10.5H4.875C4.25368 10.5 3.75 9.99632 3.75 9.375V4.875Z"
    />
    <path
      d="M3.75 14.625C3.75 14.0037 4.25368 13.5 4.875 13.5H9.375C9.99632 13.5 10.5 14.0037 10.5 14.625V19.125C10.5 19.7463 9.99632 20.25 9.375 20.25H4.875C4.25368 20.25 3.75 19.7463 3.75 19.125V14.625Z"
    />
    <path
      d="M13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75H19.125C19.7463 3.75 20.25 4.25368 20.25 4.875V9.375C20.25 9.99632 19.7463 10.5 19.125 10.5H14.625C14.0037 10.5 13.5 9.99632 13.5 9.375V4.875Z"
    />
    <path
      class="qrcode-dot qrcode-dot-0"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M6.75 6.75H7.5V7.5H6.75V6.75Z"
    />
    <path
      class="qrcode-dot qrcode-dot-1"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M6.75 16.5H7.5V17.25H6.75V16.5Z"
    />
    <path
      class="qrcode-dot qrcode-dot-2"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M16.5 6.75H17.25V7.5H16.5V6.75Z"
    />
    <path
      class="qrcode-dot qrcode-dot-3"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M13.5 13.5H14.25V14.25H13.5V13.5Z"
    />
    <path
      class="qrcode-dot qrcode-dot-4"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M13.5 19.5H14.25V20.25H13.5V19.5Z"
    />
    <path
      class="qrcode-dot qrcode-dot-5"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M19.5 13.5H20.25V14.25H19.5V13.5Z"
    />
    <path
      class="qrcode-dot qrcode-dot-6"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M19.5 19.5H20.25V20.25H19.5V19.5Z"
    />
    <path
      class="qrcode-dot qrcode-dot-7"
      [class.qrcode-dot-animate]="shouldAnimate()"
      d="M16.5 16.5H17.25V17.25H16.5V16.5Z"
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

      .qrcode-dot {
        transform-origin: center;
        opacity: 1;
        transform: scale(1);
      }

      .qrcode-dot.qrcode-dot-animate {
        animation: qrcode-dot-pop 0.3s ease-out forwards;
      }

      .qrcode-dot-0.qrcode-dot-animate {
        animation-delay: 0s;
      }
      .qrcode-dot-1.qrcode-dot-animate {
        animation-delay: 0.05s;
      }
      .qrcode-dot-2.qrcode-dot-animate {
        animation-delay: 0.1s;
      }
      .qrcode-dot-3.qrcode-dot-animate {
        animation-delay: 0.15s;
      }
      .qrcode-dot-4.qrcode-dot-animate {
        animation-delay: 0.2s;
      }
      .qrcode-dot-5.qrcode-dot-animate {
        animation-delay: 0.25s;
      }
      .qrcode-dot-6.qrcode-dot-animate {
        animation-delay: 0.3s;
      }
      .qrcode-dot-7.qrcode-dot-animate {
        animation-delay: 0.35s;
      }

      @keyframes qrcode-dot-pop {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        66% {
          transform: scale(1.2);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class QrCodeIcon {
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
