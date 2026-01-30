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
    }, 800);
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
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
    <path
      class="magnifyingglassplus-vertical"
      class:magnifyingglassplus-draw={isAnimating}
      d="M10.5 7.5v6"
    />
    <path
      class="magnifyingglassplus-horizontal"
      class:magnifyingglassplus-draw={isAnimating}
      d="M7.5 10.5h6"
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

.magnifyingglassplus-vertical,
.magnifyingglassplus-horizontal {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.magnifyingglassplus-vertical.magnifyingglassplus-draw {
  animation: magnifyingglassplus-draw 0.2s ease-in-out 0.3s both;
}

.magnifyingglassplus-horizontal.magnifyingglassplus-draw {
  animation: magnifyingglassplus-draw 0.2s ease-in-out 0.6s both;
}

@keyframes magnifyingglassplus-draw {
  0% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
