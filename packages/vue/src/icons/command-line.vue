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
      <path
        d="M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z"
      />
      <path d="M6.75 7.5L9.75 9.75L6.75 12" />
      <Motion is="path" ref="lineRef" d="M11.25 12H14.25" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CommandLineIcon",
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

// Match React TEXT_VARIANTS: cursor blink on the line path
const textVariants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
    },
  },
};

const lineRef = ref<SVGPathElement | null>();
const motionInstance = useMotion(lineRef, {
  initial: textVariants.normal,
  enter: textVariants.normal,
});

let isControlled = false;

const startAnimation = () => motionInstance.apply(textVariants.animate);
const stopAnimation = () => motionInstance.apply(textVariants.normal);

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
