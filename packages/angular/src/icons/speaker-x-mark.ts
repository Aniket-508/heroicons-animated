import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-speaker-x-mark",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'speaker-x-mark'",
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
      d="M17.25 9.75L21.75 14.25"
      pathLength="1"
      class="speakerxmark-line"
      [class.speakerxmark-draw]="shouldAnimate()"
    />
    <path
      d="M21.75 9.75L17.25 14.25"
      pathLength="1"
      class="speakerxmark-line speakerxmark-line2"
      [class.speakerxmark-draw]="shouldAnimate()"
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

      .speakerxmark-line {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }

      .speakerxmark-line.speakerxmark-draw {
        animation: speakerxmark-draw 0.4s ease-out forwards;
      }

      .speakerxmark-line2.speakerxmark-draw {
        animation-delay: 0.2s;
        animation-fill-mode: both;
      }

      @keyframes speakerxmark-draw {
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
export class SpeakerXMarkIcon {
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
