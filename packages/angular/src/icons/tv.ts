import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-tv",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'tv'",
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
      d="M3.375 17.25H20.625C21.2463 17.25 21.75 16.7463 21.75 16.125V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V16.125C2.25 16.7463 2.75368 17.25 3.375 17.25Z"
      class="tv-screen"
      [class.tv-screen-pulse]="shouldAnimate()"
    />
    <path
      d="M6 20.25H18M10.5 17.25V20.25M13.5 17.25V20.25M3.375 17.25H20.625C21.2463 17.25 21.75 16.7463 21.75 16.125V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V16.125C2.25 16.7463 2.75368 17.25 3.375 17.25Z"
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

      .tv-screen {
        fill: currentColor;
        fill-opacity: 0;
      }

      .tv-screen.tv-screen-pulse {
        animation: tv-screen-pulse 0.6s ease-in-out forwards;
      }

      @keyframes tv-screen-pulse {
        0% {
          fill-opacity: 0;
        }
        25% {
          fill-opacity: 1;
        }
        50% {
          fill-opacity: 0;
        }
        75% {
          fill-opacity: 1;
        }
        100% {
          fill-opacity: 0;
        }
      }
    `,
  ],
})
export class TvIcon {
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
