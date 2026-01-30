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
    class:lockclosed-shake={isAnimating}
  >
    <path
      class="lockclosed-shackle"
      class:lockclosed-shackle-bounce={isAnimating}
      d="M16.5 10.5V6.75C16.5 4.26472 14.4853 2.25 12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75V10.5"
    />
    <path
      d="M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z"
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

.icon-svg.lockclosed-shake {
  animation: lockclosed-shake 0.5s ease-in-out forwards;
}

.lockclosed-shackle.lockclosed-shackle-bounce {
  animation: lockclosed-shackle-bounce 0.3s ease-in-out forwards;
}

@keyframes lockclosed-shake {
  0% {
    transform: rotate(0deg) scale(1);
  }
  20% {
    transform: rotate(-3deg) scale(1.02);
  }
  40% {
    transform: rotate(2deg) scale(0.98);
  }
  60% {
    transform: rotate(-2deg) scale(1);
  }
  80% {
    transform: rotate(1deg) scale(1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

@keyframes lockclosed-shackle-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1px);
  }
}
</style>
