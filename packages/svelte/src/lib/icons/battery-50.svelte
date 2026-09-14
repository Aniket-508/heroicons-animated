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

  const clipId = `battery-clip-${Math.random().toString(36).substr(2, 9)}`;
  const clipWidthMin = 0;
  const clipWidthExpanded = 6.75;
  const clipAnimationDuration = 400;

  let clipRect: SVGRectElement;
  let clipAnimationFrame: number | null = null;
  let clipAnimationToken = 0;

  function clampClipWidth(value: number): number {
    return Math.max(clipWidthMin, Math.min(value, clipWidthExpanded));
  }

  function cancelClipAnimation() {
    if (clipAnimationFrame !== null) {
      cancelAnimationFrame(clipAnimationFrame);
      clipAnimationFrame = null;
    }
    clipAnimationToken += 1;
  }

  function animateClipWidth(targetWidth: number) {
    if (!clipRect) {
      return;
    }

    cancelClipAnimation();

    const parsedWidth = Number.parseFloat(
      clipRect.getAttribute("width") ?? "0"
    );
    const startWidth = Number.isFinite(parsedWidth)
      ? clampClipWidth(parsedWidth)
      : clipWidthMin;
    const boundedTargetWidth = clampClipWidth(targetWidth);
    const delta = boundedTargetWidth - startWidth;

    if (delta === 0) {
      clipRect.setAttribute("width", boundedTargetWidth.toFixed(3));
      return;
    }

    const animationToken = clipAnimationToken;
    const startTime = performance.now();
    const step = (time: number) => {
      if (animationToken !== clipAnimationToken) {
        return;
      }

      const elapsed = time - startTime;
      const progress = Math.max(
        0,
        Math.min(elapsed / clipAnimationDuration, 1)
      );
      const easedProgress = 1 - (1 - progress) ** 3;
      const nextWidth = startWidth + delta * easedProgress;
      const clampedWidth = clampClipWidth(nextWidth);

      clipRect.setAttribute("width", clampedWidth.toFixed(3));

      if (progress < 1) {
        clipAnimationFrame = requestAnimationFrame(step);
      } else {
        clipRect.setAttribute("width", boundedTargetWidth.toFixed(3));
        clipAnimationFrame = null;
      }
    };

    clipAnimationFrame = requestAnimationFrame(step);
  }

  function startAnimation() {
    animateClipWidth(clipWidthExpanded);
  }

  function stopAnimation() {
    cancelClipAnimation();
    if (clipRect) {
      clipRect.setAttribute("width", clipWidthMin.toFixed(3));
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
  aria-label="battery-50"
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
    <defs>
      <clipPath id={clipId}>
        <rect bind:this={clipRect} height="4.5" x="4.5" y="10.5" width="0" />
      </clipPath>
    </defs>
    <path
      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21"
    />
    <path
      d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
    />
    <path d="M4.5 10.5h6.75V15H4.5v-4.5Z" />
    <path
      clip-path={`url(#${clipId})`}
      d="M4.5 10.5h6.75V15H4.5v-4.5Z"
      fill={color}
      stroke="none"
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
