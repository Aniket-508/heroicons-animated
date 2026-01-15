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
      <Motion is="path" ref="pathRef" d="M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25Z" />
        <path d="M9 17.25V18.2574C9 19.053 8.68393 19.8161 8.12132 20.3787L7.5 21H16.5L15.8787 20.3787C15.3161 19.8161 15 19.053 15 18.2574V17.25M21 5.25V15C21 16.2426 19.9926 17.25 18.75 17.25H5.25C4.00736 17.25 3 16.2426 3 15V5.25M21 5.25C21 4.00736 19.9926 3 18.75 3H5.25C4.00736 3 3 4.00736 3 5.25M21 5.25V12C21 13.2426 19.9926 14.25 18.75 14.25H5.25C4.00736 14.25 3 13.2426 3 12V5.25" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ComputerDesktopIcon',
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { MotionComponent as Motion, useMotion } from '@vueuse/motion';

interface Props {
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
      ease: 'easeOut',
    },
  },
  animate: {
    scale: [1, 1.08, 1],
    transition: {
      duration: 0.45,
      ease: 'easeInOut',
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
