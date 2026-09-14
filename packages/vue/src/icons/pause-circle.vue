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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path ref="leftBarRef" d="M9.75 9v6" />
      <path ref="rightBarRef" d="M14.25 9v6" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "PauseCircleIcon",
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

  const baseTransition = {
    times: [0, 0.2, 0.5, 1],
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  };

  const leftBarVariants = {
    normal: { y: 0 },
    animate: {
      y: [0, 2, 0, 0],
      transition: baseTransition,
    },
  };

  const rightBarVariants = {
    normal: { y: 0 },
    animate: {
      y: [0, 0, 2, 0],
      transition: baseTransition,
    },
  };

  const leftBarRef = ref<SVGPathElement | null>(null);
  const rightBarRef = ref<SVGPathElement | null>(null);
  const leftBarMotion = useMotion(leftBarRef, {
    initial: leftBarVariants.normal,
    enter: leftBarVariants.normal,
  });
  const rightBarMotion = useMotion(rightBarRef, {
    initial: rightBarVariants.normal,
    enter: rightBarVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    leftBarMotion.apply(leftBarVariants.animate);
    rightBarMotion.apply(rightBarVariants.animate);
  };

  const stopAnimation = () => {
    leftBarMotion.apply(leftBarVariants.normal);
    rightBarMotion.apply(rightBarVariants.normal);
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
