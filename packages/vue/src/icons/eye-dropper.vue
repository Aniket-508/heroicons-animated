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
        d="M15 11.25L16.5 12.75L17.25 12V8.75798L19.5264 8.14802C20.019 8.01652 20.4847 7.75778 20.8712 7.37132C22.0428 6.19975 22.0428 4.30025 20.8712 3.12868C19.6996 1.95711 17.8001 1.95711 16.6286 3.12868C16.2421 3.51509 15.9832 3.98069 15.8517 4.47324L15.2416 6.74998H12L11.25 7.49998L12.75 8.99999M15 11.25L6.53033 19.7197C6.19077 20.0592 5.73022 20.25 5.25 20.25C4.76978 20.25 4.30924 20.4408 3.96967 20.7803L3 21.75L2.25 21L3.21967 20.0303C3.55923 19.6908 3.75 19.2302 3.75 18.75C3.75 18.2698 3.94077 17.8092 4.28033 17.4697L12.75 8.99999M15 11.25L12.75 8.99999"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "EyeDropperIcon",
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
