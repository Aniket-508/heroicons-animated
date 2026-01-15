<template>
  <div
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
        d="M4.125 19.5h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
      />
      <path
        v-for="(line, index) in LINES"
        :key="index"
        :d="line.d"
        ref="lineRefs"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ViewColumnsIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { onMounted, ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const lineVariants = (custom: number) => ({
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 200 + custom * 150,
      duration: 300,
      ease: "linear",
    },
  },
});

const LINES = [
  { d: "M9 4.5v15", index: 0 },
  { d: "M15 4.5v15", index: 1 },
];

const lineRefs = ref<SVGPathElement[]>([]);
const lineMotions: any[] = [];

onMounted(() => {
  lineRefs.value.forEach((el, index) => {
    lineMotions[index] = useMotion(el, {
      initial: lineVariants(index).normal,
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  LINES.forEach((_, index) => {
    lineMotions[index]?.apply(lineVariants(index).animate);
  });
};

const stopAnimation = () => {
  LINES.forEach((_, index) => {
    lineMotions[index]?.apply(lineVariants(index).normal);
  });
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
