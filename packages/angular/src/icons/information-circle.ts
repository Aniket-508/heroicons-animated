import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-information-circle",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'information-circle'",
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
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    />
    <g class="informationcircle-inner" [class.informationcircle-pulse]="shouldAnimate()">
      <path
        d="M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75"
      />
      <path d="M12 8.25H12.0075V8.2575H12V8.25Z" />
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

      .informationcircle-inner {
        transform-box: fill-box;
        transform-origin: 50% 50%;
        opacity: 1;
        transform: scale(1);
      }

      .informationcircle-inner.informationcircle-pulse {
        animation: informationcircle-pulse 0.8s ease-in-out infinite;
      }

      @keyframes informationcircle-pulse {
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
export class InformationCircleIcon {
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
