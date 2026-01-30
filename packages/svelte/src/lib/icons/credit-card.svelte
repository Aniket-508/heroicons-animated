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
      d="M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
    />
    <path
      d="M5.25 14.25h6"
      class="creditcard-line creditcard-line1"
      class:creditcard-animate={isAnimating}
    />
    <path
      d="M5.25 16.5h3"
      class="creditcard-line creditcard-line2"
      class:creditcard-animate={isAnimating}
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

.creditcard-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

/* Phase 1: hide (pathLength 0, opacity 0). Phase 2: show (pathLength 1, opacity 1). Delay i*0.1, duration 0.3s each. */
.creditcard-line.creditcard-line1.creditcard-animate {
  animation: creditcard-seq1 0.8s ease-out forwards;
}

.creditcard-line.creditcard-line2.creditcard-animate {
  animation: creditcard-seq2 0.8s ease-out forwards;
}

/* Line 1: hide 0–0.3s, show 0.4–0.7s. Line 2: hide 0.1–0.4s, show 0.5–0.8s (delay i*0.1, duration 0.3). */
@keyframes creditcard-seq1 {
  0% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  37.5% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  50% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  87.5% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes creditcard-seq2 {
  0%,
  12.5% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
  50% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  62.5% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
