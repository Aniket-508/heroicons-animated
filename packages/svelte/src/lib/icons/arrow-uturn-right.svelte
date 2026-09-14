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
  aria-label="arrow-uturn-right"
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
    <path d="M21 9H9a6 6 0 0 0 0 12h3" />
    <g class="arrow-group" class:arrowuturnright-animate={shouldAnimate}>
      <path d="m15 15 6-6m0 0-6-6m6 6" />
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

  .arrow-group.arrowuturnright-animate {
    animation: arrowuturnright-animate 0.45s ease-in-out forwards;
  }

  @keyframes arrowuturnright-animate {
    0% {
      transform: scaleX(1) translateX(0);
    }
    50% {
      transform: scaleX(1.15) translateX(1.5px);
    }
    100% {
      transform: scaleX(1) translateX(0);
    }
  }
</style>
