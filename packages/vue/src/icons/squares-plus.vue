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
      <path
        d="M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
      />
      <path ref="verticalRef" d="M16.875 13.5v6.75" />
      <path ref="horizontalRef" d="M13.5 16.875h6.75" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SquaresPlusIcon",
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

  const verticalVariants = {
    normal: { opacity: 1, pathLength: 1 },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        delay: 0.3,
        duration: 0.2,
        opacity: { duration: 0.1, delay: 0.3 },
      },
    },
  };

  const horizontalVariants = {
    normal: { opacity: 1, pathLength: 1 },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        delay: 0.6,
        duration: 0.2,
        opacity: { duration: 0.1, delay: 0.6 },
      },
    },
  };

  const verticalRef = ref<SVGPathElement | null>(null);
  const horizontalRef = ref<SVGPathElement | null>(null);
  const verticalMotion = useMotion(verticalRef, {
    initial: verticalVariants.normal,
    enter: verticalVariants.normal,
  });
  const horizontalMotion = useMotion(horizontalRef, {
    initial: horizontalVariants.normal,
    enter: horizontalVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    verticalMotion.apply(verticalVariants.animate);
    horizontalMotion.apply(horizontalVariants.animate);
  };

  const stopAnimation = () => {
    verticalMotion.apply(verticalVariants.normal);
    horizontalMotion.apply(horizontalVariants.normal);
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

  defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
