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
      <Motion is="path" ref="upRef" d="M8.25 9 12 5.25 15.75 9" />
      <Motion is="path" ref="downRef" d="M8.25 15 12 18.75 15.75 15" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChevronUpDownIcon",
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

const upVariants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -2, 0],
    transition: { duration: 0.5, times: [0, 0.4, 1] },
  },
};

const downVariants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, 2, 0],
    transition: { duration: 0.5, times: [0, 0.4, 1] },
  },
};

const upRef = ref<SVGPathElement | null>();
const downRef = ref<SVGPathElement | null>();
const motionUp = useMotion(upRef, {
  initial: upVariants.normal,
  enter: upVariants.normal,
});
const motionDown = useMotion(downRef, {
  initial: downVariants.normal,
  enter: downVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  motionUp.apply(upVariants.animate);
  motionDown.apply(downVariants.animate);
};

const stopAnimation = () => {
  motionUp.apply(upVariants.normal);
  motionDown.apply(downVariants.normal);
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
