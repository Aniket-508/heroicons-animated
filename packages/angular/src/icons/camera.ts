import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-camera",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'camera'",
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
    [class.camera-body-animate]="shouldAnimate()"
  >
    <path
      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
    />
    <path
      class="camera-lens"
      [class.camera-lens-animate]="shouldAnimate()"
      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
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

      /* Body: scale [1, 0.95, 1], 0.3s easeInOut (matches React BODY_VARIANTS) */
      .icon-svg.camera-body-animate {
        animation: camera-body-animate 0.3s ease-in-out forwards;
      }

      @keyframes camera-body-animate {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }

      /* Lens: scale [1, 1.1, 1], opacity [1, 0.6, 1], 0.3s easeInOut (matches React LENS_VARIANTS) */
      .camera-lens {
        transform-box: fill-box;
        transform-origin: 12px 12.75px;
      }

      .camera-lens.camera-lens-animate {
        animation: camera-lens-animate 0.3s ease-in-out forwards;
      }

      @keyframes camera-lens-animate {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.6;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `,
  ],
})
export class CameraIcon {
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
