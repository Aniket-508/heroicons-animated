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
  aria-label="chevron-up-down"
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
      class="chevron-path chevron-up"
      class:chevron-animate={shouldAnimate}
      d="M8.25 9 12 5.25 15.75 9"
    />
    <path
      class="chevron-path chevron-down"
      class:chevron-animate={shouldAnimate}
      d="M8.25 15 12 18.75 15.75 15"
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

  .chevron-up.chevron-animate {
    animation: chevron-up-animate 0.5s ease-out forwards;
  }

  .chevron-down.chevron-animate {
    animation: chevron-down-animate 0.5s ease-out forwards;
  }

  @keyframes chevron-up-animate {
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

  @keyframes chevron-down-animate {
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
