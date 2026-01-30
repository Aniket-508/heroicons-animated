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
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
      <Motion is="path" ref="bar1Ref" d="M9 16.5v.75" />
      <Motion is="path" ref="bar2Ref" d="M12 14.25v3" />
      <Motion is="path" ref="bar3Ref" d="M15 12v5.25" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "DocumentChartBarIcon",
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

// Match React CREATE_BAR_VARIANTS: pathLength [0,1] pathOffset [1,0] opacity [0,1], delay 0/0.15/0.3s, 0.4s easeOut
const createBarVariants = (delay: number) => ({
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.4, opacity: { duration: 0.1 } },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
      opacity: { duration: 0.1, delay },
    },
  },
});

const bar1Ref = ref<SVGPathElement | null>();
const bar2Ref = ref<SVGPathElement | null>();
const bar3Ref = ref<SVGPathElement | null>();

const motion1 = useMotion(bar1Ref, {
  initial: createBarVariants(0).normal,
  enter: createBarVariants(0).normal,
});
const motion2 = useMotion(bar2Ref, {
  initial: createBarVariants(0.15).normal,
  enter: createBarVariants(0.15).normal,
});
const motion3 = useMotion(bar3Ref, {
  initial: createBarVariants(0.3).normal,
  enter: createBarVariants(0.3).normal,
});

let isControlled = false;

const startAnimation = () => {
  motion1.apply(createBarVariants(0).animate);
  motion2.apply(createBarVariants(0.15).animate);
  motion3.apply(createBarVariants(0.3).animate);
};

const stopAnimation = () => {
  motion1.apply(createBarVariants(0).normal);
  motion2.apply(createBarVariants(0.15).normal);
  motion3.apply(createBarVariants(0.3).normal);
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
