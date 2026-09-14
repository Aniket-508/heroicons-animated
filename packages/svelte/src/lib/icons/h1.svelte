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
  aria-label="h1"
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
    <path d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
    <path
      d="M17.244 10.868l2.25-1.5v10.126h-2.25m2.25 0h2.25"
      class="h1-char"
      class:h1-char-animate={shouldAnimate}
      style="transform-origin: 50% 12px"
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

  .h1-char {
    transform-box: fill-box;
    transform-origin: 50% 12px;
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .h1-char.h1-char-animate {
    animation: h1-char-pulse 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  @keyframes h1-char-pulse {
    to {
      transform: scale(1.05);
    }
  }
</style>
