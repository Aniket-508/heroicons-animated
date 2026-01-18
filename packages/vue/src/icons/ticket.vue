<template>
  <div
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
      <Motion
        is="path"
        ref="pathRef"
        d="M16.5 6V6.75M16.5 9.75V10.5M16.5 13.5V14.25M16.5 17.25V18M7.5 12.75H12.75M7.5 15H10.5M3.375 5.25C2.75368 5.25 2.25 5.75368 2.25 6.375V9.40135C3.1467 9.92006 3.75 10.8896 3.75 12C3.75 13.1104 3.1467 14.0799 2.25 14.5987V17.625C2.25 18.2463 2.75368 18.75 3.375 18.75H20.625C21.2463 18.75 21.75 18.2463 21.75 17.625V14.5987C20.8533 14.0799 20.25 13.1104 20.25 12C20.25 10.8896 20.8533 9.92006 21.75 9.40135V6.375C21.75 5.75368 21.2463 5.25 20.625 5.25H3.375Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "TicketIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const variants = {
  normal: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const pathRef = ref();
const motionInstance = useMotion(pathRef, {
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
