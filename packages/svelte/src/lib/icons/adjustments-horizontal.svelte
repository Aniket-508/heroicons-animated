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
    class:adjustmentshorizontal-animate={isAnimating}
  >
    <line x1="10.5" x2="20.25" y1="6" y2="6" />
    <line x1="3.75" x2="7.5" y1="6" y2="6" />
    <circle cx="9" cy="6" fill="none" r="1.5" />

    <line x1="16.5" x2="20.25" y1="12" y2="12" />
    <line x1="3.75" x2="13.5" y1="12" y2="12" />
    <circle cx="15" cy="12" fill="none" r="1.5" />

    <line x1="10.5" x2="20.25" y1="18" y2="18" />
    <line x1="3.75" x2="7.5" y1="18" y2="18" />
    <circle cx="9" cy="18" fill="none" r="1.5" />
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

.icon-svg.adjustmentshorizontal-animate {
  animation: adjustmentshorizontal-animate 0.6s ease-in-out;
}

@keyframes adjustmentshorizontal-animate {
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
