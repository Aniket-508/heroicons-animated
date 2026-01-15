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
        ref="bar1"
        d="M3.75 6.75h16.5"
        :initial="variants.normal"
        :variants="variants"
        :custom="0"
      />
      <Motion
        is="path"
        ref="bar2"
        d="M3.75 12h16.5"
        :initial="variants.normal"
        :variants="variants"
        :custom="0.1"
      />
      <Motion
        is="path"
        ref="bar3"
        d="M3.75 17.25h16.5"
        :initial="variants.normal"
        :variants="variants"
        :custom="0.2"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Bars3Icon',
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
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  animate: (custom: number) => ({
    scaleX: [1, 0.6, 1],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      delay: custom,
    },
  }),
};

const bar1 = ref();
const bar2 = ref();
const bar3 = ref();

const motion1 = useMotion(bar1, {
  initial: variants.normal,
});
const motion2 = useMotion(bar2, {
  initial: variants.normal,
});
const motion3 = useMotion(bar3, {
  initial: variants.normal,
});

let isControlled = false;

const startAnimation = () => {
    // apply variant 'animate' with custom delay?
    // useMotion's apply doesn't automatically use the 'custom' prop from template if we call it manually?
    // We need to pass the variant object.
    
    // In React: variants=CREATE_BAR_VARIANTS(delay)
    // Here we defined 'animate' as a function in variants object.
    // motionInstance.apply(variants.animate) might work if it resolves functions?
    // Let's manually construct it to be safe.
    
    motion1.apply(variants.animate(0));
    motion2.apply(variants.animate(0.1));
    motion3.apply(variants.animate(0.2));
};

const stopAnimation = () => {
    motion1.apply(variants.normal);
    motion2.apply(variants.normal);
    motion3.apply(variants.normal);
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