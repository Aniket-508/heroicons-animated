import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-truck",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'truck'",
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
    class="icon-svg truck-svg"
  >
    <line
      class="truck-speed truck-speed-0"
      [class.truck-speed-run]="shouldAnimate()"
      x1="0"
      x2="5"
      y1="8"
      y2="8"
    />
    <line
      class="truck-speed truck-speed-1"
      [class.truck-speed-run]="shouldAnimate()"
      x1="-1"
      x2="6"
      y1="11"
      y2="11"
    />
    <line
      class="truck-speed truck-speed-2"
      [class.truck-speed-run]="shouldAnimate()"
      x1="0"
      x2="4"
      y1="14"
      y2="14"
    />
    <path
      class="truck-path"
      [class.truck-bounce]="shouldAnimate()"
      d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
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

      .truck-svg {
        overflow: visible;
      }

      .truck-path {
        transform: translateY(0);
      }

      .truck-path.truck-bounce {
        animation: truck-bounce 0.4s ease-in-out infinite;
      }

      @keyframes truck-bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        25% {
          transform: translateY(-1px);
        }
        50% {
          transform: translateY(0);
        }
        75% {
          transform: translateY(-0.5px);
        }
      }

      .truck-speed {
        opacity: 0;
        transform: translateX(0) scaleX(0.2);
        transform-origin: left center;
      }

      .truck-speed.truck-speed-run {
        animation: truck-speed-run 0.5s ease-out infinite;
      }

      .truck-speed-0.truck-speed-run {
        animation-delay: 0s;
      }
      .truck-speed-1.truck-speed-run {
        animation-delay: 0.08s;
      }
      .truck-speed-2.truck-speed-run {
        animation-delay: 0.16s;
      }

      @keyframes truck-speed-run {
        0% {
          opacity: 0;
          transform: translateX(0) scaleX(0.2);
        }
        20% {
          opacity: 0.7;
          transform: translateX(-4px) scaleX(1);
        }
        60% {
          opacity: 0.5;
          transform: translateX(-10px) scaleX(0.8);
        }
        100% {
          opacity: 0;
          transform: translateX(-16px) scaleX(0.3);
        }
      }
    `,
  ],
})
export class TruckIcon {
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
