<template>
  <div
    v-bind="$attrs"
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
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
      <Motion is="path" ref="leftBarRef" d="M15.75 5.25v13.5" />
      <Motion is="path" ref="rightBarRef" d="M8.25 5.25v13.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "PauseIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const baseTransition = {
  times: [0, 0.2, 0.5, 1],
  duration: 0.5,
  ease: "easeInOut",
};

const leftBarVariants = {
  normal: { y: 0 },
  animate: {
    y: [0, 0, 2, 0],
    transition: baseTransition,
  },
};

const rightBarVariants = {
  normal: { y: 0 },
  animate: {
    y: [0, 2, 0, 0],
    transition: baseTransition,
  },
};

const leftBarRef = ref<SVGPathElement | null>();
const rightBarRef = ref<SVGPathElement | null>();
const leftBarMotion = useMotion(leftBarRef, {
  initial: leftBarVariants.normal,
  enter: leftBarVariants.normal,
});
const rightBarMotion = useMotion(rightBarRef, {
  initial: rightBarVariants.normal,
  enter: rightBarVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  leftBarMotion.apply(leftBarVariants.animate);
  rightBarMotion.apply(rightBarVariants.animate);
};

const stopAnimation = () => {
  leftBarMotion.apply(leftBarVariants.normal);
  rightBarMotion.apply(rightBarVariants.normal);
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
