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
    
    // Column 1
    line1?.animate([{ y2: 13.5 }, { y2: 10.5 }], defaultOptions);
    line2?.animate([{ y1: 16.5 }, { y1: 13.5 }], defaultOptions);
    circle1?.animate([{ cy: 15 }, { cy: 12 }], defaultOptions);
    
    // Column 2
    line3?.animate([{ y2: 7.5 }, { y2: 10.5 }], defaultOptions);
    line4?.animate([{ y1: 10.5 }, { y1: 13.5 }], defaultOptions);
    circle2?.animate([{ cy: 9 }, { cy: 12 }], defaultOptions);
    
    // Column 3
    line5?.animate([{ y2: 13.5 }, { y2: 10.5 }], defaultOptions);
    line6?.animate([{ y1: 16.5 }, { y1: 13.5 }], defaultOptions);
    circle3?.animate([{ cy: 15 }, { cy: 12 }], defaultOptions);
    
    setTimeout(() => {
      isAnimating = false;
    }, 300);
  }
}

export function stopAnimation() {
  isAnimating = false;
  
  // Column 1
  line1?.animate([{ y2: 10.5 }, { y2: 13.5 }], defaultOptions);
  line2?.animate([{ y1: 13.5 }, { y1: 16.5 }], defaultOptions);
  circle1?.animate([{ cy: 12 }, { cy: 15 }], defaultOptions);
  
  // Column 2
  line3?.animate([{ y2: 10.5 }, { y2: 7.5 }], defaultOptions);
  line4?.animate([{ y1: 13.5 }, { y1: 10.5 }], defaultOptions);
  circle2?.animate([{ cy: 12 }, { cy: 9 }], defaultOptions);
  
  // Column 3
  line5?.animate([{ y2: 10.5 }, { y2: 13.5 }], defaultOptions);
  line6?.animate([{ y1: 13.5 }, { y1: 16.5 }], defaultOptions);
  circle3?.animate([{ cy: 12 }, { cy: 15 }], defaultOptions);
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
    <line bind:this={line1} x1="6" x2="6" y1="3.75" y2="13.5" />
    <line bind:this={line2} x1="6" x2="6" y1="16.5" y2="20.25" />
    <circle bind:this={circle1} cx="6" cy="15" fill="none" r="1.5" />

    <line bind:this={line3} x1="12" x2="12" y1="3.75" y2="7.5" />
    <line bind:this={line4} x1="12" x2="12" y1="10.5" y2="20.25" />
    <circle bind:this={circle2} cx="12" cy="9" fill="none" r="1.5" />

    <line bind:this={line5} x1="18" x2="18" y1="3.75" y2="13.5" />
    <line bind:this={line6} x1="18" x2="18" y1="16.5" y2="20.25" />
    <circle bind:this={circle3} cx="18" cy="15" fill="none" r="1.5" />
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
