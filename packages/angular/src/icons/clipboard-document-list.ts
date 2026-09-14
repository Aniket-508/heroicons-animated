import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-clipboard-document-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'clipboard-document-list'",
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
      d="M15.75 18.75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
    />
    <g class="clipboardlist-item">
      <path
        d="M6.75 12h.008v.008H6.75V12Z"
        class="clipboardlist-dot"
        [class.clipboardlist-dot-animate]="shouldAnimate()"
        style="animation-delay: 0s"
      />
      <path
        d="M9 12h3.75"
        pathLength="1"
        class="clipboardlist-line"
        [class.clipboardlist-line-animate]="shouldAnimate()"
        style="animation-delay: 0.1s"
      />
    </g>
    <g class="clipboardlist-item">
      <path
        d="M6.75 15h.008v.008H6.75V15Z"
        class="clipboardlist-dot"
        [class.clipboardlist-dot-animate]="shouldAnimate()"
        style="animation-delay: 0.4s"
      />
      <path
        d="M9 15h3.75"
        pathLength="1"
        class="clipboardlist-line"
        [class.clipboardlist-line-animate]="shouldAnimate()"
        style="animation-delay: 0.5s"
      />
    </g>
    <g class="clipboardlist-item">
      <path
        d="M6.75 18h.008v.008H6.75V18Z"
        class="clipboardlist-dot"
        [class.clipboardlist-dot-animate]="shouldAnimate()"
        style="animation-delay: 0.8s"
      />
      <path
        d="M9 18h3.75"
        pathLength="1"
        class="clipboardlist-line"
        [class.clipboardlist-line-animate]="shouldAnimate()"
        style="animation-delay: 0.9s"
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

      /* Match React: dot opacity [0,1] 0.1s delay index*0.4; line pathLength/opacity [0,1] 0.3s delay index*0.4+0.1 */
      .clipboardlist-dot.clipboardlist-dot-animate {
        animation: clipboardlist-dot 0.1s ease-in-out forwards;
      }
      .clipboardlist-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }
      .clipboardlist-line.clipboardlist-line-animate {
        animation: clipboardlist-line 0.3s ease-in-out forwards;
      }

      @keyframes clipboardlist-dot {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes clipboardlist-line {
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
export class ClipboardDocumentListIcon {
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
