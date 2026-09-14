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

  let arrowPath: SVGPathElement;

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
  aria-label="arrow-up-left"
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
      bind:this={arrowPath}
      class="arrow-path"
      class:animate={shouldAnimate}
      d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
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

  .arrow-path {
    transform-box: fill-box;
    transform-origin: 0% 0%;
    transition: transform 0.5s ease-in-out;
  }

  .arrow-path.animate {
    animation: arrow-move 0.5s ease-in-out forwards;
  }

  @keyframes arrow-move {
    0% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(4px, 4px) scale(0.85);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }
</style>
