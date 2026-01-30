<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
    }, 200);
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
    <g class="path-group" class:animate={isAnimating}>
      <path
        d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
      />
      <path d="M20.25 7.5L19.6246 18.1321" />
      <path d="M3.75 7.5L4.37542 18.1321" />
      <path d="M9.99976 11.25H13.9998" />
    </g>
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
</style>
