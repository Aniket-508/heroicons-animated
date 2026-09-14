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
  aria-label="chart-bar-square"
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
    <path
      d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={shouldAnimate}
      pathLength="1"
      style="animation-delay: 0s"
      d="M7.5 16.5v-2.25"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={shouldAnimate}
      pathLength="1"
      style="animation-delay: 0.15s"
      d="M10.5 16.5v-4.5"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={shouldAnimate}
      pathLength="1"
      style="animation-delay: 0.3s"
      d="M13.5 16.5v-6.75"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={shouldAnimate}
      pathLength="1"
      style="animation-delay: 0.45s"
      d="M16.5 16.5v-9"
    />
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

  /* pathLength [0,1] pathOffset [1,0], opacity [0,1], 0.4s easeOut, staggered delay (matches React CREATE_BAR_VARIANTS) */
  .chart-bar {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .chart-bar.chart-bar-animate {
    animation: chart-bar-draw 0.4s ease-out forwards;
  }

  @keyframes chart-bar-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
