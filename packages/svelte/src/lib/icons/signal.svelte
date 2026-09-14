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
  aria-label="signal"
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
      d="M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
    <path
      class="signal-wave signal-wave-1"
      class:signal-wave-pulse={shouldAnimate}
      d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304"
    />
    <path
      class="signal-wave signal-wave-2"
      class:signal-wave-pulse={shouldAnimate}
      d="M7.227 16.773a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546"
    />
    <path
      class="signal-wave signal-wave-3"
      class:signal-wave-pulse={shouldAnimate}
      d="M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788"
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

  .signal-wave {
    transform-origin: 12px 12px;
    opacity: 1;
    transform: scale(1);
  }

  .signal-wave.signal-wave-pulse {
    animation: signal-wave-pulse 0.4s ease-in-out forwards;
  }

  .signal-wave-1.signal-wave-pulse {
    animation-delay: 0s;
  }
  .signal-wave-2.signal-wave-pulse {
    animation-delay: 0.2s;
  }
  .signal-wave-3.signal-wave-pulse {
    animation-delay: 0.4s;
  }

  @keyframes signal-wave-pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
