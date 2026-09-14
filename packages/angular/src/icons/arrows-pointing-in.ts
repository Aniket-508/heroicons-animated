import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrows-pointing-in",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrows-pointing-in'",
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
    <g class="top-left-group" [class.animate]="shouldAnimate()">
      <path d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75" />
    </g>
    <g class="bottom-left-group" [class.animate]="shouldAnimate()">
      <path d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25" />
    </g>
    <g class="top-right-group" [class.animate]="shouldAnimate()">
      <path d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25" />
    </g>
    <g class="bottom-right-group" [class.animate]="shouldAnimate()">
      <path d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
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

      .top-left-group,
      .bottom-left-group,
      .top-right-group,
      .bottom-right-group {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
      }

      .top-left-group.animate {
        animation: top-left-move 0.5s ease-in-out forwards;
      }

      .bottom-left-group.animate {
        animation: bottom-left-move 0.5s ease-in-out forwards;
      }

      .top-right-group.animate {
        animation: top-right-move 0.5s ease-in-out forwards;
      }

      .bottom-right-group.animate {
        animation: bottom-right-move 0.5s ease-in-out forwards;
      }

      @keyframes top-left-move {
        0% {
          transform: translate(0, 0);
        }
        40% {
          transform: translate(2px, 2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      @keyframes bottom-left-move {
        0% {
          transform: translate(0, 0);
        }
        40% {
          transform: translate(2px, -2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      @keyframes top-right-move {
        0% {
          transform: translate(0, 0);
        }
        40% {
          transform: translate(-2px, 2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }

      @keyframes bottom-right-move {
        0% {
          transform: translate(0, 0);
        }
        40% {
          transform: translate(-2px, -2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    `,
  ],
})
export class ArrowsPointingInIcon {
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
