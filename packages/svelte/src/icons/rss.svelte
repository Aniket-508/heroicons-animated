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
    class:rss-animate={isAnimating}
  >
    <path d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          <path d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5" />
          <path d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75" />
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

  .icon-svg.rss-animate {
    animation: rss-animate 0.6s ease-in-out;
  }

  @keyframes rss-animate {
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
