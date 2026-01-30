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
    }, 2000);
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
    <path
      d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
      class="cursor-rays-cursor"
      class:cursor-move={isAnimating}
    />
    <path d="M12 2.25V4.5" class="ray ray0" class:ray-spread={isAnimating} />
    <path d="M17.8336 4.66637L16.2426 6.25736" class="ray ray1" class:ray-spread={isAnimating} />
    <path d="M20.25 10.5H18" class="ray ray2" class:ray-spread={isAnimating} />
    <path d="M7.75736 14.7426L6.16637 16.3336" class="ray ray3" class:ray-spread={isAnimating} />
    <path d="M6 10.5H3.75" class="ray ray4" class:ray-spread={isAnimating} />
    <path d="M7.75736 6.25736L6.16637 4.66637" class="ray ray5" class:ray-spread={isAnimating} />
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

.cursor-rays-cursor.cursor-move {
  animation: cursor-rays-move 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes cursor-rays-move {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(0, -4px);
  }
  66% {
    transform: translate(-3px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

.ray {
  opacity: 1;
  transform: translate(0, 0);
}

.ray.ray-spread {
  animation: ray-spread 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s forwards;
  opacity: 0;
}

@keyframes ray-spread {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }
  14% {
    opacity: 1;
  }
  28% {
    opacity: 0;
    transform: translate(var(--ray-x, 0), var(--ray-y, 0));
  }
  100% {
    opacity: 0;
    transform: translate(0, 0);
  }
}

.ray0.ray-spread { --ray-x: 0; --ray-y: -2px; }
.ray1.ray-spread { --ray-x: 2px; --ray-y: -2px; }
.ray2.ray-spread { --ray-x: 2px; --ray-y: 0; }
.ray3.ray-spread { --ray-x: -2px; --ray-y: 2px; }
.ray4.ray-spread { --ray-x: -2px; --ray-y: 0; }
.ray5.ray-spread { --ray-x: -2px; --ray-y: -2px; }
</style>
