<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let pathElement: SVGPathElement;
let pathAnimation: Animation | null = null;
let isAnimating = false;
let isControlled = false;

// Must match React PATH_VARIANTS exactly: pathLength [0,1], opacity [0,1], scale [0.5,1], duration 0.4s
export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;

    if (pathElement) {
      const len = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${len}`;
      pathElement.style.strokeDashoffset = `${len}`;
      pathElement.style.opacity = "0";
      pathElement.style.transform = "scale(0.5)";
      pathElement.style.transformOrigin = "center";

      pathAnimation = pathElement.animate(
        [
          {
            strokeDashoffset: len,
            opacity: 0,
            transform: "scale(0.5)",
          },
          {
            strokeDashoffset: 0,
            opacity: 1,
            transform: "scale(1)",
          },
        ],
        {
          duration: 400,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    }

    setTimeout(() => {
      isAnimating = false;
    }, 400);
  }
}

export function stopAnimation() {
  isAnimating = false;

  if (pathAnimation) {
    pathAnimation.cancel();
    pathAnimation = null;
  }

  if (pathElement) {
    pathElement.style.strokeDasharray = "";
    pathElement.style.strokeDashoffset = "";
    pathElement.style.opacity = "";
    pathElement.style.transform = "";
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
    <path bind:this={pathElement} d="m4.5 12.75 6 6 9-13.5" />
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

.icon-svg path {
  transform-box: fill-box;
  transform-origin: center;
}
</style>
