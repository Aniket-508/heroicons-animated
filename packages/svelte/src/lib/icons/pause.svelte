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
  aria-label="pause"
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
      d="M15.75 5.25v13.5"
      class="pause-left"
      class:pause-left-animate={shouldAnimate}
    />
    <path
      d="M8.25 5.25v13.5"
      class="pause-right"
      class:pause-right-animate={shouldAnimate}
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

  .pause-left,
  .pause-right {
    transform-box: fill-box;
    transform-origin: center;
  }

  .pause-left.pause-left-animate {
    animation: pause-left-bounce 0.5s ease-in-out forwards;
  }

  .pause-right.pause-right-animate {
    animation: pause-right-bounce 0.5s ease-in-out forwards;
  }

  @keyframes pause-left-bounce {
    0%,
    20% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes pause-right-bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(2px);
    }
    50%,
    100% {
      transform: translateY(0);
    }
  }
</style>
