<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let pathElement: SVGPathElement;
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
  >
    <path
      bind:this={pathElement}
      class="bookmark-path"
      class:animate={isAnimating}
      d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
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

.bookmark-path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.6s ease-out;
}

.bookmark-path.animate {
  animation: bookmark-bounce 0.6s ease-out forwards;
}

@keyframes bookmark-bounce {
  0% {
    transform: scaleY(1) scaleX(1);
  }
  20% {
    transform: scaleY(1.3) scaleX(0.9);
  }
  40% {
    transform: scaleY(0.9) scaleX(1.1);
  }
  60% {
    transform: scaleY(1.05) scaleX(0.95);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}
</style>
