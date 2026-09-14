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
  aria-label="chart-pie"
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
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path
      class="chart-pie-wedge"
      class:chart-pie-wedge-animate={shouldAnimate}
      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
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

  /* Second path: translateX 1.1, translateY -1.1, spring (≈ cubic-bezier) matches React PATH_VARIANTS */
  .chart-pie-wedge {
    transform-box: fill-box;
    transform-origin: center;
  }

  .chart-pie-wedge.chart-pie-wedge-animate {
    animation: chart-pie-wedge-move 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)
      forwards;
  }

  @keyframes chart-pie-wedge-move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(1.1px, -1.1px);
    }
  }
</style>
