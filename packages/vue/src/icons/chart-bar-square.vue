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
        d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
      <Motion is="path" ref="bar1Ref" d="M7.5 14.25v2.25" />
      <Motion is="path" ref="bar2Ref" d="M10.5 12v4.5" />
      <Motion is="path" ref="bar3Ref" d="M13.5 9.75v6.75" />
      <Motion is="path" ref="bar4Ref" d="M16.5 7.5v9" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChartBarSquareIcon",
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
const bar4Ref = ref<SVGPathElement | null>();

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
const motion4 = useMotion(bar4Ref, {
  initial: createBarVariants(0.45).normal,
  enter: createBarVariants(0.45).normal,
});

let isControlled = false;

const startAnimation = () => {
  motion1.apply(createBarVariants(0).animate);
  motion2.apply(createBarVariants(0.15).animate);
  motion3.apply(createBarVariants(0.3).animate);
  motion4.apply(createBarVariants(0.45).animate);
};

const stopAnimation = () => {
  motion1.apply(createBarVariants(0).normal);
  motion2.apply(createBarVariants(0.15).normal);
  motion3.apply(createBarVariants(0.3).normal);
  motion4.apply(createBarVariants(0.45).normal);
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
