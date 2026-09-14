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

  const MOUTH_PATHS = [
    "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
    "M15.5 17C14.5 16 13 15.5 12 15.5C11 15.5 9.5 16 8.5 17",
    "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
  ] as const;
  const MOUTH_TIMES = [0, 0.5, 1] as const;
  const MOUTH_MORPH_DURATION = 500;
  const MOUTH_MORPH_DELAY = 100;
  const NUMBER_PATTERN = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;

  interface ParsedPath {
    template: string;
    numbers: number[];
  }

  const parsedMouthPaths = MOUTH_PATHS.map((path) => {
    const numbers: number[] = [];
    const template = path.replace(NUMBER_PATTERN, (value) => {
      numbers.push(Number.parseFloat(value));
      return "__N__";
    });
    return { template, numbers } satisfies ParsedPath;
  });
  const mouthTemplate = parsedMouthPaths[0].template;
  const mouthNumberCount = parsedMouthPaths[0].numbers.length;
  const canMorphMouth = parsedMouthPaths.every(
    (path) =>
      path.template === mouthTemplate &&
      path.numbers.length === mouthNumberCount
  );

  let mouthPath: SVGPathElement;
  let mouthAnimationFrame: number | null = null;
  let mouthDelayTimeout: number | null = null;

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

  function cancelMouthMorph() {
    if (mouthDelayTimeout !== null) {
      clearTimeout(mouthDelayTimeout);
      mouthDelayTimeout = null;
    }
    if (mouthAnimationFrame !== null) {
      cancelAnimationFrame(mouthAnimationFrame);
      mouthAnimationFrame = null;
    }
  }

  function setMouthPathAt(progress: number) {
    if (!mouthPath) {
      return;
    }

    if (!canMorphMouth) {
      if (progress < 0.25) {
        mouthPath.setAttribute("d", MOUTH_PATHS[0]);
      } else if (progress < 0.75) {
        mouthPath.setAttribute("d", MOUTH_PATHS[1]);
      } else {
        mouthPath.setAttribute("d", MOUTH_PATHS[2]);
      }
      return;
    }

    const clampedProgress = Math.max(0, Math.min(progress, 1));

    let segmentIndex = MOUTH_TIMES.length - 2;
    for (let index = 1; index < MOUTH_TIMES.length; index += 1) {
      if (clampedProgress <= MOUTH_TIMES[index]) {
        segmentIndex = index - 1;
        break;
      }
    }

    const segmentStart = MOUTH_TIMES[segmentIndex];
    const segmentEnd = MOUTH_TIMES[segmentIndex + 1];
    const localProgress =
      segmentEnd === segmentStart
        ? 0
        : (clampedProgress - segmentStart) / (segmentEnd - segmentStart);

    const from = parsedMouthPaths[segmentIndex].numbers;
    const to = parsedMouthPaths[segmentIndex + 1].numbers;
    mouthPath.setAttribute(
      "d",
      interpolatePath(mouthTemplate, from, to, localProgress)
    );
  }

  function startMouthMorph() {
    if (!mouthPath) {
      return;
    }

    cancelMouthMorph();

    mouthDelayTimeout = window.setTimeout(() => {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / MOUTH_MORPH_DURATION, 1);
        setMouthPathAt(progress);

        if (progress < 1) {
          mouthAnimationFrame = requestAnimationFrame(step);
        } else {
          mouthAnimationFrame = null;
        }
      };

      mouthAnimationFrame = requestAnimationFrame(step);
      mouthDelayTimeout = null;
    }, MOUTH_MORPH_DELAY);
  }

  function stopMouthMorph() {
    cancelMouthMorph();
    if (mouthPath) {
      mouthPath.setAttribute("d", MOUTH_PATHS[0]);
    }
  }

  $effect(() => {
    if (shouldAnimate) {
      startMouthMorph();
    } else {
      stopMouthMorph();
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
  aria-label="face-frown"
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
    class="icon-svg facefrown-svg"
    class:facefrown-svg-animate={shouldAnimate}
  >
    <circle cx="12" cy="12" r="9" />
    <path
      bind:this={mouthPath}
      d="M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
      pathLength="1"
      class="facefrown-mouth"
      class:facefrown-mouth-animate={shouldAnimate}
    />
    <path
      d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
      class="facefrown-eye facefrown-eye-left"
      class:facefrown-eye-animate={shouldAnimate}
    />
    <path
      d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
      class="facefrown-eye facefrown-eye-right"
      class:facefrown-eye-animate={shouldAnimate}
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

  /* Match React: svg scale [1,1.15,1.05,1.08] rotate [0,-2,2,0] 0.8s times 0/0.3/0.6/1 */
  .facefrown-svg.facefrown-svg-animate {
    animation: facefrown-svg-bounce 0.8s ease-in-out forwards;
  }
  @keyframes facefrown-svg-bounce {
    0% {
      transform: scale(1) rotate(0deg);
    }
    30% {
      transform: scale(1.15) rotate(-2deg);
    }
    60% {
      transform: scale(1.05) rotate(2deg);
    }
    100% {
      transform: scale(1.08) rotate(0deg);
    }
  }

  /* Mouth: pathLength [0.3,1,1] 0.5s delay 0.1 (d morph not in CSS, pathLength only) */
  .facefrown-mouth {
    stroke-dasharray: 1;
  }
  .facefrown-mouth.facefrown-mouth-animate {
    animation: facefrown-mouth-draw 0.5s ease-in-out 0.1s forwards;
  }
  @keyframes facefrown-mouth-draw {
    0% {
      stroke-dashoffset: 0.7;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  /* Left eye: scale [1,1.3,0.9,1.1] y [0,-0.5,0.3,0] 0.6s */
  .facefrown-eye-left.facefrown-eye-animate {
    animation: facefrown-eye-left-bounce 0.6s ease-in-out forwards;
  }
  .facefrown-eye {
    transform-box: fill-box;
    transform-origin: center;
  }
  @keyframes facefrown-eye-left-bounce {
    0% {
      transform: scale(1) translateY(0);
    }
    30% {
      transform: scale(1.3) translateY(-0.5px);
    }
    60% {
      transform: scale(0.9) translateY(0.3px);
    }
    100% {
      transform: scale(1.1) translateY(0);
    }
  }
  /* Right eye: scale [1,0.9,1.3,1.1] y [0,-0.5,0.3,0] 0.6s */
  .facefrown-eye-right.facefrown-eye-animate {
    animation: facefrown-eye-right-bounce 0.6s ease-in-out forwards;
  }
  @keyframes facefrown-eye-right-bounce {
    0% {
      transform: scale(1) translateY(0);
    }
    30% {
      transform: scale(0.9) translateY(-0.5px);
    }
    60% {
      transform: scale(1.3) translateY(0.3px);
    }
    100% {
      transform: scale(1.1) translateY(0);
    }
  }
</style>
