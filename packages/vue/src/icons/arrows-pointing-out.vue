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
      <Motion is="g" ref="topLeftRef">
        <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9" />
      </Motion>
      <Motion is="g" ref="bottomLeftRef">
        <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15" />
      </Motion>
      <Motion is="g" ref="topRightRef">
        <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9" />
      </Motion>
      <Motion is="g" ref="bottomRightRef">
        <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </Motion>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArrowsPointingOutIcon",
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

const topLeftVariants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, -2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const bottomLeftVariants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, -2, 0],
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const topRightVariants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const bottomRightVariants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const topLeftRef = ref();
const bottomLeftRef = ref();
const topRightRef = ref();
const bottomRightRef = ref();

const topLeftMotion = useMotion(topLeftRef, {
  initial: topLeftVariants.normal,
  enter: topLeftVariants.normal,
});

const bottomLeftMotion = useMotion(bottomLeftRef, {
  initial: bottomLeftVariants.normal,
  enter: bottomLeftVariants.normal,
});

const topRightMotion = useMotion(topRightRef, {
  initial: topRightVariants.normal,
  enter: topRightVariants.normal,
});

const bottomRightMotion = useMotion(bottomRightRef, {
  initial: bottomRightVariants.normal,
  enter: bottomRightVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  topLeftMotion.apply(topLeftVariants.animate);
  bottomLeftMotion.apply(bottomLeftVariants.animate);
  topRightMotion.apply(topRightVariants.animate);
  bottomRightMotion.apply(bottomRightVariants.animate);
};

const stopAnimation = () => {
  topLeftMotion.apply(topLeftVariants.normal);
  bottomLeftMotion.apply(bottomLeftVariants.normal);
  topRightMotion.apply(topRightVariants.normal);
  bottomRightMotion.apply(bottomRightVariants.normal);
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
