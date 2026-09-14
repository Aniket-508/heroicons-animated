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
  selector: "hi-building-library",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'building-library'",
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
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
    />
    <path #dotPath d="M12 6.75h.008v.008H12V6.75Z" />
    <path #pillarPath1 d="M8.25 12.75v8.25" />
    <path #pillarPath2 d="M12 12.75v8.25" />
    <path #pillarPath3 d="M15.75 12.75v8.25" />
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
export class BuildingLibraryIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  private readonly dotRef = viewChild<ElementRef<SVGPathElement>>("dotPath");
  private readonly pillar1Ref =
    viewChild<ElementRef<SVGPathElement>>("pillarPath1");
  private readonly pillar2Ref =
    viewChild<ElementRef<SVGPathElement>>("pillarPath2");
  private readonly pillar3Ref =
    viewChild<ElementRef<SVGPathElement>>("pillarPath3");
  private readonly destroyRef = inject(DestroyRef);

  private dotAnimation: Animation | null = null;
  private readonly pillarAnimations: (Animation | null)[] = [null, null, null];

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

  private startAnimation() {
    const dotEl = this.dotRef()?.nativeElement;
    if (dotEl) {
      dotEl.style.opacity = "0";
      this.dotAnimation = dotEl.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 100,
        delay: 100,
        fill: "forwards" as FillMode,
      });
    }

    const pillarRefs = [
      this.pillar1Ref(),
      this.pillar2Ref(),
      this.pillar3Ref(),
    ];
    pillarRefs.forEach((ref, index) => {
      const el = ref?.nativeElement;
      if (el) {
        const pathLength = el.getTotalLength();
        el.style.strokeDasharray = `${pathLength}`;
        el.style.strokeDashoffset = `${pathLength}`;
        el.style.opacity = "0";
        this.pillarAnimations[index] = el.animate(
          [
            { strokeDashoffset: pathLength, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
          ],
          {
            duration: 300,
            delay: 200 + index * 150,
            easing: "linear",
            fill: "forwards" as FillMode,
          }
        );
      }
    });
  }

  private stopAnimation() {
    if (this.dotAnimation) {
      this.dotAnimation.cancel();
      this.dotAnimation = null;
    }
    const dotEl = this.dotRef()?.nativeElement;
    if (dotEl) {
      dotEl.style.opacity = "";
    }

    const pillarRefs = [
      this.pillar1Ref(),
      this.pillar2Ref(),
      this.pillar3Ref(),
    ];
    this.pillarAnimations.forEach((anim, index) => {
      if (anim) {
        anim.cancel();
        this.pillarAnimations[index] = null;
      }
      const el = pillarRefs[index]?.nativeElement;
      if (el) {
        el.style.strokeDasharray = "";
        el.style.strokeDashoffset = "";
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
