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
  aria-label="arrow-down-left"
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
      class="head-path"
      class:animate={shouldAnimate}
      d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
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

  .head-path {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
  }

  .head-path.animate {
    animation: head-move 0.5s ease-in-out forwards;
  }

  @keyframes head-move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(3px, -3px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>
