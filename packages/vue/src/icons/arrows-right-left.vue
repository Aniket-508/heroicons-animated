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
      <Motion is="g" ref="leftArrowRef">
        <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5" />
      </Motion>
      <Motion is="g" ref="rightArrowRef">
        <path d="M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </Motion>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArrowsRightLeftIcon",
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

const leftArrowVariants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const rightArrowVariants = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const leftArrowRef = ref();
const rightArrowRef = ref();

const leftArrowMotion = useMotion(leftArrowRef, {
  initial: leftArrowVariants.normal,
  enter: leftArrowVariants.normal,
});

const rightArrowMotion = useMotion(rightArrowRef, {
  initial: rightArrowVariants.normal,
  enter: rightArrowVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  leftArrowMotion.apply(leftArrowVariants.animate);
  rightArrowMotion.apply(rightArrowVariants.animate);
};

const stopAnimation = () => {
  leftArrowMotion.apply(leftArrowVariants.normal);
  rightArrowMotion.apply(rightArrowVariants.normal);
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
