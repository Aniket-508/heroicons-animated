import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-squares-2x2",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'squares-2x2'",
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
      class="squares2x2-cell squares2x2-0"
      [class.squares2x2-pop]="shouldAnimate()"
      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Z"
    />
    <path
      class="squares2x2-cell squares2x2-1"
      [class.squares2x2-pop]="shouldAnimate()"
      d="M13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z"
    />
    <path
      class="squares2x2-cell squares2x2-2"
      [class.squares2x2-pop]="shouldAnimate()"
      d="M13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    />
    <path
      class="squares2x2-cell squares2x2-3"
      [class.squares2x2-pop]="shouldAnimate()"
      d="M3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z"
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

      .squares2x2-cell {
        transform-box: fill-box;
        transform-origin: center;
        opacity: 1;
        transform: scale(1);
      }

      .squares2x2-cell.squares2x2-pop {
        animation: squares2x2-pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      .squares2x2-0.squares2x2-pop {
        animation-delay: 0s;
      }
      .squares2x2-1.squares2x2-pop {
        animation-delay: 0.08s;
      }
      .squares2x2-2.squares2x2-pop {
        animation-delay: 0.24s;
      }
      .squares2x2-3.squares2x2-pop {
        animation-delay: 0.32s;
      }

      @keyframes squares2x2-pop {
        0% {
          opacity: 0;
          transform: scale(0.6);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class Squares2x2Icon {
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
