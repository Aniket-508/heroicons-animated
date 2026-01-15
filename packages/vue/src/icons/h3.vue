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
      <Motion is="path" ref="pathRef" d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
          <path
            d="M20.905 14.626a4.52 4.52 0 0 1 .738 3.603c-.154.695-.794 1.143-1.504 1.208a15.194 15.194 0 0 1-3.639-.104m4.405-4.707a4.52 4.52 0 0 0 .738-3.603c-.154-.696-.794-1.144-1.504-1.209a15.19 15.19 0 0 0-3.639.104m4.405 4.708H18" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'H3Icon',
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
