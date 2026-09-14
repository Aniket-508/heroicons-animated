import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-magnifying-glass",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'magnifying-glass'",
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
    [class.magnifyingglass-bounce]="shouldAnimate()"
  >
    <path
      d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
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

      .icon-svg.magnifyingglass-bounce {
        animation: magnifyingglass-bounce 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes magnifyingglass-bounce {
        0%,
        100% {
          transform: translate(0, 0);
        }
        33% {
          transform: translate(0, -4px);
        }
        66% {
          transform: translate(-3px, 0);
        }
      }
    `,
  ],
})
export class MagnifyingGlassIcon {
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
