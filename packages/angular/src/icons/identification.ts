import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-identification",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'identification'",
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
      d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
    />
    <path
      d="M15 9H18.75"
      pathLength="1"
      class="identification-line"
      [class.identification-draw]="shouldAnimate()"
      style="animation-delay: 0.2s"
    />
    <path
      d="M15 12H18.75"
      pathLength="1"
      class="identification-line"
      [class.identification-draw]="shouldAnimate()"
      style="animation-delay: 0.2s"
    />
    <path
      d="M15 15H18.75"
      pathLength="1"
      class="identification-line"
      [class.identification-draw]="shouldAnimate()"
      style="animation-delay: 0.2s"
    />
    <path
      d="M10.5 9.375C10.5 10.4105 9.66053 11.25 8.625 11.25C7.58947 11.25 6.75 10.4105 6.75 9.375C6.75 8.33947 7.58947 7.5 8.625 7.5C9.66053 7.5 10.5 8.33947 10.5 9.375Z"
      pathLength="1"
      class="identification-line"
      [class.identification-draw]="shouldAnimate()"
      style="animation-delay: 0.1s"
    />
    <path
      d="M11.7939 15.7114C10.8489 16.2147 9.77021 16.5 8.62484 16.5C7.47948 16.5 6.40074 16.2147 5.45581 15.7114C5.92986 14.4207 7.16983 13.5 8.62484 13.5C10.0799 13.5 11.3198 14.4207 11.7939 15.7114Z"
      pathLength="1"
      class="identification-line"
      [class.identification-draw]="shouldAnimate()"
      style="animation-delay: 0s"
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

      .identification-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .identification-line.identification-draw {
        animation: identification-draw 0.3s ease-out both;
      }

      @keyframes identification-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `,
  ],
})
export class IdentificationIcon {
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
