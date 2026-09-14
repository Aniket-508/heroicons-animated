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
  aria-label="arrow-uturn-left"
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
    <path d="M3 9h12a6 6 0 0 1 0 12h-3" />
    <g class="arrow-group" class:arrowuturnleft-animate={shouldAnimate}>
      <path d="M9 15 3 9m0 0 6-6" />
    </g>
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

  .arrow-group {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.45s ease-in-out;
  }

  .arrow-group.arrowuturnleft-animate {
    animation: arrowuturnleft-animate 0.45s ease-in-out forwards;
  }

  @keyframes arrowuturnleft-animate {
    0% {
      transform: scaleX(1) translateX(0);
    }
    50% {
      transform: scaleX(1.15) translateX(-1.5px);
    }
    100% {
      transform: scaleX(1) translateX(0);
    }
  }
</style>
