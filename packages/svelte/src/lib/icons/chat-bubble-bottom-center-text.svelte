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
      class="text-line text-line-1"
      class:text-line-animate={isAnimating}
      d="M7.5 8.25h9"
    />
    <path
      class="text-line text-line-2"
      class:text-line-animate={isAnimating}
      style="animation-delay: 0.1s"
      d="M7.5 11.25H12"
    />
    <path
      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
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

/* 2 lines: pathLength 1→0→1, opacity 1→0→1, delays 0 and 0.1s, duration 0.3 each phase (matches React LINE_VARIANTS blink) */
.text-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.text-line.text-line-animate {
  animation: text-line-blink 0.8s ease-out forwards;
}

.text-line-2.text-line-animate {
  animation-delay: 0.1s;
}

@keyframes text-line-blink {
  0% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  37.5% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  75% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
