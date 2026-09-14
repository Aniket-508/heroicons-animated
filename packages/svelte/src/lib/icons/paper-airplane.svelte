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
  aria-label="paper-airplane"
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
    <g
      class="paperairplane-plane"
      class:paperairplane-plane-animate={shouldAnimate}
    >
      <path
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
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

  .paperairplane-plane {
    transform-box: fill-box;
    transform-origin: center;
  }

  .paperairplane-plane.paperairplane-plane-animate {
    animation: paperairplane-fly 1.2s ease-in-out forwards;
  }

  @keyframes paperairplane-fly {
    0% {
      transform: scale(1) translateX(0);
    }
    25% {
      transform: scale(0.8) translateX(-10%);
    }
    50% {
      transform: scale(1) translateX(125%);
    }
    50.01% {
      transform: scale(1) translateX(-150%);
    }
    100% {
      transform: scale(1) translateX(0);
    }
  }
</style>
