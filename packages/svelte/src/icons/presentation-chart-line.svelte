<script lang="ts">
  export let size: number = 28;
  let className: string = '';
  export { className as class };

  let isAnimating = false;
  let isControlled = false;

  export function startAnimation() {
    if (!isControlled) {
      isAnimating = true;
      setTimeout(() => {
        isAnimating = false;
      }, 600);
    }
  }

  export function stopAnimation() {
    isAnimating = false;
  }

  export function setControlled(value: boolean) {
    isControlled = value;
  }

  function handleMouseEnter() {
    if (!isControlled) {
      startAnimation();
    }
  }

  function handleMouseLeave() {
    if (!isControlled) {
      stopAnimation();
    }
  }
</script>

<div
  class={className}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  role="img"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon-svg"
    class:presentationchartline-animate={isAnimating}
  >
    <path d="M3.75 3V14.25C3.75 15.4926 4.75736 16.5 6 16.5H8.25M3.75 3H2.25M3.75 3H20.25M20.25 3H21.75M20.25 3V14.25C20.25 15.4926 19.2426 16.5 18 16.5H15.75M8.25 16.5H15.75M8.25 16.5L7.25 19.5M15.75 16.5L16.75 19.5M16.75 19.5L17.25 21M16.75 19.5H7.25M7.25 19.5L6.75 21" />
        <path
          d="M7.5 12L10.5 9L12.6476 11.1476C13.6542 9.70301 14.9704 8.49023 16.5 7.60539" />
  </svg>
</div>

<style>
  div {
    display: inline-block;
  }

  .icon-svg {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  .icon-svg.presentationchartline-animate {
    animation: presentationchartline-animate 0.6s ease-in-out;
  }

  @keyframes presentationchartline-animate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
