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
        d="M12 1.964A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Z"
      />
      <g ref="exclamationRef" style="transform-origin: 50% 50%">
        <path d="M12 9v3.75" />
        <path d="M12 15.75h.008v.008H12v-.008Z" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ShieldExclamationIcon",
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

  const exclamationVariants = {
    normal: {
      opacity: 1,
      scale: 1,
    },
    animate: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const exclamationRef = ref<SVGGElement | null>(null);
  const motionInstance = useMotion(exclamationRef, {
    initial: exclamationVariants.normal,
    enter: exclamationVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionInstance.apply(exclamationVariants.animate);
  };

  const stopAnimation = () => {
    motionInstance.apply(exclamationVariants.normal);
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
