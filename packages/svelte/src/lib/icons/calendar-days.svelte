<script lang="ts">
export let size: number = 28;
export let className = "";
export { className as class };

const DOTS = [
  { d: "M12 12.75h.008v.008H12v-.008Z", index: 0 },
  { d: "M14.25 12.75h.008v.008h-.008v-.008Z", index: 1 },
  { d: "M16.5 12.75h.008v.008H16.5v-.008Z", index: 2 },
  { d: "M7.5 15h.008v.008H7.5V15Z", index: 3 },
  { d: "M9.75 15h.008v.008H9.75V15Z", index: 4 },
  { d: "M12 15h.008v.008H12V15Z", index: 5 },
  { d: "M14.25 15h.008v.008h-.008V15Z", index: 6 },
  { d: "M16.5 15h.008v.008H16.5V15Z", index: 7 },
  { d: "M7.5 17.25h.008v.008H7.5v-.008Z", index: 8 },
  { d: "M9.75 17.25h.008v.008H9.75v-.008Z", index: 9 },
  { d: "M12 17.25h.008v.008H12v-.008Z", index: 10 },
  { d: "M14.25 17.25h.008v.008h-.008v-.008Z", index: 11 },
];

let isAnimating = false;
let isControlled = false;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    setTimeout(() => {
      isAnimating = false;
    }, 1500);
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
    {#each DOTS as dot}
      <path
        class="calendar-dot"
        class:animate={isAnimating}
        style="animation-delay: {dot.index * 0.1}s"
        d={dot.d}
      />
    {/each}
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

.calendar-dot {
  transform-box: fill-box;
  transform-origin: center;
}

.calendar-dot.animate {
  animation: dot-pulse 0.4s ease-out forwards;
}

@keyframes dot-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
