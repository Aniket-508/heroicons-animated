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
    }, 1200);
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
    <g class="paperairplane-plane" class:paperairplane-plane-animate={isAnimating}>
      <path
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
    </g>
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

.paperairplane-plane {
  transform-box: fill-box;
  transform-origin: center;
}

.paperairplane-plane.paperairplane-plane-animate {
  animation: paperairplane-fly 1.2s ease-in-out forwards;
}

@keyframes paperairplane-fly {
  0% {
    transform: scale(1) translateX(0);
  }
  25% {
    transform: scale(0.8) translateX(-10%);
  }
  50% {
    transform: scale(1) translateX(125%);
  }
  75% {
    transform: scale(1) translateX(-150%);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}
</style>
