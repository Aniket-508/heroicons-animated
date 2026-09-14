import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-chevron-double-up",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'chevron-double-up'",
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
      d="m4.5 18.75 7.5-7.5 7.5 7.5"
    />
    <path
      class="chevron-path"
      [class.chevron-animate]="shouldAnimate()"
      d="m4.5 12.75 7.5-7.5 7.5 7.5"
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

      .chevron-path.chevron-animate {
        animation: chevron-double-up-animate 0.5s ease-out forwards;
      }

      @keyframes chevron-double-up-animate {
        0% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-2px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ChevronDoubleUpIcon {
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
