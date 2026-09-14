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
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15"
      />
      <g ref="arrowGroupRef">
        <path d="M5.25 15l-3-3m0 0 3-3m-3 3H15" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ArrowLeftStartOnRectangleIcon",
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
      translateX: 0,
    },
    animate: {
      translateX: [0, -2, 0],
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
