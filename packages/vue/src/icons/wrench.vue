<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <svg
      ref="svgRef"
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="props.color"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.867 19.125h.008v.008h-.008v-.008Z"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "WrenchIcon",
  };
</script>

<script setup lang="ts">
  import { useMotion } from "../motion";
  import { ref } from "vue";

  export interface Props {
    size?: number;
    class?: string;
    color?: string;
    strokeWidth?: number | string;
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 28,
    color: "currentColor",
    strokeWidth: 1.5,
  });

  const variants = {
    normal: { rotate: 0, transition: { duration: 0.25, ease: "easeOut" } },
    animate: {
      rotate: [0, 12, -14, 4, 0],
      transition: {
        duration: 1.05,
        times: [0, 0.42, 0.68, 0.88, 1],
        ease: ["easeInOut", "easeInOut", "easeOut", "easeOut"],
      },
    },
  };

  const svgRef = ref<SVGSVGElement | null>(null);
  const motionInstance = useMotion(svgRef, {
    initial: variants.normal,
    enter: variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => motionInstance.apply(variants.animate);
  const stopAnimation = () => motionInstance.apply(variants.normal);

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

  defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
