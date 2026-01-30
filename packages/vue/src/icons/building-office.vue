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
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
      <Motion
        v-for="(floorLine, index) in FLOOR_LINES"
        :key="index"
        is="path"
        :ref="(el: SVGPathElement | null) => setFloorRef(el, index)"
        :d="floorLine.path"
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
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const FLOOR_LINES = [
  { path: "M9 12.75h1.5", y: 12.75, index: 0 },
  { path: "M13.5 12.75H15", y: 12.75, index: 0 },
  { path: "M9 9.75h1.5", y: 9.75, index: 1 },
  { path: "M13.5 9.75H15", y: 9.75, index: 1 },
  { path: "M9 6.75h1.5", y: 6.75, index: 2 },
  { path: "M13.5 6.75H15", y: 6.75, index: 2 },
];

const createFloorVariants = (custom: number) => ({
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "linear",
      delay: 0.1 + custom * 0.15,
    },
  },
});

const floorRefs = ref<(SVGPathElement | null)[]>([]);
const floorMotions = ref<any[]>([]);

const setFloorRef = (el: SVGPathElement | null, index: number) => {
  if (el) {
    floorRefs.value[index] = el;
    floorMotions.value[index] = useMotion(el, {
      initial: createFloorVariants(FLOOR_LINES[index].index).normal,
      enter: createFloorVariants(FLOOR_LINES[index].index).normal,
    });
  }
};

let isControlled = false;

const startAnimation = () => {
  FLOOR_LINES.forEach((line, index) => {
    if (floorMotions.value[index]) {
      floorMotions.value[index].apply(createFloorVariants(line.index).animate);
    }
  });
};

const stopAnimation = () => {
  FLOOR_LINES.forEach((line, index) => {
    if (floorMotions.value[index]) {
      floorMotions.value[index].apply(createFloorVariants(line.index).normal);
    }
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
