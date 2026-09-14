import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-cursor-arrow-ripple",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'cursor-arrow-ripple'",
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
      d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
      class="cursor-arrow-ripple-cursor"
      [class.cursor-move]="shouldAnimate()"
    />
    <path
      d="M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999"
      class="cursor-arrow-ripple-r1"
      [class.ripple-fade]="shouldAnimate()"
    />
    <path
      d="M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999"
      class="cursor-arrow-ripple-r0"
      [class.ripple-fade]="shouldAnimate()"
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

      /* Cursor: x [0,0,-3,0] y [0,-4,0,0] 1s bounce 0.3 (approx cubic-bezier) */
      .cursor-arrow-ripple-cursor {
        transform-box: fill-box;
        transform-origin: center;
      }

      .cursor-arrow-ripple-cursor.cursor-move {
        animation: cursor-ripple-move 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes cursor-ripple-move {
        0% {
          transform: translate(0, 0);
        }
        33% {
          transform: translate(0, -4px);
        }
        66% {
          transform: translate(-3px, 0);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      /* Ripple 0 (inner): opacity [0,1] delay 1s duration 0.3s */
      .cursor-arrow-ripple-r0.ripple-fade {
        animation: ripple-fade-in 0.3s ease-out 1s forwards;
        opacity: 0;
      }

      /* Ripple 1 (outer): opacity [0,1] delay 1.3s duration 0.3s */
      .cursor-arrow-ripple-r1.ripple-fade {
        animation: ripple-fade-in 0.3s ease-out 1.3s forwards;
        opacity: 0;
      }

      @keyframes ripple-fade-in {
        to {
          opacity: 1;
        }
      }
    `,
  ],
})
export class CursorArrowRippleIcon {
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
