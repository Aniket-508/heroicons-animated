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
    <g class="top-left-group" class:animate={isAnimating}>
      <path d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75" />
    </g>
    <g class="bottom-left-group" class:animate={isAnimating}>
      <path d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25" />
    </g>
    <g class="top-right-group" class:animate={isAnimating}>
      <path d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25" />
    </g>
    <g class="bottom-right-group" class:animate={isAnimating}>
      <path d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
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

.top-left-group,
.bottom-left-group,
.top-right-group,
.bottom-right-group {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.5s ease-in-out;
}

.top-left-group.animate {
  animation: top-left-move 0.5s ease-in-out forwards;
}

.bottom-left-group.animate {
  animation: bottom-left-move 0.5s ease-in-out forwards;
}

.top-right-group.animate {
  animation: top-right-move 0.5s ease-in-out forwards;
}

.bottom-right-group.animate {
  animation: bottom-right-move 0.5s ease-in-out forwards;
}

@keyframes top-left-move {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes bottom-left-move {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes top-right-move {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(-2px, 2px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes bottom-right-move {
  0% {
    transform: translate(0, 0);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
