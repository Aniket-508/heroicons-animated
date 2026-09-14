import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-finger-print",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'finger-print'",
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
      d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
      fill="none"
      stroke-opacity="{0.4}"
    />
    <path
      d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
      pathLength="1"
      class="fingerprint-path"
      [class.fingerprint-path-animate]="shouldAnimate()"
    />
    <path
      d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
      fill="none"
      stroke-opacity="{0.4}"
    />
    <path
      d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
      pathLength="1"
      class="fingerprint-path"
      [class.fingerprint-path-animate]="shouldAnimate()"
    />
    <path
      d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
      fill="none"
      stroke-opacity="{0.4}"
    />
    <path
      d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
      pathLength="1"
      class="fingerprint-path"
      [class.fingerprint-path-animate]="shouldAnimate()"
    />
    <path
      d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
      fill="none"
      stroke-opacity="{0.4}"
    />
    <path
      d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
      pathLength="1"
      class="fingerprint-path"
      [class.fingerprint-path-animate]="shouldAnimate()"
    />
    <path
      d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
      fill="none"
      stroke-opacity="{0.4}"
    />
    <path
      d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
      pathLength="1"
      class="fingerprint-path"
      [class.fingerprint-path-animate]="shouldAnimate()"
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

      /* Match React: pathLength [0.1,0.3,0.5,0.7,0.9,1] 2s; opacity [0,0,1,1,1] 0.5s */
      .fingerprint-path {
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
        opacity: 1;
      }
      .fingerprint-path.fingerprint-path-animate {
        animation: fingerprint-draw 2s ease-out forwards;
      }

      @keyframes fingerprint-draw {
        0% {
          stroke-dashoffset: 0.9;
          opacity: 0;
        }
        20% {
          stroke-dashoffset: 0.7;
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        40% {
          stroke-dashoffset: 0.5;
        }
        60% {
          stroke-dashoffset: 0.3;
        }
        80% {
          stroke-dashoffset: 0.1;
        }
        100% {
          stroke-dashoffset: 0;
          opacity: 1;
        }
      }
    `,
  ],
})
export class FingerPrintIcon {
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
