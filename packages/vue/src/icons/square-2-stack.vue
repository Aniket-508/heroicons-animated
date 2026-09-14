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
        ref="backRef"
        d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25"
      />
      <path
        ref="frontRef"
        d="M16.5 8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Square2StackIcon",
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

  const backVariants = {
    normal: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    animate: {
      x: [-4, 0],
      y: [-4, 0],
      opacity: [0, 1],
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const frontVariants = {
    normal: { x: 0, y: 0 },
    animate: {
      x: [0, 1, 0],
      y: [0, 1, 0],
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const backRef = ref<SVGPathElement | null>(null);
  const frontRef = ref<SVGPathElement | null>(null);
  const backMotion = useMotion(backRef, {
    initial: backVariants.normal,
    enter: backVariants.normal,
  });
  const frontMotion = useMotion(frontRef, {
    initial: frontVariants.normal,
    enter: frontVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    backMotion.apply(backVariants.animate);
    frontMotion.apply(frontVariants.animate);
  };

  const stopAnimation = () => {
    backMotion.apply(backVariants.normal);
    frontMotion.apply(frontVariants.normal);
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
