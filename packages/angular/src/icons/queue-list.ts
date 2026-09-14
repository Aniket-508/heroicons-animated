import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-queue-list",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'queue-list'",
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
      d="M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z"
    />
    <path
      class="queuelist-line queuelist-line-0"
      [class.queuelist-fade]="shouldAnimate()"
      d="M3.75 19.5H20.25"
    />
    <path
      class="queuelist-line queuelist-line-1"
      [class.queuelist-fade]="shouldAnimate()"
      d="M3.75 15.75H20.25"
    />
    <path
      class="queuelist-line queuelist-line-2"
      [class.queuelist-fade]="shouldAnimate()"
      d="M3.75 12H20.25"
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

      .queuelist-line {
        opacity: 1;
      }

      .queuelist-line.queuelist-fade {
        animation: queuelist-fade 0.2s ease-out forwards;
      }

      .queuelist-line-0.queuelist-fade {
        animation-delay: 0.4s;
      }
      .queuelist-line-1.queuelist-fade {
        animation-delay: 0.25s;
      }
      .queuelist-line-2.queuelist-fade {
        animation-delay: 0.1s;
      }

      @keyframes queuelist-fade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class QueueListIcon {
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
