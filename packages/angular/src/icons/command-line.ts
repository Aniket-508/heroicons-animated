import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-command-line",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'command-line'",
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
      d="M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z"
    />
    <path d="M6.75 7.5L9.75 9.75L6.75 12" />
    <path
      d="M11.25 12H14.25"
      class="commandline-line"
      [class.commandline-blink]="shouldAnimate()"
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

      .commandline-line {
        opacity: 1;
      }

      .commandline-line.commandline-blink {
        animation: commandline-blink 0.8s linear infinite;
      }

      @keyframes commandline-blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    `,
  ],
})
export class CommandLineIcon {
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
