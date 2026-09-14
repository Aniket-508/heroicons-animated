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

  let pathElement: SVGPathElement;
  let pathAnimation: Animation | null = null;

  function startAnimation() {
    if (pathElement) {
      const pathLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${pathLength}`;
      pathElement.style.strokeDashoffset = `${pathLength}`;
      pathElement.style.opacity = "0";

      pathAnimation = pathElement.animate(
        [
          {
            strokeDashoffset: pathLength,
            opacity: 0,
          },
          {
            strokeDashoffset: 0,
            opacity: 1,
          },
        ],
        {
          duration: 600,
          easing: "linear",
          fill: "forwards",
        }
      );
    }
  }

  function stopAnimation() {
    if (pathAnimation) {
      pathAnimation.cancel();
      pathAnimation = null;
    }

    if (pathElement) {
      pathElement.style.strokeDasharray = "";
      pathElement.style.strokeDashoffset = "";
      pathElement.style.opacity = "";
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
  aria-label="bolt"
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
      bind:this={pathElement}
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
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
</style>
