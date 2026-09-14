import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-rectangle-group",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'rectangle-group'",
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
      class="rectanglegroup-rect rectanglegroup-rect-0"
      [class.rectanglegroup-pop]="shouldAnimate()"
      d="M2.25 7.125C2.25 6.50368 2.75368 6 3.375 6H9.375C9.99632 6 10.5 6.50368 10.5 7.125V10.875C10.5 11.4963 9.99632 12 9.375 12H3.375C2.75368 12 2.25 11.4963 2.25 10.875V7.125Z"
    />
    <path
      class="rectanglegroup-rect rectanglegroup-rect-1"
      [class.rectanglegroup-pop]="shouldAnimate()"
      d="M14.25 8.625C14.25 8.00368 14.7537 7.5 15.375 7.5H20.625C21.2463 7.5 21.75 8.00368 21.75 8.625V16.875C21.75 17.4963 21.2463 18 20.625 18H15.375C14.7537 18 14.25 17.4963 14.25 16.875V8.625Z"
    />
    <path
      class="rectanglegroup-rect rectanglegroup-rect-2"
      [class.rectanglegroup-pop]="shouldAnimate()"
      d="M3.75 16.125C3.75 15.5037 4.25368 15 4.875 15H10.125C10.7463 15 11.25 15.5037 11.25 16.125V18.375C11.25 18.9963 10.7463 19.5 10.125 19.5H4.875C4.25368 19.5 3.75 18.9963 3.75 18.375V16.125Z"
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

      .rectanglegroup-rect {
        transform-origin: center;
        opacity: 1;
        transform: scale(1);
      }

      .rectanglegroup-rect.rectanglegroup-pop {
        animation: rectanglegroup-pop 0.3s ease-out forwards;
      }

      .rectanglegroup-rect-0.rectanglegroup-pop {
        animation-delay: 0s;
      }
      .rectanglegroup-rect-1.rectanglegroup-pop {
        animation-delay: 0.1s;
      }
      .rectanglegroup-rect-2.rectanglegroup-pop {
        animation-delay: 0.2s;
      }

      @keyframes rectanglegroup-pop {
        0% {
          opacity: 0.5;
          transform: scale(0.9);
        }
        66% {
          transform: scale(1.05);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class RectangleGroupIcon {
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
