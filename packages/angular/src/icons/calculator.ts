import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-calculator",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'calculator'",
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
      d="M12 2.25C10.108 2.25 8.24156 2.35947 6.40668 2.57241C5.30608 2.70014 4.5 3.649 4.5 4.75699V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.75699C19.5 3.649 18.6939 2.70014 17.5933 2.57241C15.7584 2.35947 13.892 2.25 12 2.25Z"
    />
    <path
      d="M8.25 6H15.75V8.25H8.25V6Z"
      class="calculator-screen"
      [class.calculator-screen-animate]="shouldAnimate()"
    />
    <path
      d="M8.25 11.25H8.2575V11.2575H8.25V11.25Z"
      class="calculator-btn calculator-btn0"
      [class.calculator-btn-animate]="shouldAnimate()"
    />
    <path
      d="M10.7476 11.25H10.7551V11.2575H10.7476V11.25Z"
      class="calculator-btn calculator-btn1"
      [class.calculator-btn-animate]="shouldAnimate()"
    />
    <path
      d="M13.2524 13.5H13.2599V13.5075H13.2524V13.5Z"
      class="calculator-btn calculator-btn2"
      [class.calculator-btn-animate]="shouldAnimate()"
    />
    <path
      d="M8.25 15.75H8.2575V15.7575H8.25V15.75Z"
      class="calculator-btn calculator-btn3"
      [class.calculator-btn-animate]="shouldAnimate()"
    />
    <path
      d="M15.75 11.25H15.7575V11.2575H15.75V11.25Z"
      class="calculator-btn calculator-btn4"
      [class.calculator-btn-animate]="shouldAnimate()"
    />
    <path
      d="M10.7476 18H10.7551V18.0075H10.7476V18Z"
      class="calculator-btn calculator-btn5"
      [class.calculator-btn-animate]="shouldAnimate()"
    />
    <path d="M8.25 13.5H8.2575V13.5075H8.25V13.5Z" />
    <path d="M8.25 18H8.2575V18.0075H8.25V18Z" />
    <path d="M10.7476 13.5H10.7551V13.5075H10.7476V13.5Z" />
    <path d="M10.7476 15.75H10.7551V15.7575H10.7476V15.75Z" />
    <path d="M13.2524 11.25H13.2599V11.2575H13.2524V11.25Z" />
    <path d="M13.2524 15.75H13.2599V15.7575H13.2524V15.75Z" />
    <path d="M13.2524 18H13.2599V18.0075H13.2524V18Z" />
    <path d="M15.75 13.5H15.7575V13.5075H15.75V13.5Z" />
    <path
      d="M15.75 15.75V18"
      class="calculator-enter"
      [class.calculator-enter-animate]="shouldAnimate()"
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

      /* Match React: screen opacity [1,0.4,1] 0.2s delay 0.65; buttons scale [1,1.5,1] opacity [1,0.5,1] 0.15s delay index*0.08; enter scale [1,1.3,1] opacity [1,0.6,1] 0.2s delay 0.5 */
      .calculator-screen.calculator-screen-animate {
        animation: calculator-screen-pulse 0.2s ease-out 0.65s forwards;
      }

      .calculator-btn,
      .calculator-enter {
        transform-box: fill-box;
        transform-origin: center;
      }

      .calculator-btn0.calculator-btn-animate {
        animation: calculator-btn-pulse 0.15s ease-out 0s forwards;
      }
      .calculator-btn1.calculator-btn-animate {
        animation: calculator-btn-pulse 0.15s ease-out 0.16s forwards;
      }
      .calculator-btn2.calculator-btn-animate {
        animation: calculator-btn-pulse 0.15s ease-out 0.08s forwards;
      }
      .calculator-btn3.calculator-btn-animate {
        animation: calculator-btn-pulse 0.15s ease-out 0.32s forwards;
      }
      .calculator-btn4.calculator-btn-animate {
        animation: calculator-btn-pulse 0.15s ease-out 0.24s forwards;
      }
      .calculator-btn5.calculator-btn-animate {
        animation: calculator-btn-pulse 0.15s ease-out 0.4s forwards;
      }
      .calculator-enter.calculator-enter-animate {
        animation: calculator-enter-pulse 0.2s ease-out 0.5s forwards;
      }

      @keyframes calculator-screen-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.4;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes calculator-btn-pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.5);
          opacity: 0.5;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes calculator-enter-pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.3);
          opacity: 0.6;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `,
  ],
})
export class CalculatorIcon {
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
