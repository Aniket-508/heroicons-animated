import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-link",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'link'",
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
      class="link-path"
      [class.link-squeeze]="shouldAnimate()"
      pathLength="100"
      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
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

      .link-path {
        stroke-dasharray: 100 100;
        stroke-dashoffset: 0;
        transform-origin: center;
      }

      .link-path.link-squeeze {
        animation: link-squeeze 1s ease-in-out forwards;
      }

      @keyframes link-squeeze {
        0% {
          stroke-dasharray: 100 100;
          stroke-dashoffset: 0;
          transform: rotate(0deg);
        }
        20% {
          stroke-dasharray: 97 100;
          stroke-dashoffset: -5;
          transform: rotate(-2.5deg);
        }
        40% {
          stroke-dasharray: 100 100;
          stroke-dashoffset: 0;
          transform: rotate(-5deg);
        }
        50% {
          transform: rotate(0deg);
        }
        60% {
          stroke-dasharray: 97 100;
          stroke-dashoffset: -5;
        }
        100% {
          stroke-dasharray: 100 100;
          stroke-dashoffset: 0;
        }
      }
    `,
  ],
})
export class LinkIcon {
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
