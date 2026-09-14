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
      style="transform-origin: 25% 25%"
    >
      <path
        d="M9.56802 3H5.25C4.00736 3 3 4.00736 3 5.25V9.56802C3 10.1648 3.23705 10.7371 3.65901 11.159L13.2401 20.7401C13.9388 21.4388 15.0199 21.6117 15.8465 21.0705C17.9271 19.7084 19.7084 17.9271 21.0705 15.8465C21.6117 15.0199 21.4388 13.9388 20.7401 13.2401L11.159 3.65901C10.7371 3.23705 10.1648 3 9.56802 3Z"
      />
      <path d="M6 6H6.0075V6.0075H6V6Z" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TagIcon",
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

  const variants = {
    normal: {
      rotate: 0,
    },
    animate: {
      rotate: [0, -10, 8, -5, 3, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const svgRef = ref<SVGSVGElement | null>(null);
  const motionInstance = useMotion(svgRef, {
    initial: variants.normal,
    enter: variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionInstance.apply(variants.animate);
  };

  const stopAnimation = () => {
    motionInstance.apply(variants.normal);
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
