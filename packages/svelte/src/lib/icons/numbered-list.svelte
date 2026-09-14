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
  aria-label="numbered-list"
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
    <g>
      <path
        d="M4.1157 7.49548V3.74512H2.99072M4.1157 7.49548H2.99072M4.1157 7.49548H5.24068"
        pathLength="1"
        class="numberedlist-number"
        class:numberedlist-number1-animate={shouldAnimate}
      />
      <path
        d="M8.24185 5.99179H20.2416"
        pathLength="1"
        class="numberedlist-line"
        class:numberedlist-line1-animate={shouldAnimate}
      />
    </g>
    <g>
      <path
        d="M3.32128 10.0715C3.76061 9.63214 4.4729 9.63214 4.91223 10.0715C5.35157 10.5109 5.35157 11.2233 4.91223 11.6627L3.08285 13.4923L5.24182 13.4925"
        pathLength="1"
        class="numberedlist-number"
        class:numberedlist-number2-animate={shouldAnimate}
      />
      <path
        d="M8.24118 11.9945H20.2409"
        pathLength="1"
        class="numberedlist-line"
        class:numberedlist-line2-animate={shouldAnimate}
      />
    </g>
    <g>
      <path
        d="M2.99072 15.7446H4.1156C4.73696 15.7446 5.24068 16.2484 5.24068 16.8697C5.24068 17.4911 4.73696 17.9949 4.1156 17.9949H3.74071M3.74071 17.9928H4.1156C4.73696 17.9928 5.24068 18.4966 5.24068 19.1179C5.24068 19.7393 4.73696 20.243 4.1156 20.243H2.99072"
        pathLength="1"
        class="numberedlist-number"
        class:numberedlist-number3-animate={shouldAnimate}
      />
      <path
        d="M8.24185 17.9936H20.2416"
        pathLength="1"
        class="numberedlist-line"
        class:numberedlist-line3-animate={shouldAnimate}
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

  .numberedlist-number,
  .numberedlist-line {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .numberedlist-number.numberedlist-number1-animate {
    animation: numberedlist-draw 0.2s ease-in-out 0s forwards;
  }

  .numberedlist-line.numberedlist-line1-animate {
    animation: numberedlist-draw 0.3s ease-in-out 0.2s forwards;
  }

  .numberedlist-number.numberedlist-number2-animate {
    animation: numberedlist-draw 0.2s ease-in-out 0.5s forwards;
  }

  .numberedlist-line.numberedlist-line2-animate {
    animation: numberedlist-draw 0.3s ease-in-out 0.7s forwards;
  }

  .numberedlist-number.numberedlist-number3-animate {
    animation: numberedlist-draw 0.2s ease-in-out 1s forwards;
  }

  .numberedlist-line.numberedlist-line3-animate {
    animation: numberedlist-draw 0.3s ease-in-out 1.2s forwards;
  }

  @keyframes numberedlist-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
