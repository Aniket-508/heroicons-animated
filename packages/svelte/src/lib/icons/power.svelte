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
  aria-label="power"
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
      d="M5.636 5.636a9 9 0 1 0 12.728 0"
      class="power-circle"
      class:power-circle-animate={shouldAnimate}
    />
    <path
      d="M12 3v9"
      class="power-line"
      class:power-line-animate={shouldAnimate}
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

  .power-circle {
    transform-box: fill-box;
    transform-origin: center center;
  }

  .power-circle.power-circle-animate {
    animation: power-circle-pulse 0.5s ease-in-out forwards;
  }

  @keyframes power-circle-pulse {
    0% {
      opacity: 0.5;
      transform: scale(1);
    }
    33% {
      opacity: 1;
      transform: scale(1.05);
    }
    66% {
      opacity: 0.5;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .power-line {
    transform-box: fill-box;
    transform-origin: center;
  }

  .power-line.power-line-animate {
    animation: power-line-bounce 0.3s ease-in-out forwards;
  }

  @keyframes power-line-bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }
</style>
