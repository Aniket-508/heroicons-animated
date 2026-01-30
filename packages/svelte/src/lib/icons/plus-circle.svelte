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
    }, 800);
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
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
    <path d="M12 9v6" class="pluscircle-vertical" class:pluscircle-vertical-animate={isAnimating} />
    <path d="M9 12h6" class="pluscircle-horizontal" class:pluscircle-horizontal-animate={isAnimating} />
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

.pluscircle-vertical,
.pluscircle-horizontal {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.pluscircle-vertical.pluscircle-vertical-animate {
  animation: pluscircle-line-draw 0.2s ease-out 0.3s forwards;
}

.pluscircle-horizontal.pluscircle-horizontal-animate {
  animation: pluscircle-line-draw 0.2s ease-out 0.6s forwards;
}

@keyframes pluscircle-line-draw {
  0% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
