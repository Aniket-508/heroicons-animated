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
    <path
      d="M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z"
      class="ellipsishorizontal-dot"
      class:ellipsishorizontal-pulse={isAnimating}
    />
    <path
      d="M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z"
      class="ellipsishorizontal-dot"
      class:ellipsishorizontal-pulse={isAnimating}
    />
    <path
      d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z"
      class="ellipsishorizontal-dot"
      class:ellipsishorizontal-pulse={isAnimating}
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
}

.ellipsishorizontal-dot {
  transform-origin: 50% 50%;
}

.ellipsishorizontal-dot.ellipsishorizontal-pulse {
  animation: ellipsishorizontal-pulse 0.4s ease-in-out forwards;
}
.ellipsishorizontal-dot:nth-child(1).ellipsishorizontal-pulse {
  animation-delay: 0s;
}
.ellipsishorizontal-dot:nth-child(2).ellipsishorizontal-pulse {
  animation-delay: 0.05s;
}
.ellipsishorizontal-dot:nth-child(3).ellipsishorizontal-pulse {
  animation-delay: 0.1s;
}

@keyframes ellipsishorizontal-pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
}
</style>
