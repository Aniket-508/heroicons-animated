import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-document-plus",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'document-plus'",
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
      d="M12 11.25v6"
      pathLength="1"
      class="documentplus-vertical"
      [class.documentplus-draw]="shouldAnimate()"
    />
    <path
      d="M9 14.25H15"
      pathLength="1"
      class="documentplus-horizontal"
      [class.documentplus-draw]="shouldAnimate()"
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

      .documentplus-vertical,
      .documentplus-horizontal {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .documentplus-vertical.documentplus-draw {
        animation: documentplus-draw 0.2s ease-in-out 0.3s both;
      }

      .documentplus-horizontal.documentplus-draw {
        animation: documentplus-draw 0.2s ease-in-out 0.6s both;
      }

      @keyframes documentplus-draw {
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
export class DocumentPlusIcon {
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
