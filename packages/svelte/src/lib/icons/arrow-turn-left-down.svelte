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
  aria-label="arrow-turn-left-down"
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
    class:arrowturnleftdown-animate={shouldAnimate}
  >
    <path d="m11.99 16.5-3.75 3.75m0 0L4.49 16.5m3.75 3.75V3.75h11.25" />
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

  .icon-svg.arrowturnleftdown-animate {
    animation: arrowturnleftdown-animate 0.45s ease-in-out forwards;
  }

  @keyframes arrowturnleftdown-animate {
    0% {
      transform: scaleY(1) translateY(0);
    }
    50% {
      transform: scaleY(1.15) translateY(2px);
    }
    100% {
      transform: scaleY(1) translateY(0);
    }
  }
</style>
