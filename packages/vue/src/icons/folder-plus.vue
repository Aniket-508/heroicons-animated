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
        d="M10.94 4.19a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
      />
      <Motion is="path" ref="verticalLineRef" d="M12 10.5v6" />
      <Motion is="path" ref="horizontalLineRef" d="M9 13.5h6" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "FolderPlusIcon",
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

const verticalLineVariants = {
  normal: { opacity: 1 },
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

const horizontalLineVariants = {
  normal: { opacity: 1 },
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

const verticalLineRef = ref<SVGPathElement | null>();
const horizontalLineRef = ref<SVGPathElement | null>();
const verticalMotion = useMotion(verticalLineRef, {
  initial: verticalLineVariants.normal,
  enter: verticalLineVariants.normal,
});
const horizontalMotion = useMotion(horizontalLineRef, {
  initial: horizontalLineVariants.normal,
  enter: horizontalLineVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  verticalMotion.apply(verticalLineVariants.animate);
  horizontalMotion.apply(horizontalLineVariants.animate);
};

const stopAnimation = () => {
  verticalMotion.apply(verticalLineVariants.normal);
  horizontalMotion.apply(horizontalLineVariants.normal);
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
