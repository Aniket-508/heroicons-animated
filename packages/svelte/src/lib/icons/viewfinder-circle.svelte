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
  aria-label="viewfinder-circle"
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
      d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5"
      class="viewfindercircle-corner"
      class:viewfindercircle-corner-animate={shouldAnimate}
    />
    <path
      d="M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5"
      class="viewfindercircle-corner"
      class:viewfindercircle-corner-animate={shouldAnimate}
    />
    <path
      d="M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5"
      class="viewfindercircle-corner"
      class:viewfindercircle-corner-animate={shouldAnimate}
    />
    <path
      d="M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5"
      class="viewfindercircle-corner"
      class:viewfindercircle-corner-animate={shouldAnimate}
    />
    <path
      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      class="viewfindercircle-circle"
      class:viewfindercircle-circle-animate={shouldAnimate}
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

  /* Match React: 4 corners scale 1.2 rotate 45 opacity 0 (spring); circle scale 0.8 opacity 0 delay 0.1 */
  .viewfindercircle-corner {
    transform-box: fill-box;
    transform-origin: center;
  }
  .viewfindercircle-corner.viewfindercircle-corner-animate {
    animation: viewfindercircle-corner-flash 0.6s
      cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .viewfindercircle-circle {
    transform-box: fill-box;
    transform-origin: center;
  }
  .viewfindercircle-circle.viewfindercircle-circle-animate {
    animation: viewfindercircle-circle-flash 0.6s ease-out 0.1s forwards;
  }

  @keyframes viewfindercircle-corner-flash {
    0% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: scale(1.2) rotate(45deg);
      opacity: 0;
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }
  @keyframes viewfindercircle-circle-flash {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
