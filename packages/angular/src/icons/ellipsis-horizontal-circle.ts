import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-ellipsis-horizontal-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'ellipsis-horizontal-circle'",
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
      d="M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25"
      class="ellipsishorizontalcircle-dot"
      [class.ellipsishorizontalcircle-pulse]="shouldAnimate()"
    />
    <path
      d="M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12"
      class="ellipsishorizontalcircle-dot"
      [class.ellipsishorizontalcircle-pulse]="shouldAnimate()"
    />
    <path
      d="M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75"
      class="ellipsishorizontalcircle-dot"
      [class.ellipsishorizontalcircle-pulse]="shouldAnimate()"
    />
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
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

      .ellipsishorizontalcircle-dot {
        transform-box: fill-box;
        transform-origin: 50% 50%;
      }

      .ellipsishorizontalcircle-dot.ellipsishorizontalcircle-pulse {
        animation: ellipsishorizontalcircle-pulse 0.4s ease-in-out forwards;
      }
      .ellipsishorizontalcircle-dot:nth-child(1).ellipsishorizontalcircle-pulse {
        animation-delay: 0s;
      }
      .ellipsishorizontalcircle-dot:nth-child(2).ellipsishorizontalcircle-pulse {
        animation-delay: 0.05s;
      }
      .ellipsishorizontalcircle-dot:nth-child(3).ellipsishorizontalcircle-pulse {
        animation-delay: 0.1s;
      }

      @keyframes ellipsishorizontalcircle-pulse {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
      }
    `,
  ],
})
export class EllipsisHorizontalCircleIcon {
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
