import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-bolt-slash",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bolt-slash'",
    role: "img",
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()",
  },
  template: `<svg
    #svgElement
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
    [class.animate]="shouldAnimate()"
  >
    <path
      d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21"
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
        transition: transform 0.6s ease-in-out;
      }

      .icon-svg.animate {
        animation: shake-x 0.6s ease-in-out forwards;
      }

      @keyframes shake-x {
        0% {
          transform: translateX(0);
        }
        16.67% {
          transform: translateX(-7%);
        }
        33.33% {
          transform: translateX(7%);
        }
        50% {
          transform: translateX(-7%);
        }
        66.67% {
          transform: translateX(7%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class BoltSlashIcon {
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
