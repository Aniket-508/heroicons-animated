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
      class="chevron-path chevron-up"
      class:chevron-animate={isAnimating}
      d="M8.25 9 12 5.25 15.75 9"
    />
    <path
      class="chevron-path chevron-down"
      class:chevron-animate={isAnimating}
      d="M8.25 15 12 18.75 15.75 15"
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

.chevron-up.chevron-animate {
  animation: chevron-up-animate 0.5s ease-out forwards;
}

.chevron-down.chevron-animate {
  animation: chevron-down-animate 0.5s ease-out forwards;
}

@keyframes chevron-up-animate {
  0% { transform: translateY(0); }
  40% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
}

@keyframes chevron-down-animate {
  0% { transform: translateY(0); }
  40% { transform: translateY(2px); }
  100% { transform: translateY(0); }
}
</style>
