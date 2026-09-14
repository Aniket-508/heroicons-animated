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

  const RANGE_LINES = [
    { d: "M14.25 12.75h2.25", index: 0 },
    { d: "M7.5 15h4.5", index: 1 },
  ] as const;

  const FIRST_DOT = { d: "M12 12.75h.005v.006H12v-.006Z" } as const;

  const DOTS = [
    { d: "M14.25 15h.005v.005h-.005v-.005Z", index: 0 },
    { d: "M16.5 15h.006v.005H16.5v-.005Z", index: 1 },
    { d: "M7.5 17.25h.005v.005h-.006v-.005Z", index: 2 },
    { d: "M9.75 17.25h.005v.006H9.75v-.006Z", index: 3 },
    { d: "M12 17.25h.006v.006h-.006v-.005Z", index: 4 },
    { d: "M14.25 17.25h.006v.006h-.006v-.006Z", index: 5 },
  ] as const;

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
  aria-label="calendar-date-range"
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
      d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5"
    />
    <path
      d={FIRST_DOT.d}
      class="calendar-range-dot-first"
      class:calendar-range-dot-first-animate={shouldAnimate}
    />
    {#each RANGE_LINES as line}
      <path
        d={line.d}
        pathLength="1"
        class="calendar-range-line"
        class:calendar-range-line-animate={shouldAnimate}
        style={`animation-delay: ${0.4 + line.index * 0.15}s`}
      />
    {/each}
    {#each DOTS as dot}
      <path
        d={dot.d}
        class="calendar-range-dot"
        class:calendar-range-dot-animate={shouldAnimate}
        style={`animation-delay: ${0.7 + dot.index * 0.1}s`}
      />
    {/each}
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

  .calendar-range-dot-first,
  .calendar-range-dot {
    opacity: 1;
  }

  .calendar-range-line {
    opacity: 1;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
  }

  .calendar-range-dot-first.calendar-range-dot-first-animate {
    animation: calendar-range-dot-pulse 0.4s ease-in-out forwards;
  }

  .calendar-range-line.calendar-range-line-animate {
    animation: calendar-range-line-draw 0.3s ease-out forwards;
  }

  .calendar-range-dot.calendar-range-dot-animate {
    animation: calendar-range-dot-pulse 0.4s ease-in-out forwards;
  }

  @keyframes calendar-range-line-draw {
    0% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes calendar-range-dot-pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
</style>
