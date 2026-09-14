import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-bars-arrow-up",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bars-arrow-up'",
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
    <path d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25" />
    <path
      #arrowPath
      class="arrow-path"
      [class.animate]="shouldAnimate()"
      d="M13.5 12.75L17.25 9L21 12.75M17.25 9v12"
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

      .arrow-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
      }

      .arrow-path.animate {
        animation: arrow-translate 0.5s ease-in-out forwards;
      }

      @keyframes arrow-translate {
        0% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-2px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class BarsArrowUpIcon {
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
