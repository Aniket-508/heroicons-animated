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
      <Motion is="path" ref="pathRef" d="M7.5 7.5H6.75C5.50736 7.5 4.5 8.50736 4.5 9.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5H14.25C15.4926 19.5 16.5 18.4926 16.5 17.25V9.75C16.5 8.50736 15.4926 7.5 14.25 7.5H13.5" />
        <path
          d="M13.5 4.5L10.5 1.5M10.5 1.5L7.5 4.5M10.5 1.5L10.5 12.75" />
        <path d="M16.5 10.5H17.25C18.4926 10.5 19.5 11.5074 19.5 12.75V20.25C19.5 21.4926 18.4926 22.5 17.25 22.5H9.75C8.50736 22.5 7.5 21.4926 7.5 20.25V19.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ArrowUpOnSquareStackIcon',
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
