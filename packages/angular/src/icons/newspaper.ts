import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-newspaper",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'newspaper'",
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
      d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
    />
    <path
      d="M6 7.5h3v3H6v-3Z"
      class="newspaper-square"
      [class.newspaper-square-animate]="shouldAnimate()"
    />
    <path
      d="M12 7.5h1.5"
      pathLength="1"
      class="newspaper-line"
      [class.newspaper-line1-animate]="shouldAnimate()"
    />
    <path
      d="M12 10.5h1.5"
      pathLength="1"
      class="newspaper-line"
      [class.newspaper-line2-animate]="shouldAnimate()"
    />
    <path
      d="M6 13.5h7.5"
      pathLength="1"
      class="newspaper-line"
      [class.newspaper-line3-animate]="shouldAnimate()"
    />
    <path
      d="M6 16.5h7.5"
      pathLength="1"
      class="newspaper-line"
      [class.newspaper-line4-animate]="shouldAnimate()"
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

      .newspaper-square {
        opacity: 1;
      }

      .newspaper-square.newspaper-square-animate {
        animation: newspaper-square-fade 0.3s ease-out forwards;
      }

      @keyframes newspaper-square-fade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      .newspaper-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .newspaper-line.newspaper-line1-animate {
        animation: newspaper-line-draw 0.2s ease-out 0.2s forwards;
      }

      .newspaper-line.newspaper-line2-animate {
        animation: newspaper-line-draw 0.2s ease-out 0.3s forwards;
      }

      .newspaper-line.newspaper-line3-animate {
        animation: newspaper-line-draw 0.2s ease-out 0.4s forwards;
      }

      .newspaper-line.newspaper-line4-animate {
        animation: newspaper-line-draw 0.2s ease-out 0.5s forwards;
      }

      @keyframes newspaper-line-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `,
  ],
})
export class NewspaperIcon {
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
