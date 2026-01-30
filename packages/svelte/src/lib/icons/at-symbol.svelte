<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let circleElement: SVGCircleElement;
let pathElement: SVGPathElement;
let circleAnimation: Animation | null = null;
let pathAnimation: Animation | null = null;
let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    // Animate circle path drawing using Web Animations API
    if (circleElement) {
      const circleLength = circleElement.getTotalLength();
      circleElement.style.strokeDasharray = `${circleLength}`;
      circleElement.style.strokeDashoffset = `${circleLength}`;
      circleElement.style.opacity = "0";
      
      circleAnimation = circleElement.animate(
        [
          { strokeDashoffset: circleLength, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        {
          duration: 300,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
    
    // Animate path drawing with delay
    if (pathElement) {
      const pathLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${pathLength}`;
      pathElement.style.strokeDashoffset = `${pathLength}`;
      pathElement.style.opacity = "0";
      
      setTimeout(() => {
        if (pathElement) {
          pathAnimation = pathElement.animate(
            [
              { strokeDashoffset: pathLength, opacity: 0 },
              { strokeDashoffset: 0, opacity: 1 },
            ],
            {
              duration: 300,
              easing: "ease-in-out",
              fill: "forwards",
            }
          );
        }
      }, 300);
    }
    
    setTimeout(() => {
      isAnimating = false;
    }, 600);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  if (circleAnimation) {
    circleAnimation.cancel();
    circleAnimation = null;
  }
  
  if (pathAnimation) {
    pathAnimation.cancel();
    pathAnimation = null;
  }
  
  if (circleElement) {
    circleElement.style.strokeDasharray = "";
    circleElement.style.strokeDashoffset = "";
    circleElement.style.opacity = "1";
  }
  
  if (pathElement) {
    pathElement.style.strokeDasharray = "";
    pathElement.style.strokeDashoffset = "";
    pathElement.style.opacity = "1";
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
    <circle bind:this={circleElement} cx="12" cy="12" r="4.5" />
    <path
      bind:this={pathElement}
      d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
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
</style>
