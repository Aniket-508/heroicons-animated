import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-eye",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'eye'",
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
    [class.eye-animate]="shouldAnimate()"
  >
    <path
      d="M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42372 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.36119 19.5 3.42564 16.4931 2.03555 12.3224Z"
      class="eye-iris"
      [class.eye-squeeze]="shouldAnimate()"
    />
    <path
      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      class="eye-pupil"
      [class.eye-squeeze]="shouldAnimate()"
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

      .eye-iris {
        transform-origin: 50% 50%;
      }
      .eye-pupil {
        transform-origin: 50% 50%;
      }

      .eye-iris.eye-squeeze {
        animation: eye-iris-squeeze 0.4s ease-in-out forwards;
      }
      .eye-pupil.eye-squeeze {
        animation: eye-pupil-squeeze 0.4s ease-in-out forwards;
      }

      @keyframes eye-iris-squeeze {
        0%,
        100% {
          transform: scaleY(1);
          opacity: 1;
        }
        50% {
          transform: scaleY(0.1);
          opacity: 0.3;
        }
      }

      @keyframes eye-pupil-squeeze {
        0%,
        100% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(0.3);
          opacity: 0.3;
        }
      }
    `,
  ],
})
export class EyeIcon {
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
