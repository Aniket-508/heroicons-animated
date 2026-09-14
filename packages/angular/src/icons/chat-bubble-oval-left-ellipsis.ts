import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-chat-bubble-oval-left-ellipsis",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'chat-bubble-oval-left-ellipsis'",
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
      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      class="chatbubbleoval-dot chatbubbleoval-dot0"
      [class.chatbubbleoval-dot-animate]="shouldAnimate()"
    />
    <path
      d="M12.75 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      class="chatbubbleoval-dot chatbubbleoval-dot1"
      [class.chatbubbleoval-dot-animate]="shouldAnimate()"
    />
    <path
      d="M16.875 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      class="chatbubbleoval-dot chatbubbleoval-dot2"
      [class.chatbubbleoval-dot-animate]="shouldAnimate()"
    />
    <path
      d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
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
      .chatbubbleoval-dot0.chatbubbleoval-dot-animate {
        animation: chatbubbleoval-dot0 1.5s ease-out forwards;
      }
      .chatbubbleoval-dot1.chatbubbleoval-dot-animate {
        animation: chatbubbleoval-dot1 1.5s ease-out forwards;
      }
      .chatbubbleoval-dot2.chatbubbleoval-dot-animate {
        animation: chatbubbleoval-dot2 1.5s ease-out forwards;
      }

      @keyframes chatbubbleoval-dot0 {
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
      @keyframes chatbubbleoval-dot1 {
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
      @keyframes chatbubbleoval-dot2 {
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
export class ChatBubbleOvalLeftEllipsisIcon {
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
