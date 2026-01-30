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
    }, 400);
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
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path
      class="chart-pie-wedge"
      class:chart-pie-wedge-animate={isAnimating}
      d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
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

/* Second path: translateX 1.1, translateY -1.1, spring (≈ cubic-bezier) matches React PATH_VARIANTS */
.chart-pie-wedge {
  transform-box: fill-box;
  transform-origin: center;
}

.chart-pie-wedge.chart-pie-wedge-animate {
  animation: chart-pie-wedge-move 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes chart-pie-wedge-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(1.1px, -1.1px);
  }
}
</style>
