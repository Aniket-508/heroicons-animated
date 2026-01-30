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
      <Motion is="g" ref="upArrowRef">
        <path d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5" />
      </Motion>
      <Motion is="g" ref="downArrowRef">
        <path d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
      </Motion>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArrowsUpDownIcon",
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

const upArrowVariants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const downArrowVariants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const upArrowRef = ref();
const downArrowRef = ref();

const upArrowMotion = useMotion(upArrowRef, {
  initial: upArrowVariants.normal,
  enter: upArrowVariants.normal,
});

const downArrowMotion = useMotion(downArrowRef, {
  initial: downArrowVariants.normal,
  enter: downArrowVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  upArrowMotion.apply(upArrowVariants.animate);
  downArrowMotion.apply(downArrowVariants.animate);
};

const stopAnimation = () => {
  upArrowMotion.apply(upArrowVariants.normal);
  downArrowMotion.apply(downArrowVariants.normal);
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
