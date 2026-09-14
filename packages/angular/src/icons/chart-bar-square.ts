import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-chart-bar-square",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'chart-bar-square'",
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
      class="chart-bar"
      [class.chart-bar-animate]="shouldAnimate()"
      pathLength="1"
      style="animation-delay: 0s"
      d="M7.5 16.5v-2.25"
    />
    <path
      class="chart-bar"
      [class.chart-bar-animate]="shouldAnimate()"
      pathLength="1"
      style="animation-delay: 0.15s"
      d="M10.5 16.5v-4.5"
    />
    <path
      class="chart-bar"
      [class.chart-bar-animate]="shouldAnimate()"
      pathLength="1"
      style="animation-delay: 0.3s"
      d="M13.5 16.5v-6.75"
    />
    <path
      class="chart-bar"
      [class.chart-bar-animate]="shouldAnimate()"
      pathLength="1"
      style="animation-delay: 0.45s"
      d="M16.5 16.5v-9"
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

      /* pathLength [0,1] pathOffset [1,0], opacity [0,1], 0.4s easeOut, staggered delay (matches React CREATE_BAR_VARIANTS) */
      .chart-bar {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .chart-bar.chart-bar-animate {
        animation: chart-bar-draw 0.4s ease-out forwards;
      }

      @keyframes chart-bar-draw {
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
    `,
  ],
})
export class ChartBarSquareIcon {
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
