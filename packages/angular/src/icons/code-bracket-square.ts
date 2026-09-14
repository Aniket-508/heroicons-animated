import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-code-bracket-square",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'code-bracket-square'",
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
      d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
    <path
      d="M9.75 9.75L7.5 12l2.25 2.25"
      class="left-bracket"
      [class.left-bracket-animate]="shouldAnimate()"
    />
    <path
      d="M14.25 9.75 16.5 12l-2.25 2.25"
      class="right-bracket"
      [class.right-bracket-animate]="shouldAnimate()"
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

      .left-bracket,
      .right-bracket {
        transform-box: fill-box;
        transform-origin: center;
      }

      .left-bracket.left-bracket-animate {
        animation: codebracketsquare-left 0.5s ease-in-out;
      }

      .right-bracket.right-bracket-animate {
        animation: codebracketsquare-right 0.5s ease-in-out;
      }

      @keyframes codebracketsquare-left {
        0% {
          transform: translateX(0) rotate(0deg);
        }
        50% {
          transform: translateX(-1.5px) rotate(6deg);
        }
        100% {
          transform: translateX(0) rotate(0deg);
        }
      }

      @keyframes codebracketsquare-right {
        0% {
          transform: translateX(0) rotate(0deg);
        }
        50% {
          transform: translateX(1.5px) rotate(-6deg);
        }
        100% {
          transform: translateX(0) rotate(0deg);
        }
      }
    `,
  ],
})
export class CodeBracketSquareIcon {
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
