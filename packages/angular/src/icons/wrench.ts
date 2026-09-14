import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-wrench",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'wrench'",
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
    [class.wrench-animate]="shouldAnimate()"
  >
    <path
      d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M4.867 19.125h.008v.008h-.008v-.008Z" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .icon-svg {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.25s ease-out;
      }

      .icon-svg.wrench-animate {
        animation: wrench-rotate 1.05s forwards;
      }

      @keyframes wrench-rotate {
        0% {
          transform: rotate(0deg);
          animation-timing-function: ease-in-out;
        }
        42% {
          transform: rotate(12deg);
          animation-timing-function: ease-in-out;
        }
        68% {
          transform: rotate(-14deg);
          animation-timing-function: ease-out;
        }
        88% {
          transform: rotate(4deg);
          animation-timing-function: ease-out;
        }
        100% {
          transform: rotate(0deg);
        }
      }
    `,
  ],
})
export class WrenchIcon {
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
