<script lang="ts">
export let size: number = 28;
export let className = "";
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
  ...$$restProps
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
    class:currencyeuro-flip={isAnimating}
  >
    <path
      d="M14.25 7.75625C12.667 7.19798 10.8341 7.5519 9.56802 8.81802C7.81066 10.5754 7.81066 13.4246 9.56802 15.182C10.8341 16.4481 12.667 16.802 14.25 16.2437M7.5 10.5H12.75M7.5 13.5H12.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
    />
  </svg>
</div>

<style>
div {
  display: inline-block;
}

.icon-svg {
  transform-box: fill-box;
  transform-origin: 50% 50%;
}

.icon-svg.currencyeuro-flip {
  animation: currencyeuro-flip 0.6s ease-in-out;
}

@keyframes currencyeuro-flip {
  0%,
  100% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
}
</style>
