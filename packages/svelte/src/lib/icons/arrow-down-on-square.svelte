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
  aria-label="arrow-down-on-square"
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
      d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15"
    />
    <path
      class="arrow-path"
      class:animate={shouldAnimate}
      d="M9 12l3 3m0 0 3-3m-3 3V2.25"
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

  .arrow-path {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
  }

  .arrow-path.animate {
    animation: arrow-translate 0.4s ease-in-out forwards;
  }

  @keyframes arrow-translate {
    0% {
      transform: translateY(0);
    }
    33% {
      transform: translateY(-2px);
    }
    66% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
