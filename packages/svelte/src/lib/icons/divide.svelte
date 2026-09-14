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
  aria-label="divide"
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
      d="M4.49902 11.9983H19.4987"
      class="divide-line"
      class:divide-line-animate={shouldAnimate}
    />
    <g class="divide-top" class:divide-top-animate={shouldAnimate}>
      <path d="M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808Z" />
      <path
        d="M12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808Z"
      />
    </g>
    <g class="divide-bottom" class:divide-bottom-animate={shouldAnimate}>
      <path d="M11.9998 18.7509H12.0073V18.7584H11.9998V18.7509Z" />
      <path
        d="M12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z"
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

  .divide-line {
    transform-origin: 50% 50%;
  }

  .divide-line.divide-line-animate {
    animation: divide-line 0.4s ease-in-out;
  }

  .divide-top,
  .divide-bottom {
    transform-origin: 12px 50%;
  }

  .divide-top.divide-top-animate {
    animation: divide-top 0.4s ease-in-out;
  }

  .divide-bottom.divide-bottom-animate {
    animation: divide-bottom 0.4s ease-in-out;
  }

  @keyframes divide-line {
    0%,
    100% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(1.1);
    }
  }

  @keyframes divide-top {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }

  @keyframes divide-bottom {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2px);
    }
  }
</style>
