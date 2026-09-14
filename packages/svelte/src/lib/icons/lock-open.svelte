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
  aria-label="lock-open"
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
    class:lockopen-pulse={shouldAnimate}
  >
    <path
      class="lockopen-shackle"
      class:lockopen-shackle-bounce={shouldAnimate}
      d="M13.5 10.5V6.75C13.5 4.26472 15.5147 2.25 18 2.25C20.4853 2.25 22.5 4.26472 22.5 6.75V10.5"
    />
    <path
      d="M3.75 21.75H14.25C15.4926 21.75 16.5 20.7426 16.5 19.5V12.75C16.5 11.5074 15.4926 10.5 14.25 10.5H3.75C2.50736 10.5 1.5 11.5074 1.5 12.75V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75Z"
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
    transition: transform 0.3s ease;
  }

  .icon-svg.lockopen-pulse {
    animation: lockopen-pulse 0.4s ease-in-out forwards;
  }

  .lockopen-shackle.lockopen-shackle-bounce {
    animation: lockopen-shackle-bounce 0.4s ease-out forwards;
  }

  @keyframes lockopen-pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes lockopen-shackle-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1.25px);
    }
  }
</style>
