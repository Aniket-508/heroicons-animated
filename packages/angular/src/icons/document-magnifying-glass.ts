import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-document-magnifying-glass",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'document-magnifying-glass'",
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
      d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
    />
    <path
      d="M13.4812 15.7312L15 17.25M14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z"
      class="docmagnify-glass"
      [class.docmagnify-move]="shouldAnimate()"
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

      .docmagnify-glass {
        transform-origin: 50% 50%;
      }

      .docmagnify-glass.docmagnify-move {
        animation: docmagnify-move 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes docmagnify-move {
        0%,
        100% {
          transform: translate(0, 0);
        }
        33% {
          transform: translate(0, -3px);
        }
        66% {
          transform: translate(-2px, 0);
        }
      }
    `,
  ],
})
export class DocumentMagnifyingGlassIcon {
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
