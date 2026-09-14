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
      <path ref="uRef" d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5" />
      <path ref="lineRef" d="M3.745 20.246h16.5" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "UnderlineIcon",
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

  const uVariants = {
    normal: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      pathOffset: [1, 0],
      transition: { duration: 0.3, ease: "linear", opacity: { duration: 0.1 } },
    },
  };

  const lineVariants = {
    normal: {
      opacity: 1,
      pathLength: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        duration: 0.1,
        ease: "linear",
        delay: 0.3,
        opacity: { duration: 0.1, delay: 0.3 },
      },
    },
  };

  const uRef = ref<SVGPathElement | null>(null);
  const lineRef = ref<SVGPathElement | null>(null);
  const motionU = useMotion(uRef, {
    initial: uVariants.normal,
    enter: uVariants.normal,
  });
  const motionLine = useMotion(lineRef, {
    initial: lineVariants.normal,
    enter: lineVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionU.apply(uVariants.animate);
    motionLine.apply(lineVariants.animate);
  };

  const stopAnimation = () => {
    motionU.apply(uVariants.normal);
    motionLine.apply(lineVariants.normal);
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
