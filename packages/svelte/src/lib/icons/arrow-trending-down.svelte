<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let svgElement: SVGSVGElement;
let pathElement: SVGPathElement;
let arrowElement: SVGPathElement;
let pathAnimation: Animation | null = null;
let arrowAnimation: Animation | null = null;
let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    // Animate path drawing using Web Animations API
    if (pathElement) {
      const pathLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${pathLength}`;
      pathElement.style.strokeDashoffset = `${pathLength}`;
      pathElement.style.opacity = "0";
      
      pathAnimation = pathElement.animate(
        [
          { strokeDashoffset: pathLength, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        {
          duration: 400,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
    
    // Animate arrow path drawing with delay
    if (arrowElement) {
      const arrowLength = arrowElement.getTotalLength();
      arrowElement.style.strokeDasharray = `${arrowLength}`;
      arrowElement.style.strokeDashoffset = `${arrowLength * 0.5}`;
      arrowElement.style.opacity = "0";
      
      setTimeout(() => {
        if (arrowElement) {
          arrowAnimation = arrowElement.animate(
            [
              { strokeDashoffset: arrowLength * 0.5, opacity: 0 },
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
    }, 500);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  if (pathAnimation) {
    pathAnimation.cancel();
    pathAnimation = null;
  }
  
  if (arrowAnimation) {
    arrowAnimation.cancel();
    arrowAnimation = null;
  }
  
  if (pathElement) {
    pathElement.style.strokeDasharray = "";
    pathElement.style.strokeDashoffset = "";
    pathElement.style.opacity = "1";
  }
  
  if (arrowElement) {
    arrowElement.style.strokeDasharray = "";
    arrowElement.style.strokeDashoffset = "";
    arrowElement.style.opacity = "1";
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
    bind:this={svgElement}
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
    class:animate={isAnimating}
  >
    <path
      bind:this={pathElement}
      d="M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919"
    />
    <path
      bind:this={arrowElement}
      d="M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099"
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
  transition: transform 0.5s ease-in-out;
}

.icon-svg.animate {
  animation: svg-translate 0.5s ease-in-out forwards;
}

@keyframes svg-translate {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
