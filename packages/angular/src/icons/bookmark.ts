import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-bookmark",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bookmark'",
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
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
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
export class BookmarkIcon {
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
