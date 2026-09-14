import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrows-right-left",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrows-right-left'",
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
    <g class="left-arrow-group" [class.animate]="shouldAnimate()">
      <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5" />
    </g>
    <g class="right-arrow-group" [class.animate]="shouldAnimate()">
      <path d="M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5" />
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

      .left-arrow-group,
      .right-arrow-group {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
      }

      .left-arrow-group.animate {
        animation: left-arrow-translate 0.5s ease-in-out forwards;
      }

      .right-arrow-group.animate {
        animation: right-arrow-translate 0.5s ease-in-out forwards;
      }

      @keyframes left-arrow-translate {
        0% {
          transform: translateX(0);
        }
        40% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }

      @keyframes right-arrow-translate {
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
export class ArrowsRightLeftIcon {
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
