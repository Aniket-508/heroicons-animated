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
    class:arrowspointingin-animate={isAnimating}
  >
    <g>
      <path d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75"/>
    </g>
    <g>
      <path d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25"/>
    </g>
    <g>
      <path d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25"/>
    </g>
    <g>
      <path d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"/>
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
  transition: transform 0.3s ease;
}

.icon-svg.arrowspointingin-animate {
  animation: arrowspointingin-animate 0.6s ease-in-out;
}

@keyframes arrowspointingin-animate {
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
