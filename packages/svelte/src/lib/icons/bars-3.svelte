<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let bar1Path: SVGPathElement;
let bar2Path: SVGPathElement;
let bar3Path: SVGPathElement;
let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
    }, 500);
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
    <path bind:this={bar1Path} class="bar-path" class:animate={isAnimating} d="M3.75 6.75h16.5" />
    <path bind:this={bar2Path} class="bar-path" class:animate={isAnimating} d="M3.75 12h16.5" />
    <path bind:this={bar3Path} class="bar-path" class:animate={isAnimating} d="M3.75 17.25h16.5" />
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

.bar-path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s ease-in-out;
}

.bar-path.animate {
  animation: bar-scale-x 0.3s ease-in-out forwards;
}

.bar-path:nth-child(2).animate {
  animation-delay: 0.1s;
}

.bar-path:nth-child(3).animate {
  animation-delay: 0.2s;
}

@keyframes bar-scale-x {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0.6);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
