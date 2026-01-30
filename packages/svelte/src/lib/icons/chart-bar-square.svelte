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
    }, 850);
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
  >
    <path
      d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={isAnimating}
      style="animation-delay: 0s"
      d="M7.5 14.25v2.25"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={isAnimating}
      style="animation-delay: 0.15s"
      d="M10.5 12v4.5"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={isAnimating}
      style="animation-delay: 0.3s"
      d="M13.5 9.75v6.75"
    />
    <path
      class="chart-bar"
      class:chart-bar-animate={isAnimating}
      style="animation-delay: 0.45s"
      d="M16.5 7.5v9"
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

/* pathLength [0,1] pathOffset [1,0], opacity [0,1], 0.4s easeOut, staggered delay (matches React CREATE_BAR_VARIANTS) */
.chart-bar {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.chart-bar.chart-bar-animate {
  animation: chart-bar-draw 0.4s ease-out forwards;
}

@keyframes chart-bar-draw {
  0% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
