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

  const WINDOWS = [
    { path: "M6.75 12.75h.75", index: 0 },
    { path: "M6.75 9.75h.75", index: 1 },
    { path: "M6.75 6.75h.75", index: 2 },
    { path: "M10.5 12.75h.75", index: 0 },
    { path: "M10.5 9.75h.75", index: 1 },
    { path: "M10.5 6.75h.75", index: 2 },
    { path: "M17.25 17h.008v.008h-.008v-.008Z", index: 0 },
    { path: "M17.25 14h.008v.008h-.008v-.008Z", index: 1 },
    { path: "M17.25 11h.008v.008h-.008v-.008Z", index: 2 },
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
  aria-label="building-office-2"
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
    class:buildingoffice2-animate={shouldAnimate}
  >
    <path
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
    />
    {#each WINDOWS as window, index (`${window.path}-${index}`)}
      <path
        d={window.path}
        class="buildingoffice2-window"
        class:buildingoffice2-window-animate={shouldAnimate}
        style={`animation-delay: ${0.1 + window.index * 0.15}s`}
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

  .buildingoffice2-window {
    opacity: 1;
  }

  .buildingoffice2-window.buildingoffice2-window-animate {
    animation: buildingoffice2-window-fade 0.3s linear forwards;
  }

  @keyframes buildingoffice2-window-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
