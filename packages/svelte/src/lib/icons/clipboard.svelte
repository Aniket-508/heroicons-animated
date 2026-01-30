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
    }, 300);
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
      class="clip-path"
      class:clipboard-animate={isAnimating}
      d="M15.6657 3.88789C15.3991 2.94272 14.5305 2.25 13.5 2.25H10.5C9.46954 2.25 8.60087 2.94272 8.33426 3.88789M15.6657 3.88789C15.7206 4.0825 15.75 4.28782 15.75 4.5V4.5C15.75 4.91421 15.4142 5.25 15 5.25H9C8.58579 5.25 8.25 4.91421 8.25 4.5V4.5C8.25 4.28782 8.27937 4.0825 8.33426 3.88789"
    />
    <path
      class="board-path"
      class:clipboard-animate={isAnimating}
      d="M15.6657 3.88789C16.3119 3.93668 16.9545 3.99828 17.5933 4.07241C18.6939 4.20014 19.5 5.149 19.5 6.25699V19.5C19.5 20.7426 18.4926 21.75 17.25 21.75H6.75C5.50736 21.75 4.5 20.7426 4.5 19.5V6.25699C4.5 5.149 5.30608 4.20014 6.40668 4.07241C7.04547 3.99828 7.68808 3.93668 8.33426 3.88789"
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

/* clip: scaleY [1,0.8,1] y [0,0.5,0] 0.3s easeInOut origin 50% 0%; board: y [0,-0.5,0] 0.3s (matches React CLIP/BOARD_VARIANTS) */
.clip-path {
  transform-box: fill-box;
  transform-origin: 50% 0%;
}

.clip-path.clipboard-animate {
  animation: clip-animate 0.3s ease-in-out forwards;
}

.board-path.clipboard-animate {
  animation: board-animate 0.3s ease-in-out forwards;
}

@keyframes clip-animate {
  0% {
    transform: scaleY(1) translateY(0);
  }
  50% {
    transform: scaleY(0.8) translateY(0.5px);
  }
  100% {
    transform: scaleY(1) translateY(0);
  }
}

@keyframes board-animate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.5px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
