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
  aria-label="at-symbol"
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
    <circle
      cx="12"
      cy="12"
      r="4.5"
      pathLength="1"
      class="atsymbol-circle"
      class:atsymbol-circle-animate={shouldAnimate}
    />
    <path
      d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      pathLength="1"
      class="atsymbol-path"
      class:atsymbol-path-animate={shouldAnimate}
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

  .atsymbol-circle,
  .atsymbol-path {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .atsymbol-circle.atsymbol-circle-animate {
    animation: atsymbol-circle-draw 0.3s ease-out forwards;
  }

  .atsymbol-path.atsymbol-path-animate {
    animation: atsymbol-path-draw 0.3s ease-out 0.3s both;
  }

  @keyframes atsymbol-circle-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes atsymbol-path-draw {
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
