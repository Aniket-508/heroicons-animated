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

  const arcAnimationDurationMs = 600;
  const arcAnimationDelayStepMs = 200;

  let arcOnePath: SVGPathElement;
  let arcTwoPath: SVGPathElement;
  let arcThreePath: SVGPathElement;
  let arcAnimations: Animation[] = [];

  function clearArcAnimations() {
    for (const animation of arcAnimations) {
      animation.cancel();
    }
    arcAnimations = [];
  }

  function resetArcPaths() {
    const arcPaths = [arcOnePath, arcTwoPath, arcThreePath];
    for (const arcPath of arcPaths) {
      if (!arcPath) {
        continue;
      }
      arcPath.style.opacity = "1";
      arcPath.style.transform = "scale(1)";
    }
  }

  function startAnimation() {
    const arcPaths = [arcOnePath, arcTwoPath, arcThreePath];
    clearArcAnimations();

    for (const [index, arcPath] of arcPaths.entries()) {
      if (!arcPath) {
        continue;
      }

      const animation = arcPath.animate(
        [
          {
            opacity: "1",
            transform: "scale(1)",
            offset: 0,
            easing: "ease-in-out",
          },
          {
            opacity: "0",
            transform: "scale(0)",
            offset: 1 / 3,
            easing: "ease-in-out",
          },
          { opacity: "0", transform: "scale(0)", offset: 2 / 3 },
          {
            opacity: "1",
            transform: "scale(1)",
            offset: 1,
            easing: "ease-in-out",
          },
        ],
        {
          duration: arcAnimationDurationMs,
          delay: arcAnimationDelayStepMs * index,
          fill: "both",
        }
      );

      arcAnimations.push(animation);
    }
  }

  function stopAnimation() {
    clearArcAnimations();
    resetArcPaths();
  }

  $effect(() => {
    if (shouldAnimate) {
      startAnimation();
    } else {
      stopAnimation();
    }
  });

  $effect(() => {
    return () => {
      clearArcAnimations();
    };
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
  aria-label="wifi"
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
    <path d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0" />
    <path
      bind:this={arcOnePath}
      d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0"
      class="wifi-arc"
    />
    <path
      bind:this={arcTwoPath}
      d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0"
      class="wifi-arc wifi-arc-2"
    />
    <path
      bind:this={arcThreePath}
      d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
      class="wifi-arc wifi-arc-3"
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

  .wifi-arc {
    opacity: 1;
    transform: scale(1);
    transform-box: fill-box;
    transform-origin: center;
  }
</style>
