import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-bell-snooze",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'bell-snooze'",
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
    <g class="bell-group" [class.bell-animate]="shouldAnimate()">
      <path
        d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818"
      />
    </g>
    <path
      d="M10.5 8.25H13.5L10.5 12.75H13.5"
      class="snooze-path"
      [class.snooze-animate]="shouldAnimate()"
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

      .bell-group {
        transform-box: fill-box;
        transform-origin: center;
      }

      .bell-group.bell-animate {
        animation: bell-snooze-rotate 0.8s ease-in-out forwards;
      }

      @keyframes bell-snooze-rotate {
        0% {
          transform: rotate(0deg) scale(1);
        }
        25% {
          transform: rotate(-8deg) scale(0.97);
        }
        50% {
          transform: rotate(-8deg) scale(0.97);
        }
        100% {
          transform: rotate(0deg) scale(1);
        }
      }

      .snooze-path {
        transform-box: fill-box;
        transform-origin: center;
        opacity: 1;
      }

      .snooze-path.snooze-animate {
        animation: bell-snooze-pulse 0.8s ease-in-out forwards;
      }

      @keyframes bell-snooze-pulse {
        0% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        33.333% {
          opacity: 1;
          transform: translateY(-1px) scale(1.1);
        }
        66.667% {
          opacity: 0.6;
          transform: translateY(-2px) scale(1.15);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    `,
  ],
})
export class BellSnoozeIcon {
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
