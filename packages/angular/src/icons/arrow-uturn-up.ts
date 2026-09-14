import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-arrow-uturn-up",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'arrow-uturn-up'",
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
    <path d="M15 3v12a6 6 0 0 1-12 0v-3" />
    <g class="arrow-group" [class.arrowuturnup-animate]="shouldAnimate()">
      <path d="m9 9 6-6m0 0 6 6m-6-6" />
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
        transition: transform 0.45s ease-in-out;
      }

      .arrow-group.arrowuturnup-animate {
        animation: arrowuturnup-animate 0.45s ease-in-out forwards;
      }

      @keyframes arrowuturnup-animate {
        0% {
          transform: scaleY(1) translateY(0);
        }
        50% {
          transform: scaleY(1.15) translateY(-1.5px);
        }
        100% {
          transform: scaleY(1) translateY(0);
        }
      }
    `,
  ],
})
export class ArrowUturnUpIcon {
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
