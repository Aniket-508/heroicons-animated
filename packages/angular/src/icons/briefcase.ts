import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";

@Component({
  selector: "hi-briefcase",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'briefcase'",
    role: "img",
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()",
  },
  template: `<svg
    #svgElement
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
    [class.animate]="shouldAnimate()"
  >
    <path
      #handlePath1
      class="handle-path"
      [class.animate]="shouldAnimate()"
      d="M20.25 14.1499V18.4C20.25 19.4944 19.4631 20.4359 18.3782 20.58C16.2915 20.857 14.1624 21 12 21C9.83757 21 7.70854 20.857 5.62185 20.58C4.5369 20.4359 3.75 19.4944 3.75 18.4V14.1499M20.25 14.1499C20.7219 13.7476 21 13.1389 21 12.4889V8.70569C21 7.62475 20.2321 6.69082 19.1631 6.53086C18.0377 6.36247 16.8995 6.23315 15.75 6.14432M20.25 14.1499C20.0564 14.315 19.8302 14.4453 19.5771 14.5294C17.1953 15.3212 14.6477 15.75 12 15.75C9.35229 15.75 6.80469 15.3212 4.42289 14.5294C4.16984 14.4452 3.94361 14.3149 3.75 14.1499M3.75 14.1499C3.27808 13.7476 3 13.1389 3 12.4889V8.70569C3 7.62475 3.7679 6.69082 4.83694 6.53086C5.96233 6.36247 7.10049 6.23315 8.25 6.14432M12 12.75H12.0075V12.7575H12V12.75Z"
    />
    <path
      #handlePath2
      class="handle-path"
      [class.animate]="shouldAnimate()"
      d="M15.75 6.14432V5.25C15.75 4.00736 14.7426 3 13.5 3H10.5C9.25736 3 8.25 4.00736 8.25 5.25V6.14432M15.75 6.14432C14.5126 6.0487 13.262 6 12 6C10.738 6 9.48744 6.0487 8.25 6.14432"
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
        transition: transform 0.4s ease-in-out;
      }

      .icon-svg.animate {
        animation: briefcase-lift 0.4s ease-in-out forwards;
      }

      .handle-path {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 0.4s ease-in-out;
      }

      .handle-path.animate {
        animation: handle-lift 0.4s ease-in-out forwards;
      }

      @keyframes briefcase-lift {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-3px);
        }
        100% {
          transform: translateY(0);
        }
      }

      @keyframes handle-lift {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-1px);
        }
        100% {
          transform: translateY(0);
        }
      }
    `,
  ],
})
export class BriefcaseIcon {
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
