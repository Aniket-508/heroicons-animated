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
      <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <Motion
        is="path"
        ref="wedgeRef"
        d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChartPieIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: 1.1,
    translateY: -1.1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 15,
      bounce: 0.6,
    },
  },
};

const wedgeRef = ref<SVGPathElement | null>();
const motionInstance = useMotion(wedgeRef, {
  initial: variants.normal,
  enter: variants.normal,
});

let isControlled = false;

const startAnimation = () => {
  motionInstance.apply(variants.animate);
};

const stopAnimation = () => {
  motionInstance.apply(variants.normal);
};

const handleMouseEnter = () => {
  if (!isControlled) startAnimation();
};

const handleMouseLeave = () => {
  if (!isControlled) stopAnimation();
};

const setControlled = (value: boolean) => {
  isControlled = value;
};

defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
