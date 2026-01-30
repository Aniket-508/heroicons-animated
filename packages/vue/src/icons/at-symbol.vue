<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle ref="circleRef" cx="12" cy="12" r="4.5" />
      <path
        ref="pathRef"
        d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "AtSymbolIcon",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const circleRef = ref<SVGCircleElement>();
const pathRef = ref<SVGPathElement>();

let isControlled = false;
let circleAnimation: Animation | null = null;
let pathAnimation: Animation | null = null;

const startAnimation = () => {
  // Animate circle path drawing using Web Animations API
  if (circleRef.value) {
    const circleLength = circleRef.value.getTotalLength();
    circleRef.value.style.strokeDasharray = `${circleLength}`;
    circleRef.value.style.strokeDashoffset = `${circleLength}`;
    circleRef.value.style.opacity = "0";

    circleAnimation = circleRef.value.animate(
      [
        { strokeDashoffset: circleLength, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1 },
      ],
      {
        duration: 300,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );
  }

  // Animate path drawing with delay
  if (pathRef.value) {
    const pathLength = pathRef.value.getTotalLength();
    pathRef.value.style.strokeDasharray = `${pathLength}`;
    pathRef.value.style.strokeDashoffset = `${pathLength}`;
    pathRef.value.style.opacity = "0";

    setTimeout(() => {
      if (pathRef.value) {
        pathAnimation = pathRef.value.animate(
          [
            { strokeDashoffset: pathLength, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
          ],
          {
            duration: 300,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );
      }
    }, 300);
  }
};

const stopAnimation = () => {
  if (circleAnimation) {
    circleAnimation.cancel();
    circleAnimation = null;
  }

  if (pathAnimation) {
    pathAnimation.cancel();
    pathAnimation = null;
  }

  if (circleRef.value) {
    circleRef.value.style.strokeDasharray = "";
    circleRef.value.style.strokeDashoffset = "";
    circleRef.value.style.opacity = "1";
  }

  if (pathRef.value) {
    pathRef.value.style.strokeDasharray = "";
    pathRef.value.style.strokeDashoffset = "";
    pathRef.value.style.opacity = "1";
  }
};

const handleMouseEnter = () => {
  if (!isControlled) {
    startAnimation();
  }
};

const handleMouseLeave = () => {
  if (!isControlled) {
    stopAnimation();
  }
};

const setControlled = (value: boolean) => {
  isControlled = value;
};

defineExpose({
  startAnimation,
  stopAnimation,
  setControlled,
});
</script>
