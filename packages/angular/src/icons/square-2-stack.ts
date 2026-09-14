import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-square-2-stack",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'square-2-stack'",
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
      class="square2stack-back"
      [class.square2stack-back-animate]="shouldAnimate()"
      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25"
    />
    <path
      class="square2stack-front"
      [class.square2stack-front-animate]="shouldAnimate()"
      d="M16.5 8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
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

      .square2stack-back {
        opacity: 1;
        transform: translate(0, 0);
      }

      .square2stack-back.square2stack-back-animate {
        animation: square2stack-back 0.3s ease-out forwards;
      }

      @keyframes square2stack-back {
        0% {
          transform: translate(-4px, -4px);
          opacity: 0;
        }
        100% {
          transform: translate(0, 0);
          opacity: 1;
        }
      }

      .square2stack-front {
        transform: translate(0, 0);
      }

      .square2stack-front.square2stack-front-animate {
        animation: square2stack-front 0.3s ease-in-out forwards;
      }

      @keyframes square2stack-front {
        0%,
        100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(1px, 1px);
        }
      }
    `,
  ],
})
export class Square2StackIcon {
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
