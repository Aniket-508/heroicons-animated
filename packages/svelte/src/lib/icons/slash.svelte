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
  aria-label="slash"
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
      d="m9 20.247 6-16.5"
      pathLength="1"
      class="slash-path"
      class:slash-draw={shouldAnimate}
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

  .slash-path {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .slash-path.slash-draw {
    animation: slash-draw 0.6s linear forwards;
  }

  @keyframes slash-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    16.666% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
