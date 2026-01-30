<template>
  <div
    v-bind="$attrs"
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <Motion
      is="svg"
      ref="svgRef"
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
        ref="shackleRef"
        d="M16.5 10.5V6.75C16.5 4.26472 14.4853 2.25 12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75V10.5"
      />
      <path
        d="M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z"
      />
    </Motion>
  </div>
</template>

<script lang="ts">
export default {
  name: "LockClosedIcon",
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

const svgVariants = {
  normal: {
    rotate: 0,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  animate: {
    rotate: [-3, 2, -2, 1, 0],
    scale: [1, 1.02, 0.98, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const shackleVariants = {
  normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  animate: {
    y: [0, -1, 0],
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const svgRef = ref<SVGElement | null>();
const shackleRef = ref<SVGPathElement | null>();
const svgMotion = useMotion(svgRef, {
  initial: svgVariants.normal,
  enter: svgVariants.normal,
});
const shackleMotion = useMotion(shackleRef, {
  initial: shackleVariants.normal,
  enter: shackleVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  svgMotion.apply(svgVariants.animate);
  shackleMotion.apply(shackleVariants.animate);
};

const stopAnimation = () => {
  svgMotion.apply(svgVariants.normal);
  shackleMotion.apply(shackleVariants.normal);
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
