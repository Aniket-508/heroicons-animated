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
  aria-label="x-mark"
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
      class="xmark-line xmark-line-1"
      class:xmark-draw={shouldAnimate}
      pathLength="1"
      d="M6 6l12 12"
    />
    <path
      class="xmark-line xmark-line-2"
      class:xmark-draw={shouldAnimate}
      pathLength="1"
      d="M18 6l-12 12"
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

  .xmark-line {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .xmark-line.xmark-draw {
    animation: xmark-draw 0.4s ease-out forwards;
  }

  .xmark-line-1.xmark-draw {
    animation-delay: 0s;
  }

  .xmark-line-2.xmark-draw {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }

  @keyframes xmark-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
