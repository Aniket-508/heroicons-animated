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
      <path
        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5"
      />
      <Motion is="path" ref="bar1Ref" d="M9 11.25v1.5" />
      <Motion is="path" ref="bar2Ref" d="M12 9v3.75" />
      <Motion is="path" ref="bar3Ref" d="M15 6.75v6" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "PresentationChartBarIcon",
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

const createBarVariants = (delay: number) => ({
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
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
const bar1Motion = useMotion(bar1Ref, {
  initial: createBarVariants(0).normal,
  enter: createBarVariants(0).normal,
});
const bar2Motion = useMotion(bar2Ref, {
  initial: createBarVariants(0.15).normal,
  enter: createBarVariants(0.15).normal,
});
const bar3Motion = useMotion(bar3Ref, {
  initial: createBarVariants(0.3).normal,
  enter: createBarVariants(0.3).normal,
});

let isControlled = false;

const startAnimation = () => {
  bar1Motion.apply(createBarVariants(0).animate);
  bar2Motion.apply(createBarVariants(0.15).animate);
  bar3Motion.apply(createBarVariants(0.3).animate);
};

const stopAnimation = () => {
  const barNormal = { opacity: 1, pathLength: 1, pathOffset: 0 };
  bar1Motion.apply(barNormal);
  bar2Motion.apply(barNormal);
  bar3Motion.apply(barNormal);
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
