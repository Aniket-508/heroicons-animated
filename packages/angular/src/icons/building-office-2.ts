import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-building-office-2",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'building-office-2'",
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
    [class.buildingoffice2-animate]="shouldAnimate()"
  >
    <path
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
    />
    <path
      d="M6.75 12.75h.75"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.1s"
    />
    <path
      d="M6.75 9.75h.75"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.25s"
    />
    <path
      d="M6.75 6.75h.75"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.4s"
    />
    <path
      d="M10.5 12.75h.75"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.1s"
    />
    <path
      d="M10.5 9.75h.75"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.25s"
    />
    <path
      d="M10.5 6.75h.75"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.4s"
    />
    <path
      d="M17.25 17h.008v.008h-.008v-.008Z"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.1s"
    />
    <path
      d="M17.25 14h.008v.008h-.008v-.008Z"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.25s"
    />
    <path
      d="M17.25 11h.008v.008h-.008v-.008Z"
      class="buildingoffice2-window"
      [class.buildingoffice2-window-animate]="shouldAnimate()"
      style="animation-delay: 0.4s"
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
      .buildingoffice2-window {
        opacity: 1;
      }
      .buildingoffice2-window.buildingoffice2-window-animate {
        animation: buildingoffice2-window-fade 0.3s linear forwards;
      }
      @keyframes buildingoffice2-window-fade {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `,
  ],
})
export class BuildingOffice2Icon {
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
