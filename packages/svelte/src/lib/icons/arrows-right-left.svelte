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
  aria-label="arrows-right-left"
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
    <g class="left-arrow-group" class:animate={shouldAnimate}>
      <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5" />
    </g>
    <g class="right-arrow-group" class:animate={shouldAnimate}>
      <path d="M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5" />
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

  .left-arrow-group,
  .right-arrow-group {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
  }

  .left-arrow-group.animate {
    animation: left-arrow-translate 0.5s ease-in-out forwards;
  }

  .right-arrow-group.animate {
    animation: right-arrow-translate 0.5s ease-in-out forwards;
  }

  @keyframes left-arrow-translate {
    0% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes right-arrow-translate {
    0% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
