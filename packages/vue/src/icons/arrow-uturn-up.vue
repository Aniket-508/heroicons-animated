<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <svg
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
      <path d="M15 3v12a6 6 0 0 1-12 0v-3" />
      <g ref="arrowGroupRef">
        <path d="m9 9 6-6m0 0 6 6m-6-6" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ArrowUturnUpIcon",
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

  const stretchVariants = {
    normal: { scaleY: 1, y: 0 },
    animate: {
      scaleY: [1, 1.15, 1],
      y: [0, -1.5, 0],
      transition: {
        duration: 0.45,
        ease: "easeInOut",
      },
    },
  };

  const arrowGroupRef = ref();
  const motionInstance = useMotion(arrowGroupRef, {
    initial: stretchVariants.normal,
    enter: stretchVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionInstance.apply(stretchVariants.animate);
  };

  const stopAnimation = () => {
    motionInstance.apply(stretchVariants.normal);
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
