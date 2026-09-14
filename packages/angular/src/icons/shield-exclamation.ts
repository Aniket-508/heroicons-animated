import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-shield-exclamation",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'shield-exclamation'",
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
      d="M12 1.964A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Z"
    />
    <g class="shieldexclamation-inner" [class.shieldexclamation-pulse]="shouldAnimate()">
      <path d="M12 9v3.75" />
      <path d="M12 15.75h.008v.008H12v-.008Z" />
    </g>
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

      .shieldexclamation-inner {
        transform-origin: 50% 50%;
      }

      .shieldexclamation-inner.shieldexclamation-pulse {
        animation: shieldexclamation-pulse 0.8s ease-in-out infinite;
      }

      @keyframes shieldexclamation-pulse {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.4;
          transform: scale(1.1);
        }
      }
    `,
  ],
})
export class ShieldExclamationIcon {
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
