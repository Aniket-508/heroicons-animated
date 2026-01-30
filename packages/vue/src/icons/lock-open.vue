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
        d="M13.5 10.5V6.75C13.5 4.26472 15.5147 2.25 18 2.25C20.4853 2.25 22.5 4.26472 22.5 6.75V10.5"
      />
      <path
        d="M3.75 21.75H14.25C15.4926 21.75 16.5 20.7426 16.5 19.5V12.75C16.5 11.5074 15.4926 10.5 14.25 10.5H3.75C2.50736 10.5 1.5 11.5074 1.5 12.75V19.5C1.5 20.7426 2.50736 21.75 3.75 21.75Z"
      />
    </Motion>
  </div>
</template>

<script lang="ts">
export default {
  name: "LockOpenIcon",
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
  normal: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const shackleVariants = {
  normal: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  animate: {
    y: [0, -1.25, 0],
    transition: { duration: 0.4, ease: "easeOut" },
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
