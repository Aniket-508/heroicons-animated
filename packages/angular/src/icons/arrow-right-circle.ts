import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrow-right-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-right-circle'",
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
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <g class="arrow-group" [class.animate]="shouldAnimate()">
      <path d="m12.75 15 3-3m0 0-3-3m3 3h-7.5" />
    </g>
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

      .arrow-group {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
      }

      .arrow-group.animate {
        animation: arrow-translate 0.5s ease-in-out forwards;
      }

      @keyframes arrow-translate {
        0% {
          transform: translateX(0);
        }
        40% {
          transform: translateX(2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class ArrowRightCircleIcon {
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
