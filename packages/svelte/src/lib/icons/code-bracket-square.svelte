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
  aria-label="code-bracket-square"
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
      d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
    <path
      d="M9.75 9.75L7.5 12l2.25 2.25"
      class="left-bracket"
      class:left-bracket-animate={shouldAnimate}
    />
    <path
      d="M14.25 9.75 16.5 12l-2.25 2.25"
      class="right-bracket"
      class:right-bracket-animate={shouldAnimate}
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

  .left-bracket,
  .right-bracket {
    transform-box: fill-box;
    transform-origin: center;
  }

  .left-bracket.left-bracket-animate {
    animation: codebracketsquare-left 0.5s ease-in-out;
  }

  .right-bracket.right-bracket-animate {
    animation: codebracketsquare-right 0.5s ease-in-out;
  }

  @keyframes codebracketsquare-left {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    50% {
      transform: translateX(-1.5px) rotate(6deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

  @keyframes codebracketsquare-right {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    50% {
      transform: translateX(1.5px) rotate(-6deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }
</style>
