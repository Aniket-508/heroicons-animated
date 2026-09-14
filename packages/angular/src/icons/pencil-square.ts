import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-pencil-square",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'pencil-square'",
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
      d="M18 14V18.75C18 19.9926 16.9926 21 15.75 21H5.25C4.00736 21 3 19.9926 3 18.75V8.24999C3 7.00735 4.00736 5.99999 5.25 5.99999H10"
    />
    <path
      d="M16.8617 4.48667L18.5492 2.79917C19.2814 2.06694 20.4686 2.06694 21.2008 2.79917C21.9331 3.53141 21.9331 4.71859 21.2008 5.45083L10.5822 16.0695C10.0535 16.5981 9.40144 16.9868 8.68489 17.2002L6 18L6.79978 15.3151C7.01323 14.5986 7.40185 13.9465 7.93052 13.4178L16.8617 4.48667ZM16.8617 4.48667L19.5 7.12499"
      class="pencilsquare-pen"
      [class.pencilsquare-pen-animate]="shouldAnimate()"
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

      .pencilsquare-pen {
        transform-box: fill-box;
        transform-origin: center;
      }

      .pencilsquare-pen.pencilsquare-pen-animate {
        animation: pencilsquare-pen-wiggle 0.6s ease-in-out forwards;
      }

      @keyframes pencilsquare-pen-wiggle {
        0% {
          transform: rotate(0deg) translate(0, 0);
        }
        33% {
          transform: rotate(-0.5deg) translate(-1px, 1px);
        }
        66% {
          transform: rotate(0.5deg) translate(1px, -1px);
        }
        100% {
          transform: rotate(-0.5deg) translate(0, 0);
        }
      }
    `,
  ],
})
export class PencilSquareIcon {
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
