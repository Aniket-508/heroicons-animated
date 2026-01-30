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
      d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
    />
    <path d="M6 7.5h3v3H6v-3Z" class="newspaper-square" class:newspaper-square-animate={isAnimating} />
    <path d="M12 7.5h1.5" class="newspaper-line" class:newspaper-line1-animate={isAnimating} />
    <path d="M12 10.5h1.5" class="newspaper-line" class:newspaper-line2-animate={isAnimating} />
    <path d="M6 13.5h7.5" class="newspaper-line" class:newspaper-line3-animate={isAnimating} />
    <path d="M6 16.5h7.5" class="newspaper-line" class:newspaper-line4-animate={isAnimating} />
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

.newspaper-square {
  opacity: 1;
}

.newspaper-square.newspaper-square-animate {
  animation: newspaper-square-fade 0.3s ease-out forwards;
}

@keyframes newspaper-square-fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.newspaper-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.newspaper-line.newspaper-line1-animate {
  animation: newspaper-line-draw 0.2s ease-out 0.2s forwards;
}

.newspaper-line.newspaper-line2-animate {
  animation: newspaper-line-draw 0.2s ease-out 0.3s forwards;
}

.newspaper-line.newspaper-line3-animate {
  animation: newspaper-line-draw 0.2s ease-out 0.4s forwards;
}

.newspaper-line.newspaper-line4-animate {
  animation: newspaper-line-draw 0.2s ease-out 0.5s forwards;
}

@keyframes newspaper-line-draw {
  0% {
    stroke-dashoffset: 1;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}
</style>
