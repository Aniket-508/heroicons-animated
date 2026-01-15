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
    class:boltslash-animate={isAnimating}
  >
    <path d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
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

  .icon-svg.boltslash-animate {
    animation: boltslash-animate 0.6s ease-in-out;
  }

  @keyframes boltslash-animate {
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
