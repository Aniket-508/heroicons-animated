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
  aria-label="link"
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
      class="link-path"
      class:link-squeeze={shouldAnimate}
      pathLength="100"
      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
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

  .link-path {
    stroke-dasharray: 100 100;
    stroke-dashoffset: 0;
    transform-origin: center;
  }

  .link-path.link-squeeze {
    animation: link-squeeze 1s ease-in-out forwards;
  }

  @keyframes link-squeeze {
    0% {
      stroke-dasharray: 100 100;
      stroke-dashoffset: 0;
      transform: rotate(0deg);
    }
    20% {
      stroke-dasharray: 97 100;
      stroke-dashoffset: -5;
      transform: rotate(-2.5deg);
    }
    40% {
      stroke-dasharray: 100 100;
      stroke-dashoffset: 0;
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    60% {
      stroke-dasharray: 97 100;
      stroke-dashoffset: -5;
    }
    100% {
      stroke-dasharray: 100 100;
      stroke-dashoffset: 0;
    }
  }
</style>
