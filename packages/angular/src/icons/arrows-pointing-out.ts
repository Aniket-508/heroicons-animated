import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrows-pointing-out",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrows-pointing-out'",
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
      <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9" />
    </g>
    <g class="bottom-left-group" [class.animate]="shouldAnimate()">
      <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15" />
    </g>
    <g class="top-right-group" [class.animate]="shouldAnimate()">
      <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9" />
    </g>
    <g class="bottom-right-group" [class.animate]="shouldAnimate()">
      <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
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
          transform: translate(-2px, -2px);
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
          transform: translate(-2px, 2px);
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
          transform: translate(2px, -2px);
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
          transform: translate(2px, 2px);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    `,
  ],
})
export class ArrowsPointingOutIcon {
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
