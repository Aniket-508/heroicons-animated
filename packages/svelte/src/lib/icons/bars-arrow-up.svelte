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
  aria-label="bars-arrow-up"
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
    <path d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25" />
    <path
      bind:this={arrowPath}
      class="arrow-path"
      class:animate={shouldAnimate}
      d="M13.5 12.75L17.25 9L21 12.75M17.25 9v12"
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
    transform-origin: center;
    transition: transform 0.5s ease-in-out;
  }

  .arrow-path.animate {
    animation: arrow-translate 0.5s ease-in-out forwards;
  }

  @keyframes arrow-translate {
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
</style>
