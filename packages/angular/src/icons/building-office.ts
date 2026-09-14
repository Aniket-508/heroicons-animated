import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  type ElementRef,
  effect,
  inject,
  input,
  signal,
  viewChild,
} from "@angular/core";

@Component({
  selector: "hi-building-office",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'building-office'",
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
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
    />
    <path #floorPath1 d="M9 12.75h1.5" />
    <path #floorPath2 d="M13.5 12.75H15" />
    <path #floorPath3 d="M9 9.75h1.5" />
    <path #floorPath4 d="M13.5 9.75H15" />
    <path #floorPath5 d="M9 6.75h1.5" />
    <path #floorPath6 d="M13.5 6.75H15" />
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
    `,
  ],
})
export class BuildingOfficeIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly floor1Ref =
    viewChild<ElementRef<SVGPathElement>>("floorPath1");
  private readonly floor2Ref =
    viewChild<ElementRef<SVGPathElement>>("floorPath2");
  private readonly floor3Ref =
    viewChild<ElementRef<SVGPathElement>>("floorPath3");
  private readonly floor4Ref =
    viewChild<ElementRef<SVGPathElement>>("floorPath4");
  private readonly floor5Ref =
    viewChild<ElementRef<SVGPathElement>>("floorPath5");
  private readonly floor6Ref =
    viewChild<ElementRef<SVGPathElement>>("floorPath6");
  private readonly destroyRef = inject(DestroyRef);

  private readonly FLOOR_INDICES = [0, 0, 1, 1, 2, 2]; // stagger groups
  private readonly floorAnimations: (Animation | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  constructor() {
    effect(() => {
      if (this.shouldAnimate()) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    });
    this.destroyRef.onDestroy(() => this.stopAnimation());
  }

  private getFloorRefs() {
    return [
      this.floor1Ref(),
      this.floor2Ref(),
      this.floor3Ref(),
      this.floor4Ref(),
      this.floor5Ref(),
      this.floor6Ref(),
    ];
  }

  private startAnimation() {
    const refs = this.getFloorRefs();
    refs.forEach((ref, i) => {
      const el = ref?.nativeElement;
      if (el) {
        el.style.opacity = "0";
        this.floorAnimations[i] = el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          delay: 100 + this.FLOOR_INDICES[i] * 150,
          easing: "linear",
          fill: "forwards" as FillMode,
        });
      }
    });
  }

  private stopAnimation() {
    const refs = this.getFloorRefs();
    this.floorAnimations.forEach((anim, index) => {
      if (anim) {
        anim.cancel();
        this.floorAnimations[index] = null;
      }
      const el = refs[index]?.nativeElement;
      if (el) {
        el.style.opacity = "";
      }
    });
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
