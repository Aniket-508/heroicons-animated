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
        d="M20.625 11.5046V19.7546C20.625 20.5831 19.9534 21.2546 19.125 21.2546H4.875C4.04657 21.2546 3.375 20.5831 3.375 19.7546V11.5046M11.625 5.12964C11.625 3.67989 10.4497 2.50464 9 2.50464C7.55025 2.50464 6.375 3.67989 6.375 5.12964C6.375 6.57939 7.55025 7.75464 9 7.75464C9.73451 7.75464 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 5.84488 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 3.67989 12.8003 2.50464 14.25 2.50464C15.6997 2.50464 16.875 3.67989 16.875 5.12964C16.875 6.57939 15.6997 7.75464 14.25 7.75464C13.5155 7.75464 11.625 7.75464 11.625 7.75464M11.625 7.75464V21.2546M3 11.5046H21C21.6213 11.5046 22.125 11.001 22.125 10.3796V8.87964C22.125 8.25832 21.6213 7.75464 21 7.75464H3C2.37868 7.75464 1.875 8.25832 1.875 8.87964V10.3796C1.875 11.001 2.37868 11.5046 3 11.5046Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "GiftIcon",
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
