import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrow-down-on-square-stack",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-down-on-square-stack'",
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
      d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5"
    />
    <path
      class="arrow-path"
      [class.animate]="shouldAnimate()"
      d="M7.5 11.25L10.5 14.25M10.5 14.25L13.5 11.25M10.5 14.25L10.5 1.5"
    />
    <path
      d="M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5"
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

      .arrow-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.4s ease-in-out;
      }

      .arrow-path.animate {
        animation: arrow-translate 0.4s ease-in-out forwards;
      }

      @keyframes arrow-translate {
        0% {
          transform: translateY(0);
        }
        33% {
          transform: translateY(-1px);
        }
        66% {
          transform: translateY(1px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ArrowDownOnSquareStackIcon {
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
