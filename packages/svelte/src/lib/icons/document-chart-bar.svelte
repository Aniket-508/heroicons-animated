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
  aria-label="document-chart-bar"
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
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
    <path
      d="M9 17.25v-.75"
      pathLength="1"
      class="docchartbar-bar"
      class:docchartbar-animate={shouldAnimate}
      style="animation-delay: 0s"
    />
    <path
      d="M12 17.25v-3"
      pathLength="1"
      class="docchartbar-bar"
      class:docchartbar-animate={shouldAnimate}
      style="animation-delay: 0.15s"
    />
    <path
      d="M15 17.25v-5.25"
      pathLength="1"
      class="docchartbar-bar"
      class:docchartbar-animate={shouldAnimate}
      style="animation-delay: 0.3s"
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

  .docchartbar-bar {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .docchartbar-bar.docchartbar-animate {
    animation: docchartbar-draw 0.4s ease-out forwards;
    stroke-dashoffset: 1;
    opacity: 0;
  }

  @keyframes docchartbar-draw {
    to {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
