<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <Motion
      is="svg"
      ref="svgRef"
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="transform-origin: 50% 50%"
    >
      <path
        d="M21 7.5L12 2.25L3 7.5M21 7.5L12 12.75M21 7.5V16.5L12 21.75M3 7.5L12 12.75M3 7.5V16.5L12 21.75M12 12.75V21.75"
      />
    </Motion>
  </div>
</template>

<script lang="ts">
export default {
  name: "CubeIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

// Match React CUBE_VARIANTS: svg rotateY [0, 15, -15, 0], 0.6s easeInOut
const variants = {
  normal: { rotateY: 0 },
  animate: {
    rotateY: [0, 15, -15, 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const svgRef = ref<SVGSVGElement | null>();
const motionInstance = useMotion(svgRef, {
  initial: variants.normal,
  enter: variants.normal,
});

let isControlled = false;

const startAnimation = () => motionInstance.apply(variants.animate);
const stopAnimation = () => motionInstance.apply(variants.normal);

const handleMouseEnter = () => {
  if (!isControlled) startAnimation();
};

const handleMouseLeave = () => {
  if (!isControlled) stopAnimation();
};

const setControlled = (value: boolean) => {
  isControlled = value;
};

defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
