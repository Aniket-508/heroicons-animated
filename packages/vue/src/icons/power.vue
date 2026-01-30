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
      <Motion
        is="path"
        ref="circleRef"
        d="M5.636 5.636a9 9 0 1 0 12.728 0"
        style="transform-origin: center center"
      />
      <Motion is="path" ref="lineRef" d="M12 3v9" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "PowerIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const circleVariants = {
  normal: { opacity: 1, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5, 1],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const lineVariants = {
  normal: { y: 0 },
  animate: {
    y: [0, -2, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const circleRef = ref<SVGPathElement | null>();
const lineRef = ref<SVGPathElement | null>();
const circleMotion = useMotion(circleRef, {
  initial: circleVariants.normal,
  enter: circleVariants.normal,
});
const lineMotion = useMotion(lineRef, {
  initial: lineVariants.normal,
  enter: lineVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  circleMotion.apply(circleVariants.animate);
  lineMotion.apply(lineVariants.animate);
};

const stopAnimation = () => {
  circleMotion.apply(circleVariants.normal);
  lineMotion.apply(lineVariants.normal);
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
