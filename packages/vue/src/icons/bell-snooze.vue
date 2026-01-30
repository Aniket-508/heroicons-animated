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
      <Motion is="g" ref="bellGroupRef">
        <path
          d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818"
        />
      </Motion>
      <Motion is="path" ref="snoozeRef" d="M10.5 8.25H13.5L10.5 12.75H13.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BellSnoozeIcon",
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

const bellVariants = {
  normal: {
    rotate: 0,
    scale: 1,
  },
  animate: {
    rotate: [0, -8, -8, 0],
    scale: [1, 0.97, 0.97, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const snoozeVariants = {
  normal: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  animate: {
    opacity: [1, 1, 0.6, 1],
    y: [0, -1, -2, 0],
    scale: [1, 1.1, 1.15, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const bellGroupRef = ref<SVGGElement>();
const snoozeRef = ref<SVGPathElement>();

const bellMotion = useMotion(bellGroupRef, {
  initial: bellVariants.normal,
  enter: bellVariants.normal,
});

const snoozeMotion = useMotion(snoozeRef, {
  initial: snoozeVariants.normal,
  enter: snoozeVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  bellMotion.apply(bellVariants.animate);
  snoozeMotion.apply(snoozeVariants.animate);
};

const stopAnimation = () => {
  bellMotion.apply(bellVariants.normal);
  snoozeMotion.apply(snoozeVariants.normal);
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
