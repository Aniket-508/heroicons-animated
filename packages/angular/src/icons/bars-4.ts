import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-bars-4",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bars-4'",
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
    <path #bar1Path class="bar-path" [class.animate]="shouldAnimate()" d="M3.75 5.25h16.5" />
    <path #bar2Path class="bar-path" [class.animate]="shouldAnimate()" d="M3.75 9.75h16.5" />
    <path #bar3Path class="bar-path" [class.animate]="shouldAnimate()" d="M3.75 14.25h16.5" />
    <path #bar4Path class="bar-path" [class.animate]="shouldAnimate()" d="M3.75 18.75h16.5" />
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

      .bar-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
      }

      .bar-path.animate {
        animation: bar-scale-x 0.3s ease-in-out forwards;
      }

      .bar-path:nth-child(2).animate {
        animation-delay: 0.1s;
      }

      .bar-path:nth-child(3).animate {
        animation-delay: 0.2s;
      }

      .bar-path:nth-child(4).animate {
        animation-delay: 0.3s;
      }

      @keyframes bar-scale-x {
        0% {
          transform: scaleX(1);
        }
        50% {
          transform: scaleX(0.6);
        }
        100% {
          transform: scaleX(1);
        }
      }
    `,
  ],
})
export class Bars4Icon {
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
