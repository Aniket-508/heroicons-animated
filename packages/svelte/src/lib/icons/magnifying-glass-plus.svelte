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
  aria-label="magnifying-glass-plus"
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
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
    <path
      class="magnifyingglassplus-vertical"
      class:magnifyingglassplus-draw={shouldAnimate}
      pathLength="1"
      d="M10.5 7.5v6"
    />
    <path
      class="magnifyingglassplus-horizontal"
      class:magnifyingglassplus-draw={shouldAnimate}
      pathLength="1"
      d="M7.5 10.5h6"
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

  .magnifyingglassplus-vertical,
  .magnifyingglassplus-horizontal {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .magnifyingglassplus-vertical.magnifyingglassplus-draw {
    animation: magnifyingglassplus-draw 0.2s ease-in-out 0.3s both;
  }

  .magnifyingglassplus-horizontal.magnifyingglassplus-draw {
    animation: magnifyingglassplus-draw 0.2s ease-in-out 0.6s both;
  }

  @keyframes magnifyingglassplus-draw {
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
