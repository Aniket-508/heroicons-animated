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
        d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3"
      />
      <path
        ref="lightsRef"
        d="M18.75 17.25h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ServerIcon",
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

  const containerVariants = {
    normal: { y: 0 },
    animate: {
      y: [0, -2, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const lightVariants = {
    normal: { opacity: 1 },
    animate: {
      opacity: [1, 0.4, 1, 0.4, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const svgRef = ref<SVGSVGElement | null>(null);
  const lightsRef = ref<SVGPathElement | null>(null);
  const svgMotion = useMotion(svgRef, {
    initial: containerVariants.normal,
    enter: containerVariants.normal,
  });
  const lightsMotion = useMotion(lightsRef, {
    initial: lightVariants.normal,
    enter: lightVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    svgMotion.apply(containerVariants.animate);
    lightsMotion.apply(lightVariants.animate);
  };

  const stopAnimation = () => {
    svgMotion.apply(containerVariants.normal);
    lightsMotion.apply(lightVariants.normal);
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
