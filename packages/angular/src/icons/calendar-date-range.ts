import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-calendar-date-range",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'calendar-date-range'",
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
      d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5"
    />
    <path
      d="M12 12.75h.005v.006H12v-.006Z"
      class="calendar-range-dot-first"
      [class.calendar-range-dot-first-animate]="shouldAnimate()"
    />
    <path
      d="M14.25 12.75h2.25"
      pathLength="1"
      class="calendar-range-line"
      [class.calendar-range-line-animate]="shouldAnimate()"
      style="animation-delay: 0.4s"
    />
    <path
      d="M7.5 15h4.5"
      pathLength="1"
      class="calendar-range-line"
      [class.calendar-range-line-animate]="shouldAnimate()"
      style="animation-delay: 0.55s"
    />
    <path
      d="M14.25 15h.005v.005h-.005v-.005Z"
      class="calendar-range-dot"
      [class.calendar-range-dot-animate]="shouldAnimate()"
      style="animation-delay: 0.7s"
    />
    <path
      d="M16.5 15h.006v.005H16.5v-.005Z"
      class="calendar-range-dot"
      [class.calendar-range-dot-animate]="shouldAnimate()"
      style="animation-delay: 0.8s"
    />
    <path
      d="M7.5 17.25h.005v.005h-.006v-.005Z"
      class="calendar-range-dot"
      [class.calendar-range-dot-animate]="shouldAnimate()"
      style="animation-delay: 0.9s"
    />
    <path
      d="M9.75 17.25h.005v.006H9.75v-.006Z"
      class="calendar-range-dot"
      [class.calendar-range-dot-animate]="shouldAnimate()"
      style="animation-delay: 1s"
    />
    <path
      d="M12 17.25h.006v.006h-.006v-.005Z"
      class="calendar-range-dot"
      [class.calendar-range-dot-animate]="shouldAnimate()"
      style="animation-delay: 1.1s"
    />
    <path
      d="M14.25 17.25h.006v.006h-.006v-.006Z"
      class="calendar-range-dot"
      [class.calendar-range-dot-animate]="shouldAnimate()"
      style="animation-delay: 1.2s"
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
      .calendar-range-dot-first,
      .calendar-range-dot {
        opacity: 1;
      }
      .calendar-range-line {
        opacity: 1;
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
      }
      .calendar-range-dot-first.calendar-range-dot-first-animate {
        animation: calendar-range-dot-pulse 0.4s ease-in-out forwards;
      }
      .calendar-range-line.calendar-range-line-animate {
        animation: calendar-range-line-draw 0.3s ease-out forwards;
      }
      .calendar-range-dot.calendar-range-dot-animate {
        animation: calendar-range-dot-pulse 0.4s ease-in-out forwards;
      }
      @keyframes calendar-range-line-draw {
        0% {
          stroke-dashoffset: 1;
          opacity: 0;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
      @keyframes calendar-range-dot-pulse {
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
export class CalendarDateRangeIcon {
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
