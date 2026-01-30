<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <Motion
      ref="svgRef"
      tag="svg"
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
      <path
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <Motion
        is="path"
        ref="lensRef"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
        style="transform-origin: 12px 12.75px"
      />
    </Motion>
  </div>
</template>

<script lang="ts">
export default {
  name: "CameraIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const bodyVariants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 0.95, 1],
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const lensVariants = {
  normal: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.6, 1],
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const svgRef = ref<SVGSVGElement | null>();
const lensRef = ref<SVGPathElement | null>();
const bodyMotion = useMotion(svgRef, {
  initial: bodyVariants.normal,
  enter: bodyVariants.normal,
});
const lensMotion = useMotion(lensRef, {
  initial: lensVariants.normal,
  enter: lensVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  bodyMotion.apply(bodyVariants.animate);
  lensMotion.apply(lensVariants.animate);
};

const stopAnimation = () => {
  bodyMotion.apply(bodyVariants.normal);
  lensMotion.apply(lensVariants.normal);
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
