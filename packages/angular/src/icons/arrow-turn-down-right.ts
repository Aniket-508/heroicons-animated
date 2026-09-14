import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrow-turn-down-right",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-turn-down-right'",
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
    [class.arrowturndownright-animate]="shouldAnimate()"
  >
    <path d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
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

      .icon-svg.arrowturndownright-animate {
        animation: arrowturndownright-animate 0.45s ease-in-out;
      }

      @keyframes arrowturndownright-animate {
        0% {
          transform: scaleX(1) translateX(0);
        }
        50% {
          transform: scaleX(1.15) translateX(2px);
        }
        100% {
          transform: scaleX(1) translateX(0);
        }
      }
    `,
  ],
})
export class ArrowTurnDownRightIcon {
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
