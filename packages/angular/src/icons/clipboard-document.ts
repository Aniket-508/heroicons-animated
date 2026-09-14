import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-clipboard-document",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'clipboard-document'",
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
      d="M8.25 7.5V6.10822C8.25 4.97324 9.09499 4.01015 10.2261 3.91627C10.5994 3.88529 10.9739 3.85858 11.3495 3.83619M15.75 18H18C19.2426 18 20.25 16.9926 20.25 15.75V6.10822C20.25 4.97324 19.405 4.01015 18.2739 3.91627C17.9006 3.88529 17.5261 3.85858 17.1505 3.83619M17.1505 3.83619C16.8672 2.91757 16.0116 2.25 15 2.25H13.5C12.4884 2.25 11.6328 2.91757 11.3495 3.83619M17.1505 3.83619C17.2152 4.04602 17.25 4.26894 17.25 4.5V5.25H11.25V4.5C11.25 4.26894 11.2848 4.04602 11.3495 3.83619"
      class="clipboarddocument-clipboard"
      [class.clipboarddocument-clipboard-animate]="shouldAnimate()"
    />
    <g class="clipboarddocument-doc" [class.clipboarddocument-doc-animate]="shouldAnimate()">
      <path
        d="M6.75 7.5H4.875C4.25368 7.5 3.75 8.00368 3.75 8.625V20.625C3.75 21.2463 4.25368 21.75 4.875 21.75H14.625C15.2463 21.75 15.75 21.2463 15.75 20.625V16.5C15.75 11.5294 11.7206 7.5 6.75 7.5Z"
      />
      <path
        d="M15.75 18.75V16.875C15.75 15.011 14.239 13.5 12.375 13.5H10.875C10.2537 13.5 9.75 12.9963 9.75 12.375V10.875C9.75 9.01104 8.23896 7.5 6.375 7.5H5.25"
      />
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

      /* Match React: clipboard path y [0,-1,0] 0.3s easeInOut */
      .clipboarddocument-clipboard.clipboarddocument-clipboard-animate {
        animation: clipboarddocument-clipboard-bounce 0.3s ease-in-out forwards;
      }

      @keyframes clipboarddocument-clipboard-bounce {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-1px);
        }
        100% {
          transform: translateY(0);
        }
      }

      /* Match React: document g x [-4,0] y [4,0] opacity [0,1] 0.3s easeOut (keyframes: current→(-4,4),0→(0,0),1) */
      .clipboarddocument-doc.clipboarddocument-doc-animate {
        animation: clipboarddocument-doc-in 0.3s ease-out forwards;
      }

      @keyframes clipboarddocument-doc-in {
        0% {
          transform: translate(0, 0);
          opacity: 1;
        }
        50% {
          transform: translate(-4px, 4px);
          opacity: 0;
        }
        100% {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    `,
  ],
})
export class ClipboardDocumentIcon {
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
