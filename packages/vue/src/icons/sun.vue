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
      <circle cx="12" cy="12" r="3.75" />
          <Motion is="path" ref="pathRef" d="M12 3V5.25" custom={0} />
          <path
            custom={1}
            d="M18.364 5.63604L16.773 7.22703" />
          <path
            custom={2}
            d="M21 12H18.75" />
          <path
            custom={3}
            d="M18.364 18.364L16.773 16.773" />
          <path
            custom={4}
            d="M12 18.75V21" />
          <path
            custom={5}
            d="M7.22703 16.773L5.63604 18.364" />
          <path
            custom={6}
            d="M5.25 12H3" />
          <path
            custom={7}
            d="M7.22703 7.22703L5.63604 5.63604" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SunIcon',
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
