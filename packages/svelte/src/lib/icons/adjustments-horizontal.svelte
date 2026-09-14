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

  const ANIMATE_STATE = {
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

  let row1RightX1 = $state(NORMAL_STATE.row1RightX1);
  let row1LeftX2 = $state(NORMAL_STATE.row1LeftX2);
  let row1KnobCX = $state(NORMAL_STATE.row1KnobCX);
  let row2RightX1 = $state(NORMAL_STATE.row2RightX1);
  let row2LeftX2 = $state(NORMAL_STATE.row2LeftX2);
  let row2KnobCX = $state(NORMAL_STATE.row2KnobCX);
  let row3RightX1 = $state(NORMAL_STATE.row3RightX1);
  let row3LeftX2 = $state(NORMAL_STATE.row3LeftX2);
  let row3KnobCX = $state(NORMAL_STATE.row3KnobCX);

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
      row1RightX1,
      row1LeftX2,
      row1KnobCX,
      row2RightX1,
      row2LeftX2,
      row2KnobCX,
      row3RightX1,
      row3LeftX2,
      row3KnobCX,
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

      row1RightX1 = lerp(
        startValues.row1RightX1,
        target.row1RightX1,
        easedProgress
      );
      row1LeftX2 = lerp(
        startValues.row1LeftX2,
        target.row1LeftX2,
        easedProgress
      );
      row1KnobCX = lerp(
        startValues.row1KnobCX,
        target.row1KnobCX,
        easedProgress
      );
      row2RightX1 = lerp(
        startValues.row2RightX1,
        target.row2RightX1,
        easedProgress
      );
      row2LeftX2 = lerp(
        startValues.row2LeftX2,
        target.row2LeftX2,
        easedProgress
      );
      row2KnobCX = lerp(
        startValues.row2KnobCX,
        target.row2KnobCX,
        easedProgress
      );
      row3RightX1 = lerp(
        startValues.row3RightX1,
        target.row3RightX1,
        easedProgress
      );
      row3LeftX2 = lerp(
        startValues.row3LeftX2,
        target.row3LeftX2,
        easedProgress
      );
      row3KnobCX = lerp(
        startValues.row3KnobCX,
        target.row3KnobCX,
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
  aria-label="adjustments-horizontal"
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
    <line x1={row1RightX1} x2="20.25" y1="6" y2="6" />
    <line x1="3.75" x2={row1LeftX2} y1="6" y2="6" />
    <circle cx={row1KnobCX} cy="6" fill="none" r="1.5" />

    <line x1={row2RightX1} x2="20.25" y1="12" y2="12" />
    <line x1="3.75" x2={row2LeftX2} y1="12" y2="12" />
    <circle cx={row2KnobCX} cy="12" fill="none" r="1.5" />

    <line x1={row3RightX1} x2="20.25" y1="18" y2="18" />
    <line x1="3.75" x2={row3LeftX2} y1="18" y2="18" />
    <circle cx={row3KnobCX} cy="18" fill="none" r="1.5" />
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
