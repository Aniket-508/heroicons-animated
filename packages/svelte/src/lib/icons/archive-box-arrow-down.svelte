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
  aria-label="archive-box-arrow-down"
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
      class="path-group"
      class:animate={shouldAnimate}
      d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
    />
    <path
      class="path-group"
      class:animate={shouldAnimate}
      d="M20.25 7.5L19.6246 18.1321"
    />
    <path
      class="path-group"
      class:animate={shouldAnimate}
      d="M3.75 7.5L4.37542 18.1321"
    />
    <path
      class="arrow-group"
      class:animate={shouldAnimate}
      d="M12 10.5V17.25"
    />
    <path
      class="arrow-group"
      class:animate={shouldAnimate}
      d="M12 17.25L9 14.25"
    />
    <path
      class="arrow-group"
      class:animate={shouldAnimate}
      d="M12 17.25L15 14.25"
    />
    <path
      class="lid-group"
      class:animate={shouldAnimate}
      d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
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

  .path-group {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .path-group.animate {
    animation: path-translate 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)
      forwards;
  }

  .arrow-group {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .arrow-group.animate {
    animation: arrow-translate 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)
      forwards;
  }

  .lid-group {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .lid-group.animate {
    animation: lid-translate 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)
      forwards;
  }

  @keyframes path-translate {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(1px);
    }
  }

  @keyframes arrow-translate {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(2px);
    }
  }

  @keyframes lid-translate {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-1.5px);
    }
  }
</style>
