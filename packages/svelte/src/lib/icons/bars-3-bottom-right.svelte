<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let topBarPath: SVGPathElement;
let middleBarPath: SVGPathElement;
let bottomBarPath: SVGPathElement;
let bottomBarAnimation: Animation | null = null;
let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    // Animate pathLength and pathOffset using Web Animations API
    if (bottomBarPath) {
      const pathLength = bottomBarPath.getTotalLength();
      bottomBarPath.style.strokeDasharray = `${pathLength}`;
      bottomBarPath.style.strokeDashoffset = "0";
      
      bottomBarAnimation = bottomBarPath.animate(
        [
          { strokeDashoffset: 0 },
          { strokeDashoffset: pathLength * 0.5 },
          { strokeDashoffset: 0 },
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          delay: 150,
          fill: "forwards",
        }
      );
    }
    
    setTimeout(() => {
      isAnimating = false;
    }, 650);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  if (bottomBarAnimation) {
    bottomBarAnimation.cancel();
    bottomBarAnimation = null;
  }
  
  if (bottomBarPath) {
    bottomBarPath.style.strokeDasharray = "";
    bottomBarPath.style.strokeDashoffset = "";
  }
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
    <path bind:this={topBarPath} class="top-bar" class:animate={isAnimating} d="M3.75 6.75h16.5" />
    <path bind:this={middleBarPath} class="middle-bar" class:animate={isAnimating} d="M3.75 12h16.5" />
    <path bind:this={bottomBarPath} class="bottom-bar" class:animate={isAnimating} d="M12 17.25h8.25" />
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

.top-bar,
.middle-bar,
.bottom-bar {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.4s ease-in-out;
}

.top-bar.animate {
  animation: slide-right 0.4s ease-in-out forwards;
}

.middle-bar.animate {
  animation: slide-right 0.4s ease-in-out 0.05s forwards;
}

.bottom-bar.animate {
  animation: slide-right-short 0.5s ease-in-out 0.15s forwards;
}

@keyframes slide-right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-right-short {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
