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

  let topBarPath: SVGPathElement;
  let centerBarPath: SVGPathElement;
  let bottomBarPath: SVGPathElement;
  let centerBarAnimation: Animation | null = null;

  function startAnimation() {
    // Animate pathLength using Web Animations API
    if (centerBarPath) {
      const pathLength = centerBarPath.getTotalLength();
      centerBarPath.style.strokeDasharray = `${pathLength}`;
      centerBarPath.style.strokeDashoffset = "0";

      centerBarAnimation = centerBarPath.animate(
        [
          { strokeDashoffset: 0 },
          { strokeDashoffset: pathLength * 0.5 },
          { strokeDashoffset: 0 },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          delay: 50,
          fill: "forwards",
        }
      );
    }
  }

  function stopAnimation() {
    if (centerBarAnimation) {
      centerBarAnimation.cancel();
      centerBarAnimation = null;
    }

    if (centerBarPath) {
      centerBarPath.style.strokeDasharray = "";
      centerBarPath.style.strokeDashoffset = "";
    }
  }
  $effect(() => {
    if (shouldAnimate) {
      startAnimation();
    } else {
      stopAnimation();
    }
  });

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
  aria-label="bars-3-center-left"
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
      bind:this={topBarPath}
      class="top-bar"
      class:animate={shouldAnimate}
      d="M3.75 6.75h16.5"
    />
    <path
      bind:this={centerBarPath}
      class="center-bar"
      class:animate={shouldAnimate}
      d="M3.75 12H12"
    />
    <path
      bind:this={bottomBarPath}
      class="bottom-bar"
      class:animate={shouldAnimate}
      d="M3.75 17.25h16.5"
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

  .top-bar,
  .center-bar,
  .bottom-bar {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
  }

  .top-bar.animate {
    animation: slide-left 0.4s ease-in-out forwards;
  }

  .center-bar.animate {
    animation: slide-left-short 0.5s ease-in-out 0.05s forwards;
  }

  .bottom-bar.animate {
    animation: slide-left 0.4s ease-in-out 0.1s forwards;
  }

  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-left-short {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
