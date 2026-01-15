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
        d="M12 2.25C10.108 2.25 8.24156 2.35947 6.40668 2.57241C5.30608 2.70014 4.5 3.649 4.5 4.75699V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.75699C19.5 3.649 18.6939 2.70014 17.5933 2.57241C15.7584 2.35947 13.892 2.25 12 2.25Z"
      />
      <path d="M8.25 6H15.75V8.25H8.25V6Z"/>
      <path :custom="0" d="M8.25 11.25H8.2575V11.2575H8.25V11.25Z"/>
      <path :custom="2" d="M10.7476 11.25H10.7551V11.2575H10.7476V11.25Z"/>
      <path :custom="1" d="M13.2524 13.5H13.2599V13.5075H13.2524V13.5Z"/>
      <path :custom="4" d="M8.25 15.75H8.2575V15.7575H8.25V15.75Z"/>
      <path :custom="3" d="M15.75 11.25H15.7575V11.2575H15.75V11.25Z"/>
      <path :custom="5" d="M10.7476 18H10.7551V18.0075H10.7476V18Z"/>
      <path d="M8.25 13.5H8.2575V13.5075H8.25V13.5Z"/>
      <path d="M8.25 18H8.2575V18.0075H8.25V18Z"/>
      <path d="M10.7476 13.5H10.7551V13.5075H10.7476V13.5Z"/>
      <path d="M10.7476 15.75H10.7551V15.7575H10.7476V15.75Z"/>
      <path d="M13.2524 11.25H13.2599V11.2575H13.2524V11.25Z"/>
      <path d="M13.2524 15.75H13.2599V15.7575H13.2524V15.75Z"/>
      <path d="M13.2524 18H13.2599V18.0075H13.2524V18Z"/>
      <path d="M15.75 13.5H15.7575V13.5075H15.75V13.5Z"/>
      <path d="M15.75 15.75V18"/>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CalculatorIcon",
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
