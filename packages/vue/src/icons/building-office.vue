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
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18m-9.75 0v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
      <path
        v-for="(floorLine, index) in FLOOR_LINES"
        :key="index"
        :d="floorLine.path"
        ref="floorRefs"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BuildingOfficeIcon",
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

const floorVariants = (custom: number) => ({
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 300,
      ease: "linear",
      delay: 100 + custom * 150,
    },
  },
});

const FLOOR_LINES = [
  { path: "M9 12.75h1.5", y: 12.75, index: 0 },
  { path: "M13.5 12.75H15", y: 12.75, index: 0 },
  { path: "M9 9.75h1.5", y: 9.75, index: 1 },
  { path: "M13.5 9.75H15", y: 9.75, index: 1 },
  { path: "M9 6.75h1.5", y: 6.75, index: 2 },
  { path: "M13.5 6.75H15", y: 6.75, index: 2 },
];

const floorRefs = ref<SVGPathElement[]>([]);
const floorMotions: any[] = [];

onMounted(() => {
  floorRefs.value.forEach((el, index) => {
    floorMotions[index] = useMotion(el, {
      initial: floorVariants(FLOOR_LINES[index].index).normal,
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  FLOOR_LINES.forEach((line, index) => {
    floorMotions[index]?.apply(floorVariants(line.index).animate);
  });
};

const stopAnimation = () => {
  FLOOR_LINES.forEach((line, index) => {
    floorMotions[index]?.apply(floorVariants(line.index).normal);
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
