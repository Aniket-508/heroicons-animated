import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-signal-slash",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'signal-slash'",
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
    [class.signalslash-shake]="shouldAnimate()"
  >
    <path
      d="m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 0 1-1.06-2.122m-1.061 4.243a6.75 6.75 0 0 1-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12Z"
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

      .icon-svg.signalslash-shake {
        animation: signalslash-shake 0.6s ease-in-out forwards;
      }

      @keyframes signalslash-shake {
        0% {
          transform: translateX(0);
        }
        20% {
          transform: translateX(-7%);
        }
        40% {
          transform: translateX(7%);
        }
        60% {
          transform: translateX(-7%);
        }
        80% {
          transform: translateX(7%);
        }
        100% {
          transform: translateX(0);
        }
      }
    `,
  ],
})
export class SignalSlashIcon {
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
