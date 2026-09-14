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

  let bar1Path: SVGPathElement;
  let bar2Path: SVGPathElement;
  let bar3Path: SVGPathElement;

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
  aria-label="bars-3"
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
      bind:this={bar1Path}
      class="bar-path"
      class:animate={shouldAnimate}
      d="M3.75 6.75h16.5"
    />
    <path
      bind:this={bar2Path}
      class="bar-path"
      class:animate={shouldAnimate}
      d="M3.75 12h16.5"
    />
    <path
      bind:this={bar3Path}
      class="bar-path"
      class:animate={shouldAnimate}
      d="M3.75 17.25h16.5"
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

  .bar-path {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.3s ease-in-out;
  }

  .bar-path.animate {
    animation: bar-scale-x 0.3s ease-in-out forwards;
  }

  .bar-path:nth-child(2).animate {
    animation-delay: 0.1s;
  }

  .bar-path:nth-child(3).animate {
    animation-delay: 0.2s;
  }

  @keyframes bar-scale-x {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.6);
    }
    100% {
      transform: scaleX(1);
    }
  }
</style>
