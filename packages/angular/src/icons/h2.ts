import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-h2",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'h2'",
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
    <path d="M2.243 4.492v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
    <path
      d="M21.75 19.5H16.5v-1.609a2.25 2.25 0 0 1 1.244-2.012l2.89-1.445c.651-.326 1.116-.955 1.116-1.683 0-.498-.04-.987-.118-1.463-.135-.825-.835-1.422-1.668-1.489a15.202 15.202 0 0 0-3.464.12"
      class="h2-char"
      [class.h2-char-animate]="shouldAnimate()"
      style="transform-origin: 50% 12px"
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

      .h2-char {
        transform-box: fill-box;
        transform-origin: 50% 12px;
        transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .h2-char.h2-char-animate {
        animation: h2-char-pulse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes h2-char-pulse {
        to {
          transform: scale(0.9);
        }
      }
    `,
  ],
})
export class H2Icon {
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
