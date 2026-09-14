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
  aria-label="view-columns"
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
      d="M4.125 19.5h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
    />
    <path
      class="viewcolumns-line viewcolumns-line-0"
      class:viewcolumns-draw={shouldAnimate}
      pathLength="1"
      d="M9 4.5v15"
    />
    <path
      class="viewcolumns-line viewcolumns-line-1"
      class:viewcolumns-draw={shouldAnimate}
      pathLength="1"
      d="M15 4.5v15"
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

  .viewcolumns-line {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .viewcolumns-line.viewcolumns-draw {
    animation: viewcolumns-draw 0.3s linear forwards;
  }

  .viewcolumns-line-0.viewcolumns-draw {
    animation-delay: 0.2s;
  }

  .viewcolumns-line-1.viewcolumns-draw {
    animation-delay: 0.35s;
  }

  @keyframes viewcolumns-draw {
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
