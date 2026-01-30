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
    }, 700);
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
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
    <path
      d="M9 16.5v.75"
      class="docchartbar-bar"
      class:docchartbar-animate={isAnimating}
      style="animation-delay: 0s"
    />
    <path
      d="M12 14.25v3"
      class="docchartbar-bar"
      class:docchartbar-animate={isAnimating}
      style="animation-delay: 0.15s"
    />
    <path
      d="M15 12v5.25"
      class="docchartbar-bar"
      class:docchartbar-animate={isAnimating}
      style="animation-delay: 0.3s"
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

.docchartbar-bar {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.docchartbar-bar.docchartbar-animate {
  animation: docchartbar-draw 0.4s ease-out forwards;
  stroke-dashoffset: 1;
  opacity: 0;
}

@keyframes docchartbar-draw {
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
