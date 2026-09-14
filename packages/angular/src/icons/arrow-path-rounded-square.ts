import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrow-path-rounded-square",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-path-rounded-square'",
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
      d="M19.5 12C19.5 10.7681 19.4536 9.54699 19.3624 8.3384C19.2128 6.35425 17.6458 4.78724 15.6616 4.63757C14.453 4.54641 13.2319 4.5 12 4.5C10.7681 4.5 9.54699 4.54641 8.3384 4.63757C6.35425 4.78724 4.78724 6.35425 4.63757 8.3384C4.62097 8.55852 4.60585 8.77906 4.59222 9M19.5 12L22.5 9M19.5 12L16.5 9M4.5 12C4.5 13.2319 4.54641 14.453 4.63757 15.6616C4.78724 17.6458 6.35425 19.2128 8.3384 19.3624C9.54699 19.4536 10.7681 19.5 12 19.5C13.2319 19.5 14.453 19.4536 15.6616 19.3624C17.6458 19.2128 19.2128 17.6458 19.3624 15.6616C19.379 15.4415 19.3941 15.2209 19.4078 15M4.5 12L7.5 15M4.5 12L1.5 15"
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
        transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .icon-svg.animate {
        animation: rotate-spring 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes rotate-spring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(180deg);
        }
      }
    `,
  ],
})
export class ArrowPathRoundedSquareIcon {
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
