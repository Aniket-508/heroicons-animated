import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-receipt-percent",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'receipt-percent'",
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
      d="M19.5 4.75699V21.75L15.75 20.25L12 21.75L8.25 20.25L4.5 21.75V4.75699C4.5 3.649 5.30608 2.70014 6.40668 2.57241C8.24156 2.35947 10.108 2.25 12 2.25C13.892 2.25 15.7584 2.35947 17.5933 2.57241C18.6939 2.70014 19.5 3.649 19.5 4.75699Z"
    />
    <path
      class="receiptpercent-line"
      [class.receiptpercent-draw]="shouldAnimate()"
      pathLength="1"
      d="M9 14.25L15 8.25"
    />
    <path
      class="receiptpercent-dot receiptpercent-dot-1"
      [class.receiptpercent-dot-pop]="shouldAnimate()"
      d="M9.75 9H9.7575V9.0075H9.75V9ZM10.125 9C10.125 9.20711 9.95711 9.375 9.75 9.375C9.54289 9.375 9.375 9.20711 9.375 9C9.375 8.79289 9.54289 8.625 9.75 8.625C9.95711 8.625 10.125 8.79289 10.125 9Z"
    />
    <path
      class="receiptpercent-dot receiptpercent-dot-2"
      [class.receiptpercent-dot-pop]="shouldAnimate()"
      d="M14.25 13.5H14.2575V13.5075H14.25V13.5ZM14.625 13.5C14.625 13.7071 14.4571 13.875 14.25 13.875C14.0429 13.875 13.875 13.7071 13.875 13.5C13.875 13.2929 14.0429 13.125 14.25 13.125C14.4571 13.125 14.625 13.2929 14.625 13.5Z"
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

      .receiptpercent-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .receiptpercent-line.receiptpercent-draw {
        animation: receiptpercent-draw 0.4s ease-out forwards;
      }

      @keyframes receiptpercent-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }

      .receiptpercent-dot {
        transform-box: fill-box;
        transform-origin: center;
        opacity: 1;
        transform: scale(1);
      }

      .receiptpercent-dot.receiptpercent-dot-pop {
        animation: receiptpercent-dot-pop 0.3s ease-out forwards;
      }

      .receiptpercent-dot-1.receiptpercent-dot-pop {
        animation-delay: 0.2s;
      }
      .receiptpercent-dot-2.receiptpercent-dot-pop {
        animation-delay: 0.35s;
      }

      @keyframes receiptpercent-dot-pop {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        33% {
          opacity: 1;
        }
        66% {
          transform: scale(1.2);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class ReceiptPercentIcon {
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
