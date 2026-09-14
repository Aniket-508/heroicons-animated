import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-bookmark-square",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bookmark-square'",
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
      #pathElement
      class="bookmark-path"
      [class.animate]="shouldAnimate()"
      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
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

      .bookmark-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.6s ease-out;
      }

      .bookmark-path.animate {
        animation: bookmark-bounce 0.6s ease-out forwards;
      }

      @keyframes bookmark-bounce {
        0% {
          transform: scaleY(1) scaleX(1);
        }
        20% {
          transform: scaleY(1.3) scaleX(0.9);
        }
        40% {
          transform: scaleY(0.9) scaleX(1.1);
        }
        60% {
          transform: scaleY(1.05) scaleX(0.95);
        }
        100% {
          transform: scaleY(1) scaleX(1);
        }
      }
    `,
  ],
})
export class BookmarkSquareIcon {
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
