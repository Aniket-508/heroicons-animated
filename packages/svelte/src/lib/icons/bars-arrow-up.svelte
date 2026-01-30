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
    <path d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25" />
    <path bind:this={arrowPath} class="arrow-path" class:animate={isAnimating} d="M13.5 12.75L17.25 9L21 12.75M17.25 9v12" />
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
  transform-origin: center;
  transition: transform 0.5s ease-in-out;
}

.arrow-path.animate {
  animation: arrow-translate 0.5s ease-in-out forwards;
}

@keyframes arrow-translate {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
