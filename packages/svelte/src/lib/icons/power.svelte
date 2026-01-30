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
    <path d="M5.636 5.636a9 9 0 1 0 12.728 0" class="power-circle" class:power-circle-animate={isAnimating} />
    <path d="M12 3v9" class="power-line" class:power-line-animate={isAnimating} />
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

.power-circle {
  transform-box: fill-box;
  transform-origin: center center;
}

.power-circle.power-circle-animate {
  animation: power-circle-pulse 0.5s ease-in-out forwards;
}

@keyframes power-circle-pulse {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  33% {
    opacity: 1;
    transform: scale(1.05);
  }
  66% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.power-line {
  transform-box: fill-box;
  transform-origin: center;
}

.power-line.power-line-animate {
  animation: power-line-bounce 0.3s ease-in-out forwards;
}

@keyframes power-line-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}
</style>
