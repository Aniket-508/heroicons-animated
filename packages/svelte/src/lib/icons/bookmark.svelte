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
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
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
