import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-cake",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'cake'",
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
      class="cake-body"
      [class.animate]="shouldAnimate()"
      d="M12 8.25c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m3 3.879-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"
    />
    <g class="candle-group" [class.animate]="shouldAnimate()">
      <path d="M9 8.25v-1.5" />
      <path d="M12 8.25v-1.5" />
      <path d="M15 8.25v-1.5" />
    </g>
    <path
      class="flame-left"
      [class.animate]="shouldAnimate()"
      d="M9.265 3.11a.375.375 0 1 1-.53 0L9 2.845l.265.265Z"
    />
    <path
      class="flame-middle"
      [class.animate]="shouldAnimate()"
      d="M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z"
    />
    <path
      class="flame-right"
      [class.animate]="shouldAnimate()"
      d="M15.265 3.11a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
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

      .cake-body {
        transform-box: fill-box;
        transform-origin: center bottom;
      }
      .cake-body.animate {
        animation: cake-body-in 0.4s ease-out forwards;
      }

      .candle-group {
        transform-box: fill-box;
        transform-origin: center bottom;
      }
      .candle-group.animate {
        animation: candle-grow 0.3s ease-out 0.3s forwards;
        opacity: 0;
      }

      .flame-left {
        transform-box: fill-box;
        transform-origin: 37.5% 50%;
      }
      .flame-left.animate {
        animation: flame-pop 0.25s ease-out 0.5s forwards;
        opacity: 0;
      }

      .flame-middle {
        transform-box: fill-box;
        transform-origin: 50% 50%;
      }
      .flame-middle.animate {
        animation: flame-pop 0.25s ease-out 0.65s forwards;
        opacity: 0;
      }

      .flame-right {
        transform-box: fill-box;
        transform-origin: 62.5% 50%;
      }
      .flame-right.animate {
        animation: flame-pop 0.25s ease-out 0.8s forwards;
        opacity: 0;
      }

      @keyframes cake-body-in {
        0% {
          transform: translateY(8px);
          opacity: 0;
        }
        50% {
          transform: translateY(-1px);
          opacity: 1;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @keyframes candle-grow {
        0% {
          transform: scaleY(0);
          opacity: 0;
        }
        66.67% {
          transform: scaleY(1.2);
          opacity: 1;
        }
        100% {
          transform: scaleY(1);
          opacity: 1;
        }
      }

      @keyframes flame-pop {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.3);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    `,
  ],
})
export class CakeIcon {
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
