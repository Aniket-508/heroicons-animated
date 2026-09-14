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

  const FIRE_PATHS = [
    "M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881",
    "M4.81191 16.6408C3.21213 17.9612 2.5 19.2724 2.5 20.75C2.5 20.9869 2.5183 21.2195 2.55356 21.4464C2.78054 21.4817 3.01313 21.5 3.25 21.5C4.72758 21.5 6.03883 20.7879 6.85925 19.6881",
    "M4.81191 16.6408C3.51213 17.2612 3.2 18.1724 3.2 19.65C3.2 19.8869 3.2183 20.1195 3.25356 20.3464C3.48054 20.3817 3.71313 20.4 3.95 20.4C5.42758 20.4 6.73883 19.6879 7.55925 18.5881",
    "M4.81191 16.6408C3.41213 18.0612 2.8 19.4724 2.8 20.95C2.8 21.1869 2.8183 21.4195 2.85356 21.6464C3.08054 21.6817 3.31313 21.7 3.55 21.7C5.02758 21.7 6.33883 20.9879 7.15925 19.8881",
    "M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881",
  ] as const;
  const FIRE_TIMES = [0, 0.2, 0.5, 0.8, 1] as const;
  const FIRE_DURATION = 2000;
  const NUMBER_PATTERN = /-?\d*\.?\d+(?:e[-+]?\d+)?/gi;

  interface ParsedPath {
    template: string;
    numbers: number[];
  }

  const parsedFirePaths = FIRE_PATHS.map((path) => {
    const numbers: number[] = [];
    const template = path.replace(NUMBER_PATTERN, (value) => {
      numbers.push(Number.parseFloat(value));
      return "__N__";
    });
    return { template, numbers } satisfies ParsedPath;
  });
  const fireTemplate = parsedFirePaths[0].template;
  const fireNumberCount = parsedFirePaths[0].numbers.length;
  const canMorphFire = parsedFirePaths.every(
    (path) =>
      path.template === fireTemplate && path.numbers.length === fireNumberCount
  );

  let firePath: SVGPathElement;
  let fireAnimationFrame: number | null = null;

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

  function setFirePathAt(progress: number) {
    if (!firePath) {
      return;
    }

    if (!canMorphFire) {
      const keyframeIndex = Math.min(
        FIRE_PATHS.length - 1,
        Math.floor(progress * FIRE_PATHS.length)
      );
      firePath.setAttribute("d", FIRE_PATHS[keyframeIndex]);
      return;
    }

    const clampedProgress = Math.max(0, Math.min(progress, 1));

    let segmentIndex = FIRE_TIMES.length - 2;
    for (let index = 1; index < FIRE_TIMES.length; index += 1) {
      if (clampedProgress <= FIRE_TIMES[index]) {
        segmentIndex = index - 1;
        break;
      }
    }

    const segmentStart = FIRE_TIMES[segmentIndex];
    const segmentEnd = FIRE_TIMES[segmentIndex + 1];
    const localProgress =
      segmentEnd === segmentStart
        ? 0
        : (clampedProgress - segmentStart) / (segmentEnd - segmentStart);

    const from = parsedFirePaths[segmentIndex].numbers;
    const to = parsedFirePaths[segmentIndex + 1].numbers;
    firePath.setAttribute(
      "d",
      interpolatePath(fireTemplate, from, to, localProgress)
    );
  }

  function stopFireAnimation() {
    if (fireAnimationFrame !== null) {
      cancelAnimationFrame(fireAnimationFrame);
      fireAnimationFrame = null;
    }
    if (firePath) {
      firePath.setAttribute("d", FIRE_PATHS[0]);
    }
  }

  function startFireAnimation() {
    if (!firePath) {
      return;
    }

    stopFireAnimation();

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const cycleProgress = (elapsed % FIRE_DURATION) / FIRE_DURATION;
      setFirePathAt(cycleProgress);
      fireAnimationFrame = requestAnimationFrame(step);
    };

    fireAnimationFrame = requestAnimationFrame(step);
  }

  $effect(() => {
    if (shouldAnimate) {
      startFireAnimation();
    } else {
      stopFireAnimation();
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
  aria-label="rocket-launch"
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
    class:rocketlaunch-float={shouldAnimate}
  >
    <path
      d="M15.5904 14.3696C15.6948 14.8128 15.75 15.275 15.75 15.75C15.75 19.0637 13.0637 21.75 9.75 21.75V16.9503M15.5904 14.3696C19.3244 11.6411 21.75 7.22874 21.75 2.25C16.7715 2.25021 12.3595 4.67586 9.63122 8.40975M15.5904 14.3696C13.8819 15.6181 11.8994 16.514 9.75 16.9503M9.63122 8.40975C9.18777 8.30528 8.72534 8.25 8.25 8.25C4.93629 8.25 2.25 10.9363 2.25 14.25H7.05072M9.63122 8.40975C8.38285 10.1183 7.48701 12.1007 7.05072 14.25M9.75 16.9503C9.64659 16.9713 9.54279 16.9912 9.43862 17.0101C8.53171 16.291 7.70991 15.4692 6.99079 14.5623C7.00969 14.4578 7.02967 14.3537 7.05072 14.25M16.5 9C16.5 9.82843 15.8284 10.5 15 10.5C14.1716 10.5 13.5 9.82843 13.5 9C13.5 8.17157 14.1716 7.5 15 7.5C15.8284 7.5 16.5 8.17157 16.5 9Z"
    />
    <path
      bind:this={firePath}
      class="rocketlaunch-fire"
      d="M4.81191 16.6408C3.71213 17.4612 3 18.7724 3 20.25C3 20.4869 3.0183 20.7195 3.05356 20.9464C3.28054 20.9817 3.51313 21 3.75 21C5.22758 21 6.53883 20.2879 7.35925 19.1881"
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

  .icon-svg.rocketlaunch-float {
    animation: rocketlaunch-float 6s ease-in-out infinite alternate;
  }

  @keyframes rocketlaunch-float {
    0% {
      transform: translate(0, 0);
    }
    15% {
      transform: translate(0, -3px);
    }
    30% {
      transform: translate(-3px, 0);
    }
    45% {
      transform: translate(2px, -2px);
    }
    60% {
      transform: translate(-2px, -3px);
    }
    75% {
      transform: translate(1px, -1px);
    }
    90% {
      transform: translate(-1px, -2px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .rocketlaunch-fire {
    opacity: 1;
  }
</style>
