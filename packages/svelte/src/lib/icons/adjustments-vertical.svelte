<script lang="ts">
  import type { IconProps } from "./types.js";
  let {
    color = "currentColor",
    size = 28,
    strokeWidth = 1.5,
    animate = false,
    class: className = "",
    ...restProps
  }: IconProps = $props();

  let isHovered = $state(false);
  let shouldAnimate = $derived(animate || isHovered);

  const DURATION_MS = 450;

  const NORMAL_STATE = {
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

  const ANIMATE_STATE = {
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

  let col1TopY2 = $state(NORMAL_STATE.col1TopY2);
  let col1BottomY1 = $state(NORMAL_STATE.col1BottomY1);
  let col1KnobCY = $state(NORMAL_STATE.col1KnobCY);
  let col2TopY2 = $state(NORMAL_STATE.col2TopY2);
  let col2BottomY1 = $state(NORMAL_STATE.col2BottomY1);
  let col2KnobCY = $state(NORMAL_STATE.col2KnobCY);
  let col3TopY2 = $state(NORMAL_STATE.col3TopY2);
  let col3BottomY1 = $state(NORMAL_STATE.col3BottomY1);
  let col3KnobCY = $state(NORMAL_STATE.col3KnobCY);

  let rafId = 0;
  let animationToken = 0;

  const easeOutBack = (progress: number): number => {
    const c1 = 1.701_58;
    const c3 = c1 + 1;
    const p = progress - 1;
    return 1 + c3 * p * p * p + c1 * p * p;
  };

  const lerp = (from: number, to: number, progress: number): number =>
    from + (to - from) * progress;

  const runStateAnimation = (active: boolean): void => {
    const target = active ? ANIMATE_STATE : NORMAL_STATE;
    const startValues = {
      col1TopY2,
      col1BottomY1,
      col1KnobCY,
      col2TopY2,
      col2BottomY1,
      col2KnobCY,
      col3TopY2,
      col3BottomY1,
      col3KnobCY,
    };

    const currentToken = ++animationToken;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }

    const start = performance.now();

    const tick = (now: number): void => {
      if (currentToken !== animationToken) {
        return;
      }

      const rawProgress = Math.min((now - start) / DURATION_MS, 1);
      const easedProgress = easeOutBack(rawProgress);

      col1TopY2 = lerp(startValues.col1TopY2, target.col1TopY2, easedProgress);
      col1BottomY1 = lerp(
        startValues.col1BottomY1,
        target.col1BottomY1,
        easedProgress
      );
      col1KnobCY = lerp(
        startValues.col1KnobCY,
        target.col1KnobCY,
        easedProgress
      );
      col2TopY2 = lerp(startValues.col2TopY2, target.col2TopY2, easedProgress);
      col2BottomY1 = lerp(
        startValues.col2BottomY1,
        target.col2BottomY1,
        easedProgress
      );
      col2KnobCY = lerp(
        startValues.col2KnobCY,
        target.col2KnobCY,
        easedProgress
      );
      col3TopY2 = lerp(startValues.col3TopY2, target.col3TopY2, easedProgress);
      col3BottomY1 = lerp(
        startValues.col3BottomY1,
        target.col3BottomY1,
        easedProgress
      );
      col3KnobCY = lerp(
        startValues.col3KnobCY,
        target.col3KnobCY,
        easedProgress
      );

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    rafId = requestAnimationFrame(tick);
  };

  $effect(() => {
    runStateAnimation(shouldAnimate);
    return () => {
      animationToken += 1;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };
  });

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
  }
</script>

<div
  {...restProps}
  class={className}
  onmouseenter={handleMouseEnter}
  onmouseleave={handleMouseLeave}
  aria-label="adjustments-vertical"
  role="img"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-svg"
  >
    <line x1="6" x2="6" y1="3.75" y2={col1TopY2} />
    <line x1="6" x2="6" y1={col1BottomY1} y2="20.25" />
    <circle cx="6" cy={col1KnobCY} fill="none" r="1.5" />

    <line x1="12" x2="12" y1="3.75" y2={col2TopY2} />
    <line x1="12" x2="12" y1={col2BottomY1} y2="20.25" />
    <circle cx="12" cy={col2KnobCY} fill="none" r="1.5" />

    <line x1="18" x2="18" y1="3.75" y2={col3TopY2} />
    <line x1="18" x2="18" y1={col3BottomY1} y2="20.25" />
    <circle cx="18" cy={col3KnobCY} fill="none" r="1.5" />
  </svg>
</div>

<style>
  div {
    display: inline-block;
  }

  .icon-svg {
    transform-box: fill-box;
    transform-origin: center;
  }
</style>
