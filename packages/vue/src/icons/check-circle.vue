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
      <path ref="checkRef" d="M9 12.75 11.25 15 15 9.75" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "CheckCircleIcon",
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

  const pathVariants = {
    normal: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        pathLength: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.4, ease: "easeInOut" },
      },
    },
  };

  const checkRef = ref<SVGPathElement | null>();
  const checkMotion = useMotion(checkRef, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    checkMotion.apply(pathVariants.animate);
  };

  const stopAnimation = () => {
    checkMotion.apply(pathVariants.normal);
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
