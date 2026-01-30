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
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
      <Motion is="path" ref="verticalRef" d="M12 9v6" />
      <Motion is="path" ref="horizontalRef" d="M9 12h6" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlusCircleIcon",
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

const verticalVariants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.3,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
};

const horizontalVariants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.6,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.6 },
    },
  },
};

const verticalRef = ref<SVGPathElement | null>();
const horizontalRef = ref<SVGPathElement | null>();
const verticalMotion = useMotion(verticalRef, {
  initial: verticalVariants.normal,
  enter: verticalVariants.normal,
});
const horizontalMotion = useMotion(horizontalRef, {
  initial: horizontalVariants.normal,
  enter: horizontalVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  verticalMotion.apply(verticalVariants.animate);
  horizontalMotion.apply(horizontalVariants.animate);
};

const stopAnimation = () => {
  const lineNormal = { opacity: 1, pathLength: 1 };
  verticalMotion.apply(lineNormal);
  horizontalMotion.apply(lineNormal);
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
