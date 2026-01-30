<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let arrowPath: SVGPathElement;
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
    <path bind:this={arrowPath} class="arrow-path" class:animate={isAnimating} d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
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

.arrow-path {
  transform-box: fill-box;
  transform-origin: 100% 0%;
  transition: transform 0.5s ease-in-out;
}

.arrow-path.animate {
  animation: arrow-move 0.5s ease-in-out forwards;
}

@keyframes arrow-move {
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-4px, 4px) scale(0.85);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>
