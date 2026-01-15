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
    class:home-animate={isAnimating}
  >
    <path
      d="M2.25 12L11.2045 3.04549C11.6438 2.60615 12.3562 2.60615 12.7955 3.04549L21.75 12M4.5 9.75V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75M8.25 21H16.5"
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
  transition: transform 0.3s ease;
}

.icon-svg.home-animate {
  animation: home-animate 0.6s ease-in-out;
}

@keyframes home-animate {
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
