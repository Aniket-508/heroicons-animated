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

  let svgElement: SVGSVGElement;

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
  aria-label="backspace"
  role="img"
>
  <svg
    bind:this={svgElement}
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
    class:animate={shouldAnimate}
  >
    <path
      d="M12 9.75L14.25 12M14.25 12L16.5 14.25M14.25 12L16.5 9.75M14.25 12L12 14.25M9.42051 19.1705L3.04551 12.7955C2.60617 12.3562 2.60617 11.6438 3.04551 11.2045L9.42051 4.82951C9.63149 4.61853 9.91764 4.5 10.216 4.5L19.5 4.5C20.7427 4.5 21.75 5.50736 21.75 6.75V17.25C21.75 18.4926 20.7427 19.5 19.5 19.5H10.216C9.91764 19.5 9.63149 19.3815 9.42051 19.1705Z"
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
    transition: transform 0.3s ease-out;
  }

  .icon-svg.animate {
    animation: svg-translate-x 0.3s ease-out forwards;
  }

  @keyframes svg-translate-x {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
