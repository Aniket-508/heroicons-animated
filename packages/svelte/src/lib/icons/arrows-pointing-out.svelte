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
    class:arrowspointingout-animate={isAnimating}
  >
    <g>
      <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9"/>
    </g>
    <g>
      <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15"/>
    </g>
    <g>
      <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9"/>
    </g>
    <g>
      <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
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

.icon-svg.arrowspointingout-animate {
  animation: arrowspointingout-animate 0.6s ease-in-out;
}

@keyframes arrowspointingout-animate {
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
