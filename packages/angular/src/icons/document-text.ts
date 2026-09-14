import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-document-text",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'document-text'",
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
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
    <path
      d="M8.25 12.75h7.5"
      pathLength="1"
      class="documenttext-line documenttext-line0"
      [class.documenttext-blink]="shouldAnimate()"
    />
    <path
      d="M8.25 15.75H12"
      pathLength="1"
      class="documenttext-line documenttext-line1"
      [class.documenttext-blink]="shouldAnimate()"
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

      .documenttext-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      /* Hide then show: 0–50% hidden, 50–100% draw; delay i*0.1, duration 0.3s per phase */
      .documenttext-line0.documenttext-blink {
        animation: documenttext-blink 0.6s ease-out 0s both;
      }
      .documenttext-line1.documenttext-blink {
        animation: documenttext-blink 0.6s ease-out 0.1s both;
      }
      .documenttext-line:not(.documenttext-blink) {
        stroke-dashoffset: 0;
        opacity: 1;
      }

      @keyframes documenttext-blink {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        50% {
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
export class DocumentTextIcon {
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
