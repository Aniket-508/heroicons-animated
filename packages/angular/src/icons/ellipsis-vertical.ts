import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-ellipsis-vertical",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'ellipsis-vertical'",
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
      d="M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z"
      class="ellipsisvertical-dot"
      [class.ellipsisvertical-pulse]="shouldAnimate()"
    />
    <path
      d="M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z"
      class="ellipsisvertical-dot"
      [class.ellipsisvertical-pulse]="shouldAnimate()"
    />
    <path
      d="M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z"
      class="ellipsisvertical-dot"
      [class.ellipsisvertical-pulse]="shouldAnimate()"
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

      .ellipsisvertical-dot {
        transform-box: fill-box;
        transform-origin: 50% 50%;
      }

      .ellipsisvertical-dot.ellipsisvertical-pulse {
        animation: ellipsisvertical-pulse 0.4s ease-in-out forwards;
      }
      .ellipsisvertical-dot:nth-child(1).ellipsisvertical-pulse {
        animation-delay: 0s;
      }
      .ellipsisvertical-dot:nth-child(2).ellipsisvertical-pulse {
        animation-delay: 0.05s;
      }
      .ellipsisvertical-dot:nth-child(3).ellipsisvertical-pulse {
        animation-delay: 0.1s;
      }

      @keyframes ellipsisvertical-pulse {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
      }
    `,
  ],
})
export class EllipsisVerticalIcon {
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
