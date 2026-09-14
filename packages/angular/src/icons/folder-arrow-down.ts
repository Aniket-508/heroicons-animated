import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-folder-arrow-down",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'folder-arrow-down'",
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
      d="M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z"
    />
    <g class="folderarrowdown-arrow" [class.folderarrowdown-bounce]="shouldAnimate()">
      <path d="M9 13.5L12 16.5M12 16.5L15 13.5M12 16.5L12 10.5" />
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

      .folderarrowdown-arrow.folderarrowdown-bounce {
        animation: folderarrowdown-bounce 0.5s ease-in-out forwards;
      }

      @keyframes folderarrowdown-bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(2px);
        }
      }
    `,
  ],
})
export class FolderArrowDownIcon {
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
