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
      <path ref="headRef" d="M13.5 4.5 21 12m0 0-7.5 7.5" />
      <path ref="lineRef" d="M21 12H3" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ArrowRightIcon",
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

  const headVariants = {
    normal: {
      translateX: 0,
    },
    animate: {
      translateX: [0, -3, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  const lineVariants = {
    normal: {
      d: "M21 12H3",
    },
    animate: {
      d: ["M21 12H3", "M18 12H3", "M21 12H3"],
      transition: {
        duration: 0.4,
      },
    },
  };

  const headRef = ref<SVGPathElement>();
  const lineRef = ref<SVGPathElement>();
  const headMotion = useMotion(headRef, {
    initial: headVariants.normal,
    enter: headVariants.normal,
  });
  const lineMotion = useMotion(lineRef, {
    initial: lineVariants.normal,
    enter: lineVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    headMotion.apply(headVariants.animate);
    lineMotion.apply(lineVariants.animate);
  };

  const stopAnimation = () => {
    headMotion.apply(headVariants.normal);
    lineMotion.apply(lineVariants.normal);
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
