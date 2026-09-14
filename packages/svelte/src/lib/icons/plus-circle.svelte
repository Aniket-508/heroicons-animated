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
  aria-label="plus-circle"
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
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
    <path
      d="M12 9v6"
      pathLength="1"
      class="pluscircle-vertical"
      class:pluscircle-vertical-animate={shouldAnimate}
    />
    <path
      d="M9 12h6"
      pathLength="1"
      class="pluscircle-horizontal"
      class:pluscircle-horizontal-animate={shouldAnimate}
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

  .pluscircle-vertical,
  .pluscircle-horizontal {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .pluscircle-vertical.pluscircle-vertical-animate {
    animation: pluscircle-line-draw 0.2s ease-in-out 0.3s both;
  }

  .pluscircle-horizontal.pluscircle-horizontal-animate {
    animation: pluscircle-line-draw 0.2s ease-in-out 0.6s both;
  }

  @keyframes pluscircle-line-draw {
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
