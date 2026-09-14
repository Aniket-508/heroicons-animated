import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  signal,
} from "@angular/core";

type HorizontalStateKey =
  | "row1RightX1"
  | "row1LeftX2"
  | "row1KnobCX"
  | "row2RightX1"
  | "row2LeftX2"
  | "row2KnobCX"
  | "row3RightX1"
  | "row3LeftX2"
  | "row3KnobCX";

type HorizontalState = Record<HorizontalStateKey, number>;

@Component({
  selector: "hi-adjustments-horizontal",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'adjustments-horizontal'",
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
    <line [attr.x1]="row1RightX1()" x2="20.25" y1="6" y2="6" />
    <line x1="3.75" [attr.x2]="row1LeftX2()" y1="6" y2="6" />
    <circle [attr.cx]="row1KnobCX()" cy="6" fill="none" r="1.5" />

    <line [attr.x1]="row2RightX1()" x2="20.25" y1="12" y2="12" />
    <line x1="3.75" [attr.x2]="row2LeftX2()" y1="12" y2="12" />
    <circle [attr.cx]="row2KnobCX()" cy="12" fill="none" r="1.5" />

    <line [attr.x1]="row3RightX1()" x2="20.25" y1="18" y2="18" />
    <line x1="3.75" [attr.x2]="row3LeftX2()" y1="18" y2="18" />
    <circle [attr.cx]="row3KnobCX()" cy="18" fill="none" r="1.5" />
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
export class AdjustmentsHorizontalIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  protected row1RightX1 = signal(10.5);
  protected row1LeftX2 = signal(7.5);
  protected row1KnobCX = signal(9);
  protected row2RightX1 = signal(16.5);
  protected row2LeftX2 = signal(13.5);
  protected row2KnobCX = signal(15);
  protected row3RightX1 = signal(10.5);
  protected row3LeftX2 = signal(7.5);
  protected row3KnobCX = signal(9);

  private readonly DURATION_MS = 450;
  private readonly NORMAL_STATE: HorizontalState = {
    row1RightX1: 10.5,
    row1LeftX2: 7.5,
    row1KnobCX: 9,
    row2RightX1: 16.5,
    row2LeftX2: 13.5,
    row2KnobCX: 15,
    row3RightX1: 10.5,
    row3LeftX2: 7.5,
    row3KnobCX: 9,
  };
  private readonly ANIMATE_STATE: HorizontalState = {
    row1RightX1: 13.5,
    row1LeftX2: 10.5,
    row1KnobCX: 12,
    row2RightX1: 13.5,
    row2LeftX2: 10.5,
    row2KnobCX: 12,
    row3RightX1: 13.5,
    row3LeftX2: 10.5,
    row3KnobCX: 12,
  };

  private rafId = 0;
  private animationToken = 0;
  private readonly destroyRef = inject(DestroyRef);

  private readonly signalMap: Record<
    HorizontalStateKey,
    ReturnType<typeof signal<number>>
  > = {} as Record<HorizontalStateKey, ReturnType<typeof signal<number>>>;

  constructor() {
    this.signalMap.row1RightX1 = this.row1RightX1;
    this.signalMap.row1LeftX2 = this.row1LeftX2;
    this.signalMap.row1KnobCX = this.row1KnobCX;
    this.signalMap.row2RightX1 = this.row2RightX1;
    this.signalMap.row2LeftX2 = this.row2LeftX2;
    this.signalMap.row2KnobCX = this.row2KnobCX;
    this.signalMap.row3RightX1 = this.row3RightX1;
    this.signalMap.row3LeftX2 = this.row3LeftX2;
    this.signalMap.row3KnobCX = this.row3KnobCX;

    effect(() => {
      this.runStateAnimation(this.shouldAnimate());
    });
    this.destroyRef.onDestroy(() => {
      this.animationToken++;
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = 0;
      }
    });
  }

  private easeOutBack(progress: number): number {
    const c1 = 1.701_58;
    const c3 = c1 + 1;
    const p = progress - 1;
    return 1 + c3 * p * p * p + c1 * p * p;
  }

  private lerp(from: number, to: number, progress: number): number {
    return from + (to - from) * progress;
  }

  private runStateAnimation(active: boolean) {
    const target = active ? this.ANIMATE_STATE : this.NORMAL_STATE;
    const stateKeys = Object.keys(this.NORMAL_STATE) as HorizontalStateKey[];
    const startValues = {} as HorizontalState;
    for (const key of stateKeys) {
      startValues[key] = this.signalMap[key]();
    }

    const currentToken = ++this.animationToken;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }

    const start = performance.now();
    const tick = (now: number) => {
      if (currentToken !== this.animationToken) {
        return;
      }
      const rawProgress = Math.min((now - start) / this.DURATION_MS, 1);
      const easedProgress = this.easeOutBack(rawProgress);

      for (const key of stateKeys) {
        this.signalMap[key].set(
          this.lerp(startValues[key], target[key], easedProgress)
        );
      }

      if (rawProgress < 1) {
        this.rafId = requestAnimationFrame(tick);
      } else {
        this.rafId = 0;
      }
    };

    this.rafId = requestAnimationFrame(tick);
  }

  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
