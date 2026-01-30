<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let isAnimating = false;
let isControlled = false;
let line1: SVGLineElement;
let line2: SVGLineElement;
let circle1: SVGCircleElement;
let line3: SVGLineElement;
let line4: SVGLineElement;
let circle2: SVGCircleElement;
let line5: SVGLineElement;
let line6: SVGLineElement;
let circle3: SVGCircleElement;

const defaultOptions = {
  duration: 300,
  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Approximate spring
};

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    
    // Row 1
    line1?.animate([{ x1: 10.5 }, { x1: 13.5 }], defaultOptions);
    line2?.animate([{ x2: 7.5 }, { x2: 10.5 }], defaultOptions);
    circle1?.animate([{ cx: 9 }, { cx: 12 }], defaultOptions);
    
    // Row 2
    line3?.animate([{ x1: 16.5 }, { x1: 13.5 }], defaultOptions);
    line4?.animate([{ x2: 13.5 }, { x2: 10.5 }], defaultOptions);
    circle2?.animate([{ cx: 15 }, { cx: 12 }], defaultOptions);
    
    // Row 3
    line5?.animate([{ x1: 10.5 }, { x1: 13.5 }], defaultOptions);
    line6?.animate([{ x2: 7.5 }, { x2: 10.5 }], defaultOptions);
    circle3?.animate([{ cx: 9 }, { cx: 12 }], defaultOptions);
    
    setTimeout(() => {
      isAnimating = false;
    }, 300);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  // Row 1
  line1?.animate([{ x1: 13.5 }, { x1: 10.5 }], defaultOptions);
  line2?.animate([{ x2: 10.5 }, { x2: 7.5 }], defaultOptions);
  circle1?.animate([{ cx: 12 }, { cx: 9 }], defaultOptions);
  
  // Row 2
  line3?.animate([{ x1: 13.5 }, { x1: 16.5 }], defaultOptions);
  line4?.animate([{ x2: 10.5 }, { x2: 13.5 }], defaultOptions);
  circle2?.animate([{ cx: 12 }, { cx: 15 }], defaultOptions);
  
  // Row 3
  line5?.animate([{ x1: 13.5 }, { x1: 10.5 }], defaultOptions);
  line6?.animate([{ x2: 10.5 }, { x2: 7.5 }], defaultOptions);
  circle3?.animate([{ cx: 12 }, { cx: 9 }], defaultOptions);
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
    <line bind:this={line1} x1="10.5" x2="20.25" y1="6" y2="6" />
    <line bind:this={line2} x1="3.75" x2="7.5" y1="6" y2="6" />
    <circle bind:this={circle1} cx="9" cy="6" fill="none" r="1.5" />

    <line bind:this={line3} x1="16.5" x2="20.25" y1="12" y2="12" />
    <line bind:this={line4} x1="3.75" x2="13.5" y1="12" y2="12" />
    <circle bind:this={circle2} cx="15" cy="12" fill="none" r="1.5" />

    <line bind:this={line5} x1="10.5" x2="20.25" y1="18" y2="18" />
    <line bind:this={line6} x1="3.75" x2="7.5" y1="18" y2="18" />
    <circle bind:this={circle3} cx="9" cy="18" fill="none" r="1.5" />
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
