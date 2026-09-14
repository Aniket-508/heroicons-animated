import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-chevron-down",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'chevron-down'",
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
      class="chevron-path"
      [class.chevron-animate]="shouldAnimate()"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
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

      /* translateY [0, 2, 0], times [0, 0.4, 1], 0.5s (matches React VARIANTS) */
      .chevron-path.chevron-animate {
        animation: chevron-down-animate 0.5s ease-out forwards;
      }

      @keyframes chevron-down-animate {
        0% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(2px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ChevronDownIcon {
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
