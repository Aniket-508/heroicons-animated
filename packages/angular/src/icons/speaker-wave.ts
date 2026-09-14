import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-speaker-wave",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'speaker-wave'",
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
      d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
    />
    <path
      d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424"
      class="speakerwave-wave speakerwave-wave1"
      [class.speakerwave-wave-animate]="shouldAnimate()"
    />
    <path
      d="M19.114 5.636a9 9 0 0 1 0 12.728"
      class="speakerwave-wave speakerwave-wave2"
      [class.speakerwave-wave-animate]="shouldAnimate()"
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

      /* Match React: two wave paths opacity/scale 1→0→1, duration 0.4s, second path delay 0.2s */
      .speakerwave-wave {
        transform-box: fill-box;
        transform-origin: center;
      }

      .speakerwave-wave1.speakerwave-wave-animate {
        animation: speakerwave-wave-pulse 0.4s ease-in-out forwards;
      }

      .speakerwave-wave2.speakerwave-wave-animate {
        animation: speakerwave-wave-pulse 0.4s ease-in-out 0.2s forwards;
      }

      @keyframes speakerwave-wave-pulse {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0;
          transform: scale(0);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
  ],
})
export class SpeakerWaveIcon {
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
