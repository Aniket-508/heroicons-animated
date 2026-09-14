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
  aria-label="microphone"
  role="img"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    overflow="visible"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-svg"
  >
    <path
      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5"
    />
    <g
      class="microphone-capsule"
      class:microphone-capsule-animate={shouldAnimate}
    >
      <path d="M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    </g>
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

  .microphone-capsule {
    transform-box: fill-box;
    transform-origin: center;
  }

  .microphone-capsule.microphone-capsule-animate {
    animation: microphone-capsule-animate 0.6s ease-in-out forwards;
  }

  @keyframes microphone-capsule-animate {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(0);
    }
    75% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
