import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-currency-rupee",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'currency-rupee'",
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
    [class.currencyrupee-flip]="shouldAnimate()"
  >
    <path
      d="M15 8.25L9 8.25M15 11.25H9M12 17.25L9 14.25H10.5C12.1569 14.25 13.5 12.9069 13.5 11.25C13.5 9.59315 12.1569 8.25 10.5 8.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .icon-svg {
        transform-box: fill-box;
        transform-origin: 50% 50%;
      }

      .icon-svg.currencyrupee-flip {
        animation: currencyrupee-flip 0.6s ease-in-out;
      }

      @keyframes currencyrupee-flip {
        0%,
        100% {
          transform: scaleX(1);
        }
        50% {
          transform: scaleX(-1);
        }
      }
    `,
  ],
})
export class CurrencyRupeeIcon {
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
