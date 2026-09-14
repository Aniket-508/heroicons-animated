import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-book-open",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'book-open'",
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
    <g #leftPageGroup class="left-page" [class.animate]="shouldAnimate()">
      <path
        d="M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917"
      />
    </g>
    <g #rightPageGroup class="right-page" [class.animate]="shouldAnimate()">
      <path
        d="M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917"
      />
    </g>
    <path d="M12 6.04168V20.2917" />
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

      .left-page {
        transform-box: fill-box;
        transform-origin: 100% 50%;
        transition: transform 0.5s ease-in-out;
      }

      .right-page {
        transform-box: fill-box;
        transform-origin: 0% 50%;
        transition: transform 0.5s ease-in-out;
      }

      .left-page.animate {
        animation: left-page-rotate 0.5s ease-in-out forwards;
      }

      .right-page.animate {
        animation: right-page-rotate 0.5s ease-in-out forwards;
      }

      @keyframes left-page-rotate {
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(15deg);
        }
        100% {
          transform: rotateY(0deg);
        }
      }

      @keyframes right-page-rotate {
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(-15deg);
        }
        100% {
          transform: rotateY(0deg);
        }
      }
    `,
  ],
})
export class BookOpenIcon {
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
