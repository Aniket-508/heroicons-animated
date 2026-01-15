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
      <Motion is="path" ref="pathRef" d="M15.6657 3.88789C15.3991 2.94272 14.5305 2.25 13.5 2.25H10.5C9.46954 2.25 8.60087 2.94272 8.33426 3.88789M15.6657 3.88789C15.7206 4.0825 15.75 4.28782 15.75 4.5V4.5C15.75 4.91421 15.4142 5.25 15 5.25H9C8.58579 5.25 8.25 4.91421 8.25 4.5V4.5C8.25 4.28782 8.27937 4.0825 8.33426 3.88789" />
          <path
            d="M15.6657 3.88789C16.3119 3.93668 16.9545 3.99828 17.5933 4.07241C18.6939 4.20014 19.5 5.149 19.5 6.25699V19.5C19.5 20.7426 18.4926 21.75 17.25 21.75H6.75C5.50736 21.75 4.5 20.7426 4.5 19.5V6.25699C4.5 5.149 5.30608 4.20014 6.40668 4.07241C7.04547 3.99828 7.68808 3.93668 8.33426 3.88789" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ClipboardIcon',
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
