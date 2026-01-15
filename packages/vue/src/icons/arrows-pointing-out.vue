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
      <g>
        <Motion
          is="path"
          ref="pathRef"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9"
        />
      </g>
      <g>
        <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15"/>
      </g>
      <g>
        <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9"/>
      </g>
      <g>
        <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArrowsPointingOutIcon",
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
