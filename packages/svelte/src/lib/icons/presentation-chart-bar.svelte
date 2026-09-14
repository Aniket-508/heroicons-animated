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
  aria-label="presentation-chart-bar"
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
      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
    />
    <path
      d="M9 12.75v-1.5"
      pathLength="1"
      class="presentationchartbar-bar"
      class:presentationchartbar-bar1-animate={shouldAnimate}
    />
    <path
      d="M12 12.75v-3.75"
      pathLength="1"
      class="presentationchartbar-bar"
      class:presentationchartbar-bar2-animate={shouldAnimate}
    />
    <path
      d="M15 12.75v-6"
      pathLength="1"
      class="presentationchartbar-bar"
      class:presentationchartbar-bar3-animate={shouldAnimate}
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

  .presentationchartbar-bar {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .presentationchartbar-bar.presentationchartbar-bar1-animate {
    animation: presentationchartbar-bar-draw 0.4s ease-out 0s forwards;
  }

  .presentationchartbar-bar.presentationchartbar-bar2-animate {
    animation: presentationchartbar-bar-draw 0.4s ease-out 0.15s forwards;
  }

  .presentationchartbar-bar.presentationchartbar-bar3-animate {
    animation: presentationchartbar-bar-draw 0.4s ease-out 0.3s forwards;
  }

  @keyframes presentationchartbar-bar-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
