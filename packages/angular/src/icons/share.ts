import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-share",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'share'",
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
      class="share-line"
      [class.share-line-draw]="shouldAnimate()"
      pathLength="1"
      d="M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071"
    />
    <circle
      class="share-node share-node-0"
      [class.share-node-pop]="shouldAnimate()"
      cx="5.25"
      cy="12"
      r="2.25"
    />
    <circle
      class="share-node share-node-1"
      [class.share-node-pop]="shouldAnimate()"
      cx="18.75"
      cy="4.5"
      r="2.25"
    />
    <circle
      class="share-node share-node-2"
      [class.share-node-pop]="shouldAnimate()"
      cx="18.75"
      cy="19.5"
      r="2.25"
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

      .share-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .share-line.share-line-draw {
        animation: share-line-draw 0.4s ease-out forwards;
      }

      @keyframes share-line-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }

      .share-node {
        transform-origin: center;
        transform-box: fill-box;
      }

      .share-node.share-node-pop {
        animation: share-node-pop 0.3s ease-out forwards;
      }

      .share-node-0.share-node-pop {
        animation-delay: 0s;
      }
      .share-node-1.share-node-pop {
        animation-delay: 0.15s;
      }
      .share-node-2.share-node-pop {
        animation-delay: 0.3s;
      }

      @keyframes share-node-pop {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
        100% {
          transform: scale(1);
        }
      }
    `,
  ],
})
export class ShareIcon {
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
