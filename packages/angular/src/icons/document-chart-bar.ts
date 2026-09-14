import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-document-chart-bar",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'document-chart-bar'",
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
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
    <path
      d="M9 17.25v-.75"
      pathLength="1"
      class="docchartbar-bar"
      [class.docchartbar-animate]="shouldAnimate()"
      style="animation-delay: 0s"
    />
    <path
      d="M12 17.25v-3"
      pathLength="1"
      class="docchartbar-bar"
      [class.docchartbar-animate]="shouldAnimate()"
      style="animation-delay: 0.15s"
    />
    <path
      d="M15 17.25v-5.25"
      pathLength="1"
      class="docchartbar-bar"
      [class.docchartbar-animate]="shouldAnimate()"
      style="animation-delay: 0.3s"
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

      .docchartbar-bar {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .docchartbar-bar.docchartbar-animate {
        animation: docchartbar-draw 0.4s ease-out forwards;
        stroke-dashoffset: 1;
        opacity: 0;
      }

      @keyframes docchartbar-draw {
        to {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `,
  ],
})
export class DocumentChartBarIcon {
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
