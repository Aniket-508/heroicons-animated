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
      <Motion is="path" ref="pathRef" d="M21.75 8.99997V9.90606C21.75 10.7338 21.2955 11.4947 20.5667 11.8871L14.0893 15.375M2.25 8.99997V9.90606C2.25 10.7338 2.70448 11.4947 3.43328 11.8871L9.91074 15.375M18.75 17.8846L14.0893 15.375M14.0893 15.375L13.0667 14.8244C12.4008 14.4658 11.5992 14.4658 10.9333 14.8244L9.91074 15.375M9.91074 15.375L5.25 17.8846M21.75 19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5L2.25 8.84388C2.25 8.01614 2.70448 7.25525 3.43328 6.86282L10.9333 2.82436C11.5992 2.46577 12.4008 2.46577 13.0667 2.82436L20.5667 6.86282C21.2955 7.25525 21.75 8.01615 21.75 8.84388V19.5Z" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'EnvelopeOpenIcon',
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
