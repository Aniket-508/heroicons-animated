import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-sun",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'sun'",
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
    <circle cx="12" cy="12" r="3.75" />
    <path class="sun-ray sun-ray-0" [class.sun-ray-fade]="shouldAnimate()" d="M12 3V5.25" />
    <path
      class="sun-ray sun-ray-1"
      [class.sun-ray-fade]="shouldAnimate()"
      d="M18.364 5.63604L16.773 7.22703"
    />
    <path class="sun-ray sun-ray-2" [class.sun-ray-fade]="shouldAnimate()" d="M21 12H18.75" />
    <path
      class="sun-ray sun-ray-3"
      [class.sun-ray-fade]="shouldAnimate()"
      d="M18.364 18.364L16.773 16.773"
    />
    <path class="sun-ray sun-ray-4" [class.sun-ray-fade]="shouldAnimate()" d="M12 18.75V21" />
    <path
      class="sun-ray sun-ray-5"
      [class.sun-ray-fade]="shouldAnimate()"
      d="M7.22703 16.773L5.63604 18.364"
    />
    <path class="sun-ray sun-ray-6" [class.sun-ray-fade]="shouldAnimate()" d="M5.25 12H3" />
    <path
      class="sun-ray sun-ray-7"
      [class.sun-ray-fade]="shouldAnimate()"
      d="M7.22703 7.22703L5.63604 5.63604"
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

      .sun-ray {
        opacity: 1;
      }

      .sun-ray.sun-ray-fade {
        animation: sun-ray-fade 0.3s ease-out forwards;
      }

      .sun-ray-0.sun-ray-fade {
        animation-delay: 0s;
      }
      .sun-ray-1.sun-ray-fade {
        animation-delay: 0.1s;
      }
      .sun-ray-2.sun-ray-fade {
        animation-delay: 0.2s;
      }
      .sun-ray-3.sun-ray-fade {
        animation-delay: 0.3s;
      }
      .sun-ray-4.sun-ray-fade {
        animation-delay: 0.4s;
      }
      .sun-ray-5.sun-ray-fade {
        animation-delay: 0.5s;
      }
      .sun-ray-6.sun-ray-fade {
        animation-delay: 0.6s;
      }
      .sun-ray-7.sun-ray-fade {
        animation-delay: 0.7s;
      }

      @keyframes sun-ray-fade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class SunIcon {
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
