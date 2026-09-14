import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrow-down-tray",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-down-tray'",
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
    <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5" />
    <g class="arrow-group" [class.animate]="shouldAnimate()">
      <path d="M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
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
          transform: translateY(0);
        }
        40% {
          transform: translateY(2px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class ArrowDownTrayIcon {
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
