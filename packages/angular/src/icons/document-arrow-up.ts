import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-document-arrow-up",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'document-arrow-up'",
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
      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
    />
    <path
      d="M15 14.25L12 11.25M12 11.25L9 14.25M12 11.25L12 17.25"
      class="documentarrowup-arrow"
      [class.documentarrowup-bounce]="shouldAnimate()"
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

      .documentarrowup-arrow {
        transform-origin: 50% 50%;
      }

      .documentarrowup-arrow.documentarrowup-bounce {
        animation: documentarrowup-bounce 0.5s ease-out;
      }

      @keyframes documentarrowup-bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-2px);
        }
      }
    `,
  ],
})
export class DocumentArrowUpIcon {
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
