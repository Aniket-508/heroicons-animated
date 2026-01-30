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
      <Motion is="path" ref="dot0Ref" :d="DOTS[0].d" />
      <Motion is="path" ref="dot1Ref" :d="DOTS[1].d" />
      <Motion is="path" ref="dot2Ref" :d="DOTS[2].d" />
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "EllipsisHorizontalCircleIcon",
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

const DOTS = [
  {
    d: "M8.625 12C8.625 12.2071 8.45711 12.375 8.25 12.375C8.04289 12.375 7.875 12.2071 7.875 12C7.875 11.7929 8.04289 11.625 8.25 11.625C8.45711 11.625 8.625 11.7929 8.625 12ZM8.625 12H8.25",
    index: 0,
  },
  {
    d: "M12.375 12C12.375 12.2071 12.2071 12.375 12 12.375C11.7929 12.375 11.625 12.2071 11.625 12C11.625 11.7929 11.7929 11.625 12 11.625C12.2071 11.625 12.375 11.7929 12.375 12ZM12.375 12H12",
    index: 1,
  },
  {
    d: "M16.125 12C16.125 12.2071 15.9571 12.375 15.75 12.375C15.5429 12.375 15.375 12.2071 15.375 12C15.375 11.7929 15.5429 11.625 15.75 11.625C15.9571 11.625 16.125 11.7929 16.125 12ZM16.125 12H15.75",
    index: 2,
  },
];

// Match React: 3 dots scale [1, 1.2, 1], delay custom*0.05, 0.4s easeInOut; circle static
const dotVariants = (i: number) => ({
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.4, delay: i * 0.05, ease: "easeInOut" },
  },
});

const dot0Ref = ref<SVGPathElement | null>(null);
const dot1Ref = ref<SVGPathElement | null>(null);
const dot2Ref = ref<SVGPathElement | null>(null);
const motion0 = useMotion(dot0Ref, {
  initial: { scale: 1 },
  enter: { scale: 1 },
});
const motion1 = useMotion(dot1Ref, {
  initial: { scale: 1 },
  enter: { scale: 1 },
});
const motion2 = useMotion(dot2Ref, {
  initial: { scale: 1 },
  enter: { scale: 1 },
});
const motions = [motion0, motion1, motion2];

let isControlled = false;

const startAnimation = () => {
  motions[0].apply(dotVariants(0).animate);
  motions[1].apply(dotVariants(1).animate);
  motions[2].apply(dotVariants(2).animate);
};

const stopAnimation = () => {
  motions[0].apply({ scale: 1 });
  motions[1].apply({ scale: 1 });
  motions[2].apply({ scale: 1 });
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
