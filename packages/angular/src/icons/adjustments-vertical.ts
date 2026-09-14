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

type VerticalStateKey =
  | "col1TopY2"
  | "col1BottomY1"
  | "col1KnobCY"
  | "col2TopY2"
  | "col2BottomY1"
  | "col2KnobCY"
  | "col3TopY2"
  | "col3BottomY1"
  | "col3KnobCY";

type VerticalState = Record<VerticalStateKey, number>;

@Component({
  selector: "hi-adjustments-vertical",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[attr.aria-label]": "'adjustments-vertical'",
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
    <line x1="6" x2="6" y1="3.75" [attr.y2]="col1TopY2()" />
    <line x1="6" x2="6" [attr.y1]="col1BottomY1()" y2="20.25" />
    <circle cx="6" [attr.cy]="col1KnobCY()" fill="none" r="1.5" />

    <line x1="12" x2="12" y1="3.75" [attr.y2]="col2TopY2()" />
    <line x1="12" x2="12" [attr.y1]="col2BottomY1()" y2="20.25" />
    <circle cx="12" [attr.cy]="col2KnobCY()" fill="none" r="1.5" />

    <line x1="18" x2="18" y1="3.75" [attr.y2]="col3TopY2()" />
    <line x1="18" x2="18" [attr.y1]="col3BottomY1()" y2="20.25" />
    <circle cx="18" [attr.cy]="col3KnobCY()" fill="none" r="1.5" />
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
export class AdjustmentsVerticalIcon {
  readonly color = input("currentColor");
  readonly size = input(28);
  readonly strokeWidth = input(1.5);
  readonly animate = input(false);

  protected isHovered = signal(false);
  protected shouldAnimate = computed(() => this.animate() || this.isHovered());

  protected col1TopY2 = signal(13.5);
  protected col1BottomY1 = signal(16.5);
  protected col1KnobCY = signal(15);
  protected col2TopY2 = signal(7.5);
  protected col2BottomY1 = signal(10.5);
  protected col2KnobCY = signal(9);
  protected col3TopY2 = signal(13.5);
  protected col3BottomY1 = signal(16.5);
  protected col3KnobCY = signal(15);

  private readonly DURATION_MS = 450;
  private readonly NORMAL_STATE: VerticalState = {
    col1TopY2: 13.5,
    col1BottomY1: 16.5,
    col1KnobCY: 15,
    col2TopY2: 7.5,
    col2BottomY1: 10.5,
    col2KnobCY: 9,
    col3TopY2: 13.5,
    col3BottomY1: 16.5,
    col3KnobCY: 15,
  };
  private readonly ANIMATE_STATE: VerticalState = {
    col1TopY2: 10.5,
    col1BottomY1: 13.5,
    col1KnobCY: 12,
    col2TopY2: 10.5,
    col2BottomY1: 13.5,
    col2KnobCY: 12,
    col3TopY2: 10.5,
    col3BottomY1: 13.5,
    col3KnobCY: 12,
  };

  private rafId = 0;
  private animationToken = 0;
  private readonly destroyRef = inject(DestroyRef);

  private readonly signalMap: Record<
    VerticalStateKey,
    ReturnType<typeof signal<number>>
  > = {} as Record<VerticalStateKey, ReturnType<typeof signal<number>>>;

  constructor() {
    this.signalMap.col1TopY2 = this.col1TopY2;
    this.signalMap.col1BottomY1 = this.col1BottomY1;
    this.signalMap.col1KnobCY = this.col1KnobCY;
    this.signalMap.col2TopY2 = this.col2TopY2;
    this.signalMap.col2BottomY1 = this.col2BottomY1;
    this.signalMap.col2KnobCY = this.col2KnobCY;
    this.signalMap.col3TopY2 = this.col3TopY2;
    this.signalMap.col3BottomY1 = this.col3BottomY1;
    this.signalMap.col3KnobCY = this.col3KnobCY;

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
    const stateKeys = Object.keys(this.NORMAL_STATE) as VerticalStateKey[];
    const startValues = {} as VerticalState;
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
