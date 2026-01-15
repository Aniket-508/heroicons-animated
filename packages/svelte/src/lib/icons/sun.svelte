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
    class:sun-animate={isAnimating}
  >
    <circle cx="12" cy="12" r="3.75"/>
    <path d="M12 3V5.25"/>
    <path d="M18.364 5.63604L16.773 7.22703"/>
    <path d="M21 12H18.75"/>
    <path d="M18.364 18.364L16.773 16.773"/>
    <path d="M12 18.75V21"/>
    <path d="M7.22703 16.773L5.63604 18.364"/>
    <path d="M5.25 12H3"/>
    <path d="M7.22703 7.22703L5.63604 5.63604"/>
  </svg>
</div>

<style>
div {
  display: inline-block;
}

.icon-svg {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s ease;
}

.icon-svg.sun-animate {
  animation: sun-animate 0.6s ease-in-out;
}

@keyframes sun-animate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
