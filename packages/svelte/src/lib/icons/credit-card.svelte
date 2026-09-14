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
  aria-label="credit-card"
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
      d="M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    />
    <path
      d="M5.25 14.25h6"
      pathLength="1"
      class="creditcard-line creditcard-line1"
      class:creditcard-animate={shouldAnimate}
    />
    <path
      d="M5.25 16.5h3"
      pathLength="1"
      class="creditcard-line creditcard-line2"
      class:creditcard-animate={shouldAnimate}
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

  .creditcard-line {
    stroke-dasharray: 1;
    stroke-dashoffset: 0;
    opacity: 1;
  }

  .creditcard-line.creditcard-line1.creditcard-animate {
    animation: creditcard-seq1 0.7s ease-out forwards;
  }

  .creditcard-line.creditcard-line2.creditcard-animate {
    animation: creditcard-seq2 0.7s ease-out forwards;
  }

  /* React parity: hide first (duration 0.3, line2 delayed 0.1), then show (duration 0.3, same delays). */
  @keyframes creditcard-seq1 {
    0% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    42.857% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    85.714% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes creditcard-seq2 {
    0%,
    14.286% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    57.143% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
</style>
