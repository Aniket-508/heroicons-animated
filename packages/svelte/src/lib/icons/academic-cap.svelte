<script lang="ts">
export let size: number = 28;
const className = "";
export { className as class };

let isAnimating = false;
let isControlled = false;
let capGroup: SVGGElement;
let tasselGroup: SVGGElement;

export function startAnimation() {
  if (!isControlled) {
    isAnimating = true;
    capGroup?.classList.add("cap-animate");
    tasselGroup?.classList.add("tassel-animate");
    setTimeout(() => {
      isAnimating = false;
      capGroup?.classList.remove("cap-animate");
      tasselGroup?.classList.remove("tassel-animate");
    }, 600);
  }
}

export function stopAnimation() {
  isAnimating = false;
  capGroup?.classList.remove("cap-animate");
  tasselGroup?.classList.remove("tassel-animate");
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
    <g bind:this={capGroup} style="transform-origin: center center">
      <path
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
      />
    </g>
    <g bind:this={tasselGroup} style="transform-origin: 6.75px 14.25px">
      <path
        d="M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </g>
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

g {
  transform-box: fill-box;
}

g.cap-animate {
  animation: cap-animate 0.5s ease-in-out;
}

g.tassel-animate {
  animation: tassel-animate 0.6s ease-in-out;
}

@keyframes cap-animate {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-3px) rotate(-5deg);
  }
  66% {
    transform: translateY(-3px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

@keyframes tassel-animate {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
