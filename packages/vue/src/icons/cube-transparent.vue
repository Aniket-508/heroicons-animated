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
      <Motion is="path" ref="pathRef" d="M21 7.5L18.75 6.1875M21 7.5V9.75M21 7.5L18.75 8.8125M3 7.5L5.25 6.1875M3 7.5L5.25 8.8125M3 7.5V9.75M12 12.75L14.25 11.4375M12 12.75L9.75 11.4375M12 12.75V15M12 21.75L14.25 20.4375M12 21.75V19.5M12 21.75L9.75 20.4375M9.75 3.5625L12 2.25L14.25 3.5625M21 14.25V16.5L18.75 17.8125M5.25 17.8125L3 16.5V14.25" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CubeTransparentIcon',
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
