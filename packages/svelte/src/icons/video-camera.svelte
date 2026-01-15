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
    class:videocamera-animate={isAnimating}
  >
    <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" />
          <circle
            cx="5"
            cy="7.5"
            fill="red"
            r="1"
            stroke="none" />
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

  .icon-svg.videocamera-animate {
    animation: videocamera-animate 0.6s ease-in-out;
  }

  @keyframes videocamera-animate {
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
