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
    class:adjustmentsvertical-animate={isAnimating}
  >
    <line x1="6" x2="6" y1="3.75" y2="13.5" />
    <line x1="6" x2="6" y1="16.5" y2="20.25" />
    <circle cx="6" cy="15" fill="none" r="1.5" />

    <line x1="12" x2="12" y1="3.75" y2="7.5" />
    <line x1="12" x2="12" y1="10.5" y2="20.25" />
    <circle cx="12" cy="9" fill="none" r="1.5" />

    <line x1="18" x2="18" y1="3.75" y2="13.5" />
    <line x1="18" x2="18" y1="16.5" y2="20.25" />
    <circle cx="18" cy="15" fill="none" r="1.5" />
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

.icon-svg.adjustmentsvertical-animate {
  animation: adjustmentsvertical-animate 0.6s ease-in-out;
}

@keyframes adjustmentsvertical-animate {
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
