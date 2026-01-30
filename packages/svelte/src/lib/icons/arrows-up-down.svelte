<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

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
    <g class="up-arrow-group" class:animate={isAnimating}>
      <path d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5" />
    </g>
    <g class="down-arrow-group" class:animate={isAnimating}>
      <path d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
    </g>
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

.up-arrow-group,
.down-arrow-group {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.5s ease-in-out;
}

.up-arrow-group.animate {
  animation: up-arrow-translate 0.5s ease-in-out forwards;
}

.down-arrow-group.animate {
  animation: down-arrow-translate 0.5s ease-in-out forwards;
}

@keyframes up-arrow-translate {
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

@keyframes down-arrow-translate {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
