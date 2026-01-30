<script lang="ts">
export let size: number = 28;
export let className = "";
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
  ...$$restProps
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
    <path d="M15.75 5.25v13.5" class="pause-left" class:pause-left-animate={isAnimating} />
    <path d="M8.25 5.25v13.5" class="pause-right" class:pause-right-animate={isAnimating} />
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

.pause-left,
.pause-right {
  transform-box: fill-box;
  transform-origin: center;
}

.pause-left.pause-left-animate {
  animation: pause-left-bounce 0.5s ease-in-out forwards;
}

.pause-right.pause-right-animate {
  animation: pause-right-bounce 0.5s ease-in-out forwards;
}

@keyframes pause-left-bounce {
  0%, 20% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes pause-right-bounce {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(2px);
  }
  50%, 100% {
    transform: translateY(0);
  }
}
</style>
