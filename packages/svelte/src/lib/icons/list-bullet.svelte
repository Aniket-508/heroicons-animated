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
    <g class="listbullet-item" class:listbullet-animate={isAnimating}>
      <path
        class="listbullet-bullet listbullet-bullet-0"
        d="M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75Z"
      />
      <path
        class="listbullet-line listbullet-line-0"
        d="M8.25 6.75H20.25"
      />
    </g>
    <g class="listbullet-item" class:listbullet-animate={isAnimating}>
      <path
        class="listbullet-bullet listbullet-bullet-1"
        d="M3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12Z"
      />
      <path
        class="listbullet-line listbullet-line-1"
        d="M8.25 12H20.25"
      />
    </g>
    <g class="listbullet-item" class:listbullet-animate={isAnimating}>
      <path
        class="listbullet-bullet listbullet-bullet-2"
        d="M3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z"
      />
      <path
        class="listbullet-line listbullet-line-2"
        d="M8.25 17.25H20.25"
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

.listbullet-bullet {
  opacity: 1;
}

.listbullet-line {
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  opacity: 1;
}

.listbullet-item.listbullet-animate .listbullet-bullet-0 {
  animation: listbullet-bullet 0.1s ease-in-out 0s forwards;
}
.listbullet-item.listbullet-animate .listbullet-line-0 {
  animation: listbullet-line 0.3s ease-in-out 0.1s forwards;
}
.listbullet-item.listbullet-animate .listbullet-bullet-1 {
  animation: listbullet-bullet 0.1s ease-in-out 0.4s forwards;
}
.listbullet-item.listbullet-animate .listbullet-line-1 {
  animation: listbullet-line 0.3s ease-in-out 0.5s forwards;
}
.listbullet-item.listbullet-animate .listbullet-bullet-2 {
  animation: listbullet-bullet 0.1s ease-in-out 0.8s forwards;
}
.listbullet-item.listbullet-animate .listbullet-line-2 {
  animation: listbullet-line 0.3s ease-in-out 0.9s forwards;
}

@keyframes listbullet-bullet {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes listbullet-line {
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
