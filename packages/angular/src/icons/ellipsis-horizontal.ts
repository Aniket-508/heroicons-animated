import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-ellipsis-horizontal",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'ellipsis-horizontal'",
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
      d="M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z"
      class="ellipsishorizontal-dot"
      [class.ellipsishorizontal-pulse]="shouldAnimate()"
    />
    <path
      d="M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z"
      class="ellipsishorizontal-dot"
      [class.ellipsishorizontal-pulse]="shouldAnimate()"
    />
    <path
      d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z"
      class="ellipsishorizontal-dot"
      [class.ellipsishorizontal-pulse]="shouldAnimate()"
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

      .ellipsishorizontal-dot {
        transform-box: fill-box;
        transform-origin: 50% 50%;
      }

      .ellipsishorizontal-dot.ellipsishorizontal-pulse {
        animation: ellipsishorizontal-pulse 0.4s ease-in-out forwards;
      }
      .ellipsishorizontal-dot:nth-child(1).ellipsishorizontal-pulse {
        animation-delay: 0s;
      }
      .ellipsishorizontal-dot:nth-child(2).ellipsishorizontal-pulse {
        animation-delay: 0.05s;
      }
      .ellipsishorizontal-dot:nth-child(3).ellipsishorizontal-pulse {
        animation-delay: 0.1s;
      }

      @keyframes ellipsishorizontal-pulse {
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
export class EllipsisHorizontalIcon {
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
