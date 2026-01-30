<script lang="ts">
export const size = 28;
const className = "";
export { className as class };

let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
    }, 700);
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
  >
    <path
      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
    />
    <path d="M9 11.25v1.5" class="presentationchartbar-bar" class:presentationchartbar-bar1-animate={isAnimating} />
    <path d="M12 9v3.75" class="presentationchartbar-bar" class:presentationchartbar-bar2-animate={isAnimating} />
    <path d="M15 6.75v6" class="presentationchartbar-bar" class:presentationchartbar-bar3-animate={isAnimating} />
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

.presentationchartbar-bar {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.presentationchartbar-bar.presentationchartbar-bar1-animate {
  animation: presentationchartbar-bar-draw 0.4s ease-out 0s forwards;
}

.presentationchartbar-bar.presentationchartbar-bar2-animate {
  animation: presentationchartbar-bar-draw 0.4s ease-out 0.15s forwards;
}

.presentationchartbar-bar.presentationchartbar-bar3-animate {
  animation: presentationchartbar-bar-draw 0.4s ease-out 0.3s forwards;
}

@keyframes presentationchartbar-bar-draw {
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
