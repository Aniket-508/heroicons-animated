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
      <Motion
        is="path"
        ref="bar1Ref"
        d="M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"
        style="transform-origin: 50% 100%"
      />
      <Motion
        is="path"
        ref="bar2Ref"
        d="M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"
        style="transform-origin: 50% 100%"
      />
      <Motion
        is="path"
        ref="bar3Ref"
        d="M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"
        style="transform-origin: 50% 100%"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChartBarIcon",
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
    scaleY: 1,
    opacity: 1,
  },
  animate: {
    scaleY: [0, 1.1, 1],
    opacity: [0, 1, 1],
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
  initial: createBarVariants(0.1).normal,
  enter: createBarVariants(0.1).normal,
});
const motion3 = useMotion(bar3Ref, {
  initial: createBarVariants(0.2).normal,
  enter: createBarVariants(0.2).normal,
});

let isControlled = false;

const startAnimation = () => {
  motion1.apply(createBarVariants(0).animate);
  motion2.apply(createBarVariants(0.1).animate);
  motion3.apply(createBarVariants(0.2).animate);
};

const stopAnimation = () => {
  motion1.apply(createBarVariants(0).normal);
  motion2.apply(createBarVariants(0.1).normal);
  motion3.apply(createBarVariants(0.2).normal);
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
