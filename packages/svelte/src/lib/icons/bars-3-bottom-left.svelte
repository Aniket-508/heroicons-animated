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
  let middleBarPath: SVGPathElement;
  let bottomBarPath: SVGPathElement;
  let bottomBarAnimation: Animation | null = null;

  function startAnimation() {
    // Animate pathLength using Web Animations API
    if (bottomBarPath) {
      const pathLength = bottomBarPath.getTotalLength();
      bottomBarPath.style.strokeDasharray = `${pathLength}`;
      bottomBarPath.style.strokeDashoffset = "0";

      bottomBarAnimation = bottomBarPath.animate(
        [
          { strokeDashoffset: 0 },
          { strokeDashoffset: pathLength * 0.5 },
          { strokeDashoffset: 0 },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          delay: 150,
          fill: "forwards",
        }
      );
    }
  }

  function stopAnimation() {
    if (bottomBarAnimation) {
      bottomBarAnimation.cancel();
      bottomBarAnimation = null;
    }

    if (bottomBarPath) {
      bottomBarPath.style.strokeDasharray = "";
      bottomBarPath.style.strokeDashoffset = "";
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
  aria-label="bars-3-bottom-left"
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
      bind:this={middleBarPath}
      class="middle-bar"
      class:animate={shouldAnimate}
      d="M3.75 12h16.5"
    />
    <path
      bind:this={bottomBarPath}
      class="bottom-bar"
      class:animate={shouldAnimate}
      d="M3.75 17.25H12"
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
  .middle-bar,
  .bottom-bar {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
  }

  .top-bar.animate {
    animation: slide-left 0.4s ease-in-out forwards;
  }

  .middle-bar.animate {
    animation: slide-left 0.4s ease-in-out 0.05s forwards;
  }

  .bottom-bar.animate {
    animation: slide-left-short 0.5s ease-in-out 0.15s forwards;
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
