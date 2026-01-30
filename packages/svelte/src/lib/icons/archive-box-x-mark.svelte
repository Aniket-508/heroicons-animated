<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let isAnimating = false;
let isControlled = false;
let xMark1: SVGPathElement;
let xMark2: SVGPathElement;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    // Animate X marks with delays
    setTimeout(() => {
      xMark1?.classList.add("xmark-animate");
    }, 200);
    setTimeout(() => {
      xMark2?.classList.add("xmark-animate");
    }, 400);
    
    setTimeout(() => {
      isAnimating = false;
      xMark1?.classList.remove("xmark-animate");
      xMark2?.classList.remove("xmark-animate");
    }, 600);
  }
}

export function stopAnimation() {
  isAnimating = false;
  xMark1?.classList.remove("xmark-animate");
  xMark2?.classList.remove("xmark-animate");
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
      class="path-group"
      class:animate={isAnimating}
      d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
    />
    <path
      class="path-group"
      class:animate={isAnimating}
      d="M20.25 7.5L19.6246 18.1321"
    />
    <path
      class="path-group"
      class:animate={isAnimating}
      d="M3.75 7.5L4.37542 18.1321"
    />
    <path
      bind:this={xMark1}
      class="xmark-path"
      d="M9.75 11.625L14.25 16.125"
    />
    <path
      bind:this={xMark2}
      class="xmark-path"
      d="M14.25 11.625L9.75 16.125"
    />
    <path
      class="lid-group"
      class:animate={isAnimating}
      d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
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

.path-group {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.path-group.animate {
  animation: path-translate 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.lid-group {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.lid-group.animate {
  animation: lid-translate 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.xmark-path {
  opacity: 1;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: opacity 0.3s, stroke-dashoffset 0.3s;
}

.xmark-path.xmark-animate {
  animation: xmark-draw 0.3s ease-out forwards;
}

@keyframes path-translate {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(1px);
  }
}

@keyframes lid-translate {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1.5px);
  }
}

@keyframes xmark-draw {
  0% {
    opacity: 0;
    stroke-dashoffset: 1000;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
</style>
