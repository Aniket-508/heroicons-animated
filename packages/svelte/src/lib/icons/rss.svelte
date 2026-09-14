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
  aria-label="rss"
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
    <path d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    <path
      class="rss-wave rss-wave-1"
      class:rss-wave-pulse={shouldAnimate}
      d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5"
    />
    <path
      class="rss-wave rss-wave-2"
      class:rss-wave-pulse={shouldAnimate}
      d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75"
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

  .rss-wave {
    transform-origin: center;
    opacity: 1;
    transform: scale(1);
  }

  .rss-wave.rss-wave-pulse {
    animation: rss-wave-pulse 0.4s ease-in-out forwards;
  }

  .rss-wave-1.rss-wave-pulse {
    animation-delay: 0s;
  }
  .rss-wave-2.rss-wave-pulse {
    animation-delay: 0.2s;
  }

  @keyframes rss-wave-pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(0);
    }
  }
</style>
