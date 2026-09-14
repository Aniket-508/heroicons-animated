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
  aria-label="arrow-turn-down-left"
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
    class:arrowturndownleft-animate={shouldAnimate}
  >
    <path d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
  </svg>
</div>

<style>
  div {
    display: inline-block;
  }

  .icon-svg {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .icon-svg.arrowturndownleft-animate {
    animation: arrowturndownleft-animate 0.45s ease-in-out;
  }

  @keyframes arrowturndownleft-animate {
    0% {
      transform: scaleX(1) translateX(0);
    }
    50% {
      transform: scaleX(1.15) translateX(-2px);
    }
    100% {
      transform: scaleX(1) translateX(0);
    }
  }
</style>
