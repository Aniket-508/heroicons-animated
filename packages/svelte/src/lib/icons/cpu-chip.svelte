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
    <path d="M8.25 3V4.5" class="pin-y" class:pin-y-animate={isAnimating} />
    <path d="M12 3V4.5" class="pin-y" class:pin-y-animate={isAnimating} />
    <path d="M15.75 3V4.5" class="pin-y" class:pin-y-animate={isAnimating} />
    <path d="M4.5 8.25H3" class="pin-x" class:pin-x-animate={isAnimating} />
    <path d="M4.5 12H3" class="pin-x" class:pin-x-animate={isAnimating} />
    <path d="M4.5 15.75H3" class="pin-x" class:pin-x-animate={isAnimating} />
    <path d="M21 8.25H19.5" class="pin-x" class:pin-x-animate={isAnimating} />
    <path d="M21 12H19.5" class="pin-x" class:pin-x-animate={isAnimating} />
    <path d="M21 15.75H19.5" class="pin-x" class:pin-x-animate={isAnimating} />
    <path d="M8.25 19.5V21" class="pin-y" class:pin-y-animate={isAnimating} />
    <path d="M12 19.5V21" class="pin-y" class:pin-y-animate={isAnimating} />
    <path d="M15.75 19.5V21" class="pin-y" class:pin-y-animate={isAnimating} />
    <path
      d="M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z"
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

.pin-y,
.pin-x {
  opacity: 1;
}

.pin-y.pin-y-animate {
  animation: pin-y-animate 0.5s ease-in-out;
}

.pin-x.pin-x-animate {
  animation: pin-x-animate 0.5s ease-in-out;
}

@keyframes pin-y-animate {
  0%,
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
  50% {
    transform: scaleY(1.5);
    opacity: 0.8;
  }
}

@keyframes pin-x-animate {
  0%,
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(1.5);
    opacity: 0.8;
  }
}
</style>
