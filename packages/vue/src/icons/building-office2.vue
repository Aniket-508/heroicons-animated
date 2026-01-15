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
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
      />
      <path
        v-for="(window, index) in WINDOWS"
        :key="index"
        :d="window.path"
        ref="windowRefs"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BuildingOffice2Icon",
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

const windowVariants = (custom: number) => ({
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

const WINDOWS = [
  { path: "M6.75 12.75h.75", index: 0 },
  { path: "M6.75 9.75h.75", index: 1 },
  { path: "M6.75 6.75h.75", index: 2 },
  { path: "M10.5 12.75h.75", index: 0 },
  { path: "M10.5 9.75h.75", index: 1 },
  { path: "M10.5 6.75h.75", index: 2 },
  { path: "M17.25 17h.008v.008h-.008v-.008Z", index: 0 },
  { path: "M17.25 14h.008v.008h-.008v-.008Z", index: 1 },
  { path: "M17.25 11h.008v.008h-.008v-.008Z", index: 2 },
];

const windowRefs = ref<SVGPathElement[]>([]);
const windowMotions: any[] = [];

onMounted(() => {
  windowRefs.value.forEach((el, index) => {
    windowMotions[index] = useMotion(el, {
      initial: windowVariants(WINDOWS[index].index).normal,
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  WINDOWS.forEach((win, index) => {
    windowMotions[index]?.apply(windowVariants(win.index).animate);
  });
};

const stopAnimation = () => {
  WINDOWS.forEach((win, index) => {
    windowMotions[index]?.apply(windowVariants(win.index).normal);
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
