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
    <path
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5"
    />
    <path bind:this={arrowPath} class="arrow-path" class:animate={isAnimating} d="M7.5 16.5L21 3m0 0h-5.25M21 3v5.25" />
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
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
