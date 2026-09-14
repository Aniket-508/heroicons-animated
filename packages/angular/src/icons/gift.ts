import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-gift",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'gift'",
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
    [class.gift-animate]="shouldAnimate()"
  >
    <path
      d="M20.625 11.5046V19.7546C20.625 20.5831 19.9534 21.2546 19.125 21.2546H4.875C4.04657 21.2546 3.375 20.5831 3.375 19.7546V11.5046M11.625 5.12964C11.625 3.67989 10.4497 2.50464 9 2.50464C7.55025 2.50464 6.375 3.67989 6.375 5.12964C6.375 6.57939 7.55025 7.75464 9 7.75464C9.73451 7.75464 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 5.84488 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 3.67989 12.8003 2.50464 14.25 2.50464C15.6997 2.50464 16.875 3.67989 16.875 5.12964C16.875 6.57939 15.6997 7.75464 14.25 7.75464C13.5155 7.75464 11.625 7.75464 11.625 7.75464M11.625 7.75464V21.2546M3 11.5046H21C21.6213 11.5046 22.125 11.001 22.125 10.3796V8.87964C22.125 8.25832 21.6213 7.75464 21 7.75464H3C2.37868 7.75464 1.875 8.25832 1.875 8.87964V10.3796C1.875 11.001 2.37868 11.5046 3 11.5046Z"
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
        transition: transform 0.3s ease;
      }

      .icon-svg.gift-animate {
        animation: gift-animate 0.5s ease-in-out;
      }

      @keyframes gift-animate {
        0% {
          transform: rotate(0deg) scale(1);
        }
        20% {
          transform: rotate(-5deg) scale(1.05);
        }
        40% {
          transform: rotate(5deg) scale(1.05);
        }
        60% {
          transform: rotate(-3deg) scale(1.05);
        }
        80% {
          transform: rotate(3deg) scale(1.05);
        }
        100% {
          transform: rotate(0deg) scale(1);
        }
      }
    `,
  ],
})
export class GiftIcon {
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
