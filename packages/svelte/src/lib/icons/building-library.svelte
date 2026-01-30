<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let dotPath: SVGPathElement;
let pillarPath1: SVGPathElement;
let pillarPath2: SVGPathElement;
let pillarPath3: SVGPathElement;
let dotAnimation: Animation | null = null;
let pillarAnimations: (Animation | null)[] = [null, null, null];
let isAnimating = false;
let isControlled = false;

const PILLARS = [
  { d: "M8.25 12.75v8.25", index: 0 },
  { d: "M12 12.75v8.25", index: 1 },
  { d: "M15.75 12.75v8.25", index: 2 },
];

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    // Animate dot opacity
    if (dotPath) {
      dotPath.style.opacity = "0";
      dotAnimation = dotPath.animate(
        [
          { opacity: 0 },
          { opacity: 1 },
        ],
        {
          duration: 100,
          delay: 100,
          fill: "forwards",
        }
      );
    }
    
    // Animate pillars with staggered delays
    const pillarPaths = [pillarPath1, pillarPath2, pillarPath3];
    pillarPaths.forEach((path, index) => {
      if (path) {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;
        path.style.opacity = "0";
        
        pillarAnimations[index] = path.animate(
          [
            { strokeDashoffset: pathLength, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
          ],
          {
            duration: 300,
            delay: 200 + PILLARS[index].index * 150,
            easing: "linear",
            fill: "forwards",
          }
        );
      }
    });
    
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  if (dotAnimation) {
    dotAnimation.cancel();
    dotAnimation = null;
  }
  
  if (dotPath) {
    dotPath.style.opacity = "";
  }
  
  const pillarPaths = [pillarPath1, pillarPath2, pillarPath3];
  pillarAnimations.forEach((anim, index) => {
    if (anim) {
      anim.cancel();
      pillarAnimations[index] = null;
    }
    if (pillarPaths[index]) {
      pillarPaths[index].style.strokeDasharray = "";
      pillarPaths[index].style.strokeDashoffset = "";
      pillarPaths[index].style.opacity = "";
    }
  });
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
      d="M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18"
    />
    <path bind:this={dotPath} d="M12 6.75h.008v.008H12V6.75Z" />
    <path bind:this={pillarPath1} d="M8.25 12.75v8.25" />
    <path bind:this={pillarPath2} d="M12 12.75v8.25" />
    <path bind:this={pillarPath3} d="M15.75 12.75v8.25" />
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
