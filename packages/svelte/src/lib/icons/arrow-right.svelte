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

  let headPath: SVGPathElement;
  let linePath: SVGPathElement;
  let lineAnimationFrame: number | null = null;

  const LINE_PATH_KEYFRAMES = ["M21 12H3", "M18 12H3", "M21 12H3"] as const;
  const LINE_PATH_TIMES = [0, 0.5, 1] as const;
  const NUMBER_PATTERN = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;
  const lineAnimationDuration = 400;

  interface ParsedPath {
    template: string;
    numbers: number[];
  }

  const parsedLinePaths = LINE_PATH_KEYFRAMES.map((path) => {
    const numbers: number[] = [];
    const template = path.replace(NUMBER_PATTERN, (value) => {
      numbers.push(Number.parseFloat(value));
      return "__N__";
    });
    return { template, numbers } satisfies ParsedPath;
  });
  const lineTemplate = parsedLinePaths[0].template;
  const lineNumberCount = parsedLinePaths[0].numbers.length;
  const canMorphLine = parsedLinePaths.every(
    (path) =>
      path.template === lineTemplate && path.numbers.length === lineNumberCount
  );

  function clearLineAnimation() {
    if (lineAnimationFrame !== null) {
      cancelAnimationFrame(lineAnimationFrame);
      lineAnimationFrame = null;
    }
  }

  function getEaseInOut(value: number): number {
    return 0.5 - Math.cos(Math.PI * value) / 2;
  }

  function formatNumber(value: number): string {
    return Number(value.toFixed(4)).toString();
  }

  function interpolatePath(
    template: string,
    from: number[],
    to: number[],
    progress: number
  ): string {
    let numberIndex = 0;
    return template.replace(/__N__/g, () => {
      const start = from[numberIndex];
      const end = to[numberIndex];
      numberIndex += 1;
      return formatNumber(start + (end - start) * progress);
    });
  }

  function setLinePath(progress: number) {
    if (!linePath) {
      return;
    }

    if (!canMorphLine) {
      linePath.setAttribute("d", LINE_PATH_KEYFRAMES[0]);
      return;
    }

    const clampedProgress = Math.max(0, Math.min(progress, 1));

    let segmentIndex = LINE_PATH_TIMES.length - 2;
    for (let index = 1; index < LINE_PATH_TIMES.length; index += 1) {
      if (clampedProgress <= LINE_PATH_TIMES[index]) {
        segmentIndex = index - 1;
        break;
      }
    }

    const segmentStart = LINE_PATH_TIMES[segmentIndex];
    const segmentEnd = LINE_PATH_TIMES[segmentIndex + 1];
    const localProgress =
      segmentEnd === segmentStart
        ? 0
        : (clampedProgress - segmentStart) / (segmentEnd - segmentStart);
    const easedProgress = getEaseInOut(localProgress);
    const from = parsedLinePaths[segmentIndex].numbers;
    const to = parsedLinePaths[segmentIndex + 1].numbers;
    linePath.setAttribute(
      "d",
      interpolatePath(lineTemplate, from, to, easedProgress)
    );
  }

  function startAnimation() {
    if (!linePath) {
      return;
    }

    clearLineAnimation();

    const startTime = performance.now();
    const step = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / lineAnimationDuration, 1);
      setLinePath(progress);

      if (progress < 1) {
        lineAnimationFrame = requestAnimationFrame(step);
      } else {
        lineAnimationFrame = null;
      }
    };

    lineAnimationFrame = requestAnimationFrame(step);
  }

  function stopAnimation() {
    clearLineAnimation();
    if (linePath) {
      linePath.setAttribute("d", LINE_PATH_KEYFRAMES[0]);
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
  aria-label="arrow-right"
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
      bind:this={headPath}
      class="head-path"
      class:animate={shouldAnimate}
      d="M13.5 4.5 21 12m0 0-7.5 7.5"
    />
    <path bind:this={linePath} d={LINE_PATH_KEYFRAMES[0]} />
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

  .head-path {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.4s ease-in-out;
  }

  .head-path.animate {
    animation: head-translate 0.4s ease-in-out forwards;
  }

  @keyframes head-translate {
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
</style>
