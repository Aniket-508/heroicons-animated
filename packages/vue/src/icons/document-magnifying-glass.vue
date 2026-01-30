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
        d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V19.875C4.5 20.4963 5.00368 21 5.625 21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
      />
      <Motion
        is="path"
        ref="glassRef"
        d="M13.4812 15.7312L15 17.25M14.25 13.875C14.25 15.3247 13.0747 16.5 11.625 16.5C10.1753 16.5 9 15.3247 9 13.875C9 12.4253 10.1753 11.25 11.625 11.25C13.0747 11.25 14.25 12.4253 14.25 13.875Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "DocumentMagnifyingGlassIcon",
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

// Match React VARIANTS: magnifying path x [0,0,-2,0] y [0,-3,0,0] 1s bounce 0.3
const variants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -2, 0],
    y: [0, -3, 0, 0],
    transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const glassRef = ref<SVGPathElement | null>();
const motionInstance = useMotion(glassRef, {
  initial: variants.normal,
  enter: variants.normal,
});

let isControlled = false;

const startAnimation = () => {
  motionInstance.apply(variants.animate);
};

const stopAnimation = () => {
  motionInstance.apply(variants.normal);
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
