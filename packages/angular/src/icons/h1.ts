import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-h1",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'h1'",
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
    <path d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
    <path
      d="M17.244 10.868l2.25-1.5v10.126h-2.25m2.25 0h2.25"
      class="h1-char"
      [class.h1-char-animate]="shouldAnimate()"
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

      .h1-char {
        transform-box: fill-box;
        transform-origin: 50% 12px;
        transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .h1-char.h1-char-animate {
        animation: h1-char-pulse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }

      @keyframes h1-char-pulse {
        to {
          transform: scale(1.05);
        }
      }
    `,
  ],
})
export class H1Icon {
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
