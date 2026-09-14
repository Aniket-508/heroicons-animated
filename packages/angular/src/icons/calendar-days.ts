import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-calendar-days",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'calendar-days'",
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0s"
      d="M12 12.75h.008v.008H12v-.008Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.1s"
      d="M14.25 12.75h.008v.008h-.008v-.008Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.2s"
      d="M16.5 12.75h.008v.008H16.5v-.008Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.3s"
      d="M7.5 15h.008v.008H7.5V15Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.4s"
      d="M9.75 15h.008v.008H9.75V15Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.5s"
      d="M12 15h.008v.008H12V15Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.6s"
      d="M14.25 15h.008v.008h-.008V15Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.7s"
      d="M16.5 15h.008v.008H16.5V15Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.8s"
      d="M7.5 17.25h.008v.008H7.5v-.008Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 0.9s"
      d="M9.75 17.25h.008v.008H9.75v-.008Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 1s"
      d="M12 17.25h.008v.008H12v-.008Z"
    />
    <path
      class="calendar-dot"
      [class.animate]="shouldAnimate()"
      style="animation-delay: 1.1s"
      d="M14.25 17.25h.008v.008h-.008v-.008Z"
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
      .calendar-dot {
        transform-box: fill-box;
        transform-origin: center;
      }
      .calendar-dot.animate {
        animation: dot-pulse 0.4s ease-out forwards;
      }
      @keyframes dot-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.3;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class CalendarDaysIcon {
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
