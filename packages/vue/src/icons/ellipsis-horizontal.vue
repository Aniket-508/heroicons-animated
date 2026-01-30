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
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "EllipsisHorizontalIcon",
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
    d: "M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z",
    index: 0,
  },
  {
    d: "M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z",
    index: 1,
  },
  {
    d: "M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z",
    index: 2,
  },
];

// Match React: 3 dots scale [1, 1.3, 1], delay custom*0.05, 0.4s easeInOut
const dotVariants = (i: number) => ({
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.3, 1],
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
