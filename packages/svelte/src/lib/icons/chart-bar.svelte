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
  >
    <path
      class="chart-bar chart-bar-1"
      class:chart-bar-animate={isAnimating}
      d="M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"
    />
    <path
      class="chart-bar chart-bar-2"
      class:chart-bar-animate={isAnimating}
      d="M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"
    />
    <path
      class="chart-bar chart-bar-3"
      class:chart-bar-animate={isAnimating}
      d="M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"
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

/* scaleY [0, 1.1, 1], opacity [0, 1, 1], origin 50% 100%, delays 0, 0.1, 0.2s, 0.4s easeOut (matches React CREATE_BAR_VARIANTS) */
.chart-bar {
  transform-box: fill-box;
  transform-origin: 50% 100%;
}

.chart-bar-1.chart-bar-animate {
  animation: chart-bar-grow 0.4s ease-out forwards;
  opacity: 0;
}
.chart-bar-2.chart-bar-animate {
  animation: chart-bar-grow 0.4s ease-out 0.1s forwards;
  opacity: 0;
}
.chart-bar-3.chart-bar-animate {
  animation: chart-bar-grow 0.4s ease-out 0.2s forwards;
  opacity: 0;
}

@keyframes chart-bar-grow {
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  90% {
    transform: scaleY(1.1);
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
}
</style>
