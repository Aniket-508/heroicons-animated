import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-archive-box-x-mark",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'archive-box-x-mark'",
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
      class="archiveboxxmark-path"
      [class.archiveboxxmark-path-animate]="shouldAnimate()"
      d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
    />
    <path
      class="archiveboxxmark-path"
      [class.archiveboxxmark-path-animate]="shouldAnimate()"
      d="M20.25 7.5L19.6246 18.1321"
    />
    <path
      class="archiveboxxmark-path"
      [class.archiveboxxmark-path-animate]="shouldAnimate()"
      d="M3.75 7.5L4.37542 18.1321"
    />
    <path
      d="M9.75 11.625L14.25 16.125"
      pathLength="1"
      class="archiveboxxmark-xline archiveboxxmark-xline1"
      [class.archiveboxxmark-xdraw]="shouldAnimate()"
    />
    <path
      d="M14.25 11.625L9.75 16.125"
      pathLength="1"
      class="archiveboxxmark-xline archiveboxxmark-xline2"
      [class.archiveboxxmark-xdraw]="shouldAnimate()"
    />
    <path
      class="archiveboxxmark-lid"
      [class.archiveboxxmark-lid-animate]="shouldAnimate()"
      d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
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

      .archiveboxxmark-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .archiveboxxmark-path.archiveboxxmark-path-animate {
        transform: translateY(1px);
      }

      .archiveboxxmark-lid {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .archiveboxxmark-lid.archiveboxxmark-lid-animate {
        transform: translateY(-1.5px);
      }

      .archiveboxxmark-xline {
        opacity: 1;
        stroke-dasharray: 1;
        stroke-dashoffset: 0;
      }

      .archiveboxxmark-xline.archiveboxxmark-xdraw {
        animation: archiveboxxmark-draw 0.4s ease-out forwards;
      }

      .archiveboxxmark-xline1.archiveboxxmark-xdraw {
        animation-delay: 0.2s;
        animation-fill-mode: both;
      }

      .archiveboxxmark-xline2.archiveboxxmark-xdraw {
        animation-delay: 0.4s;
        animation-fill-mode: both;
      }

      @keyframes archiveboxxmark-draw {
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
export class ArchiveBoxXMarkIcon {
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
