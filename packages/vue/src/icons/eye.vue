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
      <Motion
        is="path"
        ref="irisRef"
        d="M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42372 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.36119 19.5 3.42564 16.4931 2.03555 12.3224Z"
        style="transform-origin: 50% 50%"
      />
      <Motion
        is="path"
        ref="pupilRef"
        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        style="transform-origin: 50% 50%"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "EyeIcon",
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

// Match React: iris scaleY [1, 0.1, 1], opacity [1, 0.3, 1]; pupil scale [1, 0.3, 1], opacity [1, 0.3, 1]; 0.4s easeInOut
const irisVariants = {
  normal: { scaleY: 1, opacity: 1 },
  animate: {
    scaleY: [1, 0.1, 1],
    opacity: [1, 0.3, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};
const pupilVariants = {
  normal: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 0.3, 1],
    opacity: [1, 0.3, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const irisRef = ref<SVGPathElement | null>(null);
const pupilRef = ref<SVGPathElement | null>(null);
const irisMotion = useMotion(irisRef, {
  initial: irisVariants.normal,
  enter: irisVariants.normal,
});
const pupilMotion = useMotion(pupilRef, {
  initial: pupilVariants.normal,
  enter: pupilVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  irisMotion.apply(irisVariants.animate);
  pupilMotion.apply(pupilVariants.animate);
};

const stopAnimation = () => {
  irisMotion.apply(irisVariants.normal);
  pupilMotion.apply(pupilVariants.normal);
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
