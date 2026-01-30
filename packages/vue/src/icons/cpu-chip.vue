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
      <Motion is="path" ref="p0" d="M8.25 3V4.5" />
      <Motion is="path" ref="p1" d="M12 3V4.5" />
      <Motion is="path" ref="p2" d="M15.75 3V4.5" />
      <Motion is="path" ref="p3" d="M4.5 8.25H3" />
      <Motion is="path" ref="p4" d="M4.5 12H3" />
      <Motion is="path" ref="p5" d="M4.5 15.75H3" />
      <Motion is="path" ref="p6" d="M21 8.25H19.5" />
      <Motion is="path" ref="p7" d="M21 12H19.5" />
      <Motion is="path" ref="p8" d="M21 15.75H19.5" />
      <Motion is="path" ref="p9" d="M8.25 19.5V21" />
      <Motion is="path" ref="p10" d="M12 19.5V21" />
      <Motion is="path" ref="p11" d="M15.75 19.5V21" />
      <path
        d="M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CpuChipIcon",
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

const transition = { duration: 0.5, ease: "easeInOut", repeat: 1 };
const yVariants = {
  normal: { scale: 1, rotate: 0, opacity: 1 },
  animate: { scaleY: [1, 1.5, 1], opacity: [1, 0.8, 1], transition },
};
const xVariants = {
  normal: { scale: 1, rotate: 0, opacity: 1 },
  animate: { scaleX: [1, 1.5, 1], opacity: [1, 0.8, 1], transition },
};

const p0 = ref<SVGPathElement | null>();
const p1 = ref<SVGPathElement | null>();
const p2 = ref<SVGPathElement | null>();
const p3 = ref<SVGPathElement | null>();
const p4 = ref<SVGPathElement | null>();
const p5 = ref<SVGPathElement | null>();
const p6 = ref<SVGPathElement | null>();
const p7 = ref<SVGPathElement | null>();
const p8 = ref<SVGPathElement | null>();
const p9 = ref<SVGPathElement | null>();
const p10 = ref<SVGPathElement | null>();
const p11 = ref<SVGPathElement | null>();

const motions = [
  useMotion(p0, { initial: yVariants.normal, enter: yVariants.normal }),
  useMotion(p1, { initial: yVariants.normal, enter: yVariants.normal }),
  useMotion(p2, { initial: yVariants.normal, enter: yVariants.normal }),
  useMotion(p3, { initial: xVariants.normal, enter: xVariants.normal }),
  useMotion(p4, { initial: xVariants.normal, enter: xVariants.normal }),
  useMotion(p5, { initial: xVariants.normal, enter: xVariants.normal }),
  useMotion(p6, { initial: xVariants.normal, enter: xVariants.normal }),
  useMotion(p7, { initial: xVariants.normal, enter: xVariants.normal }),
  useMotion(p8, { initial: xVariants.normal, enter: xVariants.normal }),
  useMotion(p9, { initial: yVariants.normal, enter: yVariants.normal }),
  useMotion(p10, { initial: yVariants.normal, enter: yVariants.normal }),
  useMotion(p11, { initial: yVariants.normal, enter: yVariants.normal }),
];

let isControlled = false;

const startAnimation = () => {
  for (const i of [0, 1, 2, 9, 10, 11]) motions[i].apply(yVariants.animate);
  for (const i of [3, 4, 5, 6, 7, 8]) motions[i].apply(xVariants.animate);
};

const stopAnimation = () => {
  for (let i = 0; i < motions.length; i++) {
    motions[i].apply(
      [0, 1, 2, 9, 10, 11].includes(i) ? yVariants.normal : xVariants.normal,
    );
  }
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
