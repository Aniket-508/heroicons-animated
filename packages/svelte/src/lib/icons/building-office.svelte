<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

const FLOOR_LINES = [
  { path: "M9 12.75h1.5", y: 12.75, index: 0 },
  { path: "M13.5 12.75H15", y: 12.75, index: 0 },
  { path: "M9 9.75h1.5", y: 9.75, index: 1 },
  { path: "M13.5 9.75H15", y: 9.75, index: 1 },
  { path: "M9 6.75h1.5", y: 6.75, index: 2 },
  { path: "M13.5 6.75H15", y: 6.75, index: 2 },
];

let floorPath1: SVGPathElement;
let floorPath2: SVGPathElement;
let floorPath3: SVGPathElement;
let floorPath4: SVGPathElement;
let floorPath5: SVGPathElement;
let floorPath6: SVGPathElement;
let floorAnimations: (Animation | null)[] = [null, null, null, null, null, null];
let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    const floorPaths = [floorPath1, floorPath2, floorPath3, floorPath4, floorPath5, floorPath6];
    floorPaths.forEach((path, i) => {
      if (path) {
        path.style.opacity = "0";
        floorAnimations[i] = path.animate(
          [
            { opacity: 0 },
            { opacity: 1 },
          ],
          {
            duration: 300,
            delay: 100 + FLOOR_LINES[i].index * 150,
            easing: "linear",
            fill: "forwards",
          }
        );
      }
    });
    
    setTimeout(() => {
      isAnimating = false;
    }, 550);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  const floorPaths = [floorPath1, floorPath2, floorPath3, floorPath4, floorPath5, floorPath6];
  floorAnimations.forEach((anim, index) => {
    if (anim) {
      anim.cancel();
      floorAnimations[index] = null;
    }
    if (floorPaths[index]) {
      floorPaths[index].style.opacity = "";
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
      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
    />
    <path bind:this={floorPath1} d="M9 12.75h1.5" />
    <path bind:this={floorPath2} d="M13.5 12.75H15" />
    <path bind:this={floorPath3} d="M9 9.75h1.5" />
    <path bind:this={floorPath4} d="M13.5 9.75H15" />
    <path bind:this={floorPath5} d="M9 6.75h1.5" />
    <path bind:this={floorPath6} d="M13.5 6.75H15" />
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
