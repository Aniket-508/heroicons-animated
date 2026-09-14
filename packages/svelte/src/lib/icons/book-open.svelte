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

  let leftPageGroup: SVGGElement;
  let rightPageGroup: SVGGElement;

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
  aria-label="book-open"
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
      bind:this={leftPageGroup}
      class="left-page"
      class:animate={shouldAnimate}
    >
      <path
        d="M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917"
      />
    </g>
    <g
      bind:this={rightPageGroup}
      class="right-page"
      class:animate={shouldAnimate}
    >
      <path
        d="M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917"
      />
    </g>
    <path d="M12 6.04168V20.2917" />
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

  .left-page {
    transform-box: fill-box;
    transform-origin: 100% 50%;
    transition: transform 0.5s ease-in-out;
  }

  .right-page {
    transform-box: fill-box;
    transform-origin: 0% 50%;
    transition: transform 0.5s ease-in-out;
  }

  .left-page.animate {
    animation: left-page-rotate 0.5s ease-in-out forwards;
  }

  .right-page.animate {
    animation: right-page-rotate 0.5s ease-in-out forwards;
  }

  @keyframes left-page-rotate {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(15deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes right-page-rotate {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(-15deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
</style>
