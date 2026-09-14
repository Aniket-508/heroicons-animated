import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-chart-pie",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'chart-pie'",
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
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path
      class="chart-pie-wedge"
      [class.chart-pie-wedge-animate]="shouldAnimate()"
      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
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

      /* Second path: translateX 1.1, translateY -1.1, spring (≈ cubic-bezier) matches React PATH_VARIANTS */
      .chart-pie-wedge {
        transform-box: fill-box;
        transform-origin: center;
      }

      .chart-pie-wedge.chart-pie-wedge-animate {
        animation: chart-pie-wedge-move 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes chart-pie-wedge-move {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(1.1px, -1.1px);
        }
      }
    `,
  ],
})
export class ChartPieIcon {
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
