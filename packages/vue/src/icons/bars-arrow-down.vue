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
      <path d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75" />
      <Motion
        is="path"
        ref="arrowRef"
        d="M17.25 9v12m0 0-3.75-3.75M17.25 21L21 17.25"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BarsArrowDownIcon",
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

const arrowVariants = {
  normal: {
    translateY: 0,
  },
  animate: {
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const arrowRef = ref<SVGPathElement>();
const arrowMotion = useMotion(arrowRef, {
  initial: arrowVariants.normal,
  enter: arrowVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  arrowMotion.apply(arrowVariants.animate);
};

const stopAnimation = () => {
  arrowMotion.apply(arrowVariants.normal);
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
