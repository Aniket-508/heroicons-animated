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
  aria-label="gif"
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
      d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
    />
    <g class="gif-letters" class:gif-letters-animate={shouldAnimate}>
      <path
        d="M9.75 9.34835C8.72056 7.88388 7.05152 7.88388 6.02208 9.34835C4.99264 10.8128 4.99264 13.1872 6.02208 14.6517C7.05152 16.1161 8.72056 16.1161 9.75 14.6517V12H8.25"
      />
      <path d="M12.75 8.25V15.75" />
      <path d="M18.75 8.25H15.75V12M15.75 12V15.75M15.75 12H18" />
    </g>
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

  .gif-letters {
    transform-box: fill-box;
    transform-origin: center;
  }

  .gif-letters.gif-letters-animate {
    animation: gif-letters-shake 0.5s linear infinite;
  }

  @keyframes gif-letters-shake {
    0% {
      transform: translate(0, 0);
    }
    14.2857% {
      transform: translate(-0.5px, 0.5px);
    }
    28.5714% {
      transform: translate(0.5px, -0.5px);
    }
    42.8571% {
      transform: translate(-0.3px, 0.3px);
    }
    57.1429% {
      transform: translate(0.3px, -0.3px);
    }
    71.4286% {
      transform: translate(-0.5px, 0.5px);
    }
    85.7143% {
      transform: translate(0.5px, -0.5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
</style>
