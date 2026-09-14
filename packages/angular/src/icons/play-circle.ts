import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-play-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'play-circle'",
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
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path
      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
      class="playcircle-triangle"
      [class.playcircle-triangle-animate]="shouldAnimate()"
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

      .playcircle-triangle {
        transform-box: fill-box;
        transform-origin: center;
      }

      .playcircle-triangle.playcircle-triangle-animate {
        animation: playcircle-triangle-bounce 0.5s ease-in-out forwards;
      }

      @keyframes playcircle-triangle-bounce {
        0% {
          transform: translateX(0) rotate(0deg);
        }
        20% {
          transform: translateX(-1px) rotate(-10deg);
        }
        50% {
          transform: translateX(2px) rotate(0deg);
        }
        100% {
          transform: translateX(0) rotate(0deg);
        }
      }
    `,
  ],
})
export class PlayCircleIcon {
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
