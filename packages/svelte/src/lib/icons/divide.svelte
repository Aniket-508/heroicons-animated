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
    }, 400);
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
      d="M4.49902 11.9983H19.4987"
      class="divide-line"
      class:divide-line-animate={isAnimating}
    />
    <g class="divide-top" class:divide-top-animate={isAnimating}>
      <path d="M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808Z" />
      <path
        d="M12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808Z"
      />
    </g>
    <g class="divide-bottom" class:divide-bottom-animate={isAnimating}>
      <path d="M11.9998 18.7509H12.0073V18.7584H11.9998V18.7509Z" />
      <path
        d="M12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z"
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

.divide-line {
  transform-origin: 50% 50%;
}

.divide-line.divide-line-animate {
  animation: divide-line 0.4s ease-in-out;
}

.divide-top,
.divide-bottom {
  transform-origin: 12px 50%;
}

.divide-top.divide-top-animate {
  animation: divide-top 0.4s ease-in-out;
}

.divide-bottom.divide-bottom-animate {
  animation: divide-bottom 0.4s ease-in-out;
}

@keyframes divide-line {
  0%, 100% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1.1);
  }
}

@keyframes divide-top {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
}

@keyframes divide-bottom {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
}
</style>
