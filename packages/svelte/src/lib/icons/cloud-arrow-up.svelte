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
  aria-label="cloud-arrow-up"
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
      d="M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
    />
    <path
      class="arrow-path"
      class:arrow-animate={shouldAnimate}
      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3"
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

  /* arrow path translateY [0,-2,0] times [0,0.4,1] 0.5s (matches React ARROW_VARIANTS) */
  .arrow-path.arrow-animate {
    animation: arrow-up-animate 0.5s ease-out forwards;
  }

  @keyframes arrow-up-animate {
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
