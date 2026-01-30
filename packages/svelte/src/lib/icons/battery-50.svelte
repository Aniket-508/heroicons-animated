<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

const clipId = `battery-clip-${Math.random().toString(36).substr(2, 9)}`;

let clipRect: SVGRectElement;
let clipAnimation: Animation | null = null;
let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    if (clipRect) {
      clipAnimation = clipRect.animate(
        [
          { width: 0 },
          { width: 6.75 },
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
  
  if (clipAnimation) {
    clipAnimation.cancel();
    clipAnimation = null;
  }
  
  if (clipRect) {
    clipRect.setAttribute("width", "0");
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
    <defs>
      <clipPath id={clipId}>
        <rect bind:this={clipRect} height="4.5" x="4.5" y="10.5" width="0" />
      </clipPath>
    </defs>
    <path
      d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21"
    />
    <path
      d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
    />
    <path d="M4.5 10.5h6.75V15H4.5v-4.5Z" />
    <path
      clip-path={`url(#${clipId})`}
      d="M4.5 10.5h6.75V15H4.5v-4.5Z"
      fill="currentColor"
      stroke="none"
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
