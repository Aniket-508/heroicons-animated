import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-chat-bubble-left-ellipsis",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'chat-bubble-left-ellipsis'",
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
      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      class="chatbubble-dot chatbubble-dot0"
      [class.chatbubble-dot-animate]="shouldAnimate()"
    />
    <path
      d="M12.75 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      class="chatbubble-dot chatbubble-dot1"
      [class.chatbubble-dot-animate]="shouldAnimate()"
    />
    <path
      d="M16.875 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      class="chatbubble-dot chatbubble-dot2"
      [class.chatbubble-dot-animate]="shouldAnimate()"
    />
    <path
      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
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

      /* Match React DOT_VARIANTS: opacity [1,0,0,1,1,0,0,1], times per dot, duration 1.5s */
      .chatbubble-dot0.chatbubble-dot-animate {
        animation: chatbubble-dot0 1.5s ease-out forwards;
      }
      .chatbubble-dot1.chatbubble-dot-animate {
        animation: chatbubble-dot1 1.5s ease-out forwards;
      }
      .chatbubble-dot2.chatbubble-dot-animate {
        animation: chatbubble-dot2 1.5s ease-out forwards;
      }

      @keyframes chatbubble-dot0 {
        0% {
          opacity: 1;
        }
        6.67% {
          opacity: 0;
        }
        13.33% {
          opacity: 1;
        }
        33.33% {
          opacity: 1;
        }
        40% {
          opacity: 0;
        }
        46.67% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes chatbubble-dot1 {
        0% {
          opacity: 1;
        }
        6.67% {
          opacity: 0;
        }
        13.33% {
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        33.33% {
          opacity: 1;
        }
        40% {
          opacity: 0;
        }
        46.67% {
          opacity: 0;
        }
        53.33% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes chatbubble-dot2 {
        0% {
          opacity: 1;
        }
        6.67% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        26.67% {
          opacity: 1;
        }
        33.33% {
          opacity: 1;
        }
        40% {
          opacity: 0;
        }
        53.33% {
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class ChatBubbleLeftEllipsisIcon {
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
