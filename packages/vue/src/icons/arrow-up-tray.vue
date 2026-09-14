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
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5"
      />
      <g ref="arrowGroupRef">
        <path d="M7.5 7.5L12 3m0 0 4.5 4.5M12 3v13.5" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ArrowUpTrayIcon",
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

  const arrowVariants = {
    normal: {
      translateY: 0,
    },
    animate: {
      translateY: [0, -2, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.4, 1],
      },
    },
  };

  const arrowGroupRef = ref();
  const arrowMotion = useMotion(arrowGroupRef, {
    initial: arrowVariants.normal,
    enter: arrowVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    arrowMotion.apply(arrowVariants.animate);
  };

  const stopAnimation = () => {
    arrowMotion.apply(arrowVariants.normal);
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
