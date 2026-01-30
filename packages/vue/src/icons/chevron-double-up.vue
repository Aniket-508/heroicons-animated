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
      <Motion is="path" ref="path1Ref" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
      <Motion is="path" ref="path2Ref" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChevronDoubleUpIcon",
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

const variants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -2, 0],
    transition: { duration: 0.5, times: [0, 0.4, 1] },
  },
};

const path1Ref = ref<SVGPathElement | null>();
const path2Ref = ref<SVGPathElement | null>();
const motion1 = useMotion(path1Ref, {
  initial: variants.normal,
  enter: variants.normal,
});
const motion2 = useMotion(path2Ref, {
  initial: variants.normal,
  enter: variants.normal,
});

let isControlled = false;

const startAnimation = () => {
  motion1.apply(variants.animate);
  motion2.apply(variants.animate);
};

const stopAnimation = () => {
  motion1.apply(variants.normal);
  motion2.apply(variants.normal);
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
