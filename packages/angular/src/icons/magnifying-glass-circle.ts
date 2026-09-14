import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-magnifying-glass-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'magnifying-glass-circle'",
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
    [class.magnifyingglasscircle-animate]="shouldAnimate()"
  >
    <path
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    />
    <path
      d="M15.75 15.75L13.2615 13.2615M13.2615 13.2615C13.8722 12.6507 14.25 11.807 14.25 10.875C14.25 9.01104 12.739 7.5 10.875 7.5C9.01104 7.5 7.5 9.01104 7.5 10.875C7.5 12.739 9.01104 14.25 10.875 14.25C11.807 14.25 12.6507 13.8722 13.2615 13.2615"
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
        transition: transform 0.3s ease;
      }

      .icon-svg.magnifyingglasscircle-animate {
        animation: magnifyingglasscircle-animate 0.6s ease-in-out;
      }

      @keyframes magnifyingglasscircle-animate {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class MagnifyingGlassCircleIcon {
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
