<template>
  <div
    v-bind="$attrs"
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
      <Motion is="g" ref="circleRef" style="transform-origin: center center">
        <path
          d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636"
        />
      </Motion>
      <Motion is="path" ref="lineRef" d="M18.364 18.364L5.636 5.636" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "NoSymbolIcon",
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

const circleVariants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const lineVariants = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    pathOffset: [1, 0],
    opacity: [0, 1],
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const circleRef = ref<SVGGElement | null>();
const lineRef = ref<SVGPathElement | null>();
const circleMotion = useMotion(circleRef, {
  initial: circleVariants.normal,
  enter: circleVariants.normal,
});
const lineMotion = useMotion(lineRef, {
  initial: lineVariants.normal,
  enter: lineVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  circleMotion.apply(circleVariants.animate);
  lineMotion.apply(lineVariants.animate);
};

const stopAnimation = () => {
  circleMotion.apply(circleVariants.normal);
  lineMotion.apply(lineVariants.normal);
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
