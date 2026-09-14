import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-presentation-chart-bar",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'presentation-chart-bar'",
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
      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
    />
    <path
      d="M9 12.75v-1.5"
      pathLength="1"
      class="presentationchartbar-bar"
      [class.presentationchartbar-bar1-animate]="shouldAnimate()"
    />
    <path
      d="M12 12.75v-3.75"
      pathLength="1"
      class="presentationchartbar-bar"
      [class.presentationchartbar-bar2-animate]="shouldAnimate()"
    />
    <path
      d="M15 12.75v-6"
      pathLength="1"
      class="presentationchartbar-bar"
      [class.presentationchartbar-bar3-animate]="shouldAnimate()"
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

      .presentationchartbar-bar {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .presentationchartbar-bar.presentationchartbar-bar1-animate {
        animation: presentationchartbar-bar-draw 0.4s ease-out 0s forwards;
      }

      .presentationchartbar-bar.presentationchartbar-bar2-animate {
        animation: presentationchartbar-bar-draw 0.4s ease-out 0.15s forwards;
      }

      .presentationchartbar-bar.presentationchartbar-bar3-animate {
        animation: presentationchartbar-bar-draw 0.4s ease-out 0.3s forwards;
      }

      @keyframes presentationchartbar-bar-draw {
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
export class PresentationChartBarIcon {
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
