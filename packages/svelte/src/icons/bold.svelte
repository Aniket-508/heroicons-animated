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
    class:bold-animate={isAnimating}
  >
    <path
            d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z" />
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

  .icon-svg.bold-animate {
    animation: bold-animate 0.6s ease-in-out;
  }

  @keyframes bold-animate {
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
