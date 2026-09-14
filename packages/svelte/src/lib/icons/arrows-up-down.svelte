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
  aria-label="arrows-up-down"
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
    <g class="up-arrow-group" class:animate={shouldAnimate}>
      <path d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5" />
    </g>
    <g class="down-arrow-group" class:animate={shouldAnimate}>
      <path d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
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

  .up-arrow-group,
  .down-arrow-group {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
  }

  .up-arrow-group.animate {
    animation: up-arrow-translate 0.5s ease-in-out forwards;
  }

  .down-arrow-group.animate {
    animation: down-arrow-translate 0.5s ease-in-out forwards;
  }

  @keyframes up-arrow-translate {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes down-arrow-translate {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
