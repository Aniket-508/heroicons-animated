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
        ref="rect0Ref"
        d="M2.25 7.125C2.25 6.50368 2.75368 6 3.375 6H9.375C9.99632 6 10.5 6.50368 10.5 7.125V10.875C10.5 11.4963 9.99632 12 9.375 12H3.375C2.75368 12 2.25 11.4963 2.25 10.875V7.125Z"
      />
      <path
        ref="rect1Ref"
        d="M14.25 8.625C14.25 8.00368 14.7537 7.5 15.375 7.5H20.625C21.2463 7.5 21.75 8.00368 21.75 8.625V16.875C21.75 17.4963 21.2463 18 20.625 18H15.375C14.7537 18 14.25 17.4963 14.25 16.875V8.625Z"
      />
      <path
        ref="rect2Ref"
        d="M3.75 16.125C3.75 15.5037 4.25368 15 4.875 15H10.125C10.7463 15 11.25 15.5037 11.25 16.125V18.375C11.25 18.9963 10.7463 19.5 10.125 19.5H4.875C4.25368 19.5 3.75 18.9963 3.75 18.375V16.125Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "RectangleGroupIcon",
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

  const createRectVariants = (delay: number) => ({
    normal: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: [0.9, 1.05, 1],
      opacity: [0.5, 1, 1],
      transition: { delay, duration: 0.3, ease: "easeOut" },
    },
  });

  const rect0Ref = ref<SVGPathElement | null>(null);
  const rect1Ref = ref<SVGPathElement | null>(null);
  const rect2Ref = ref<SVGPathElement | null>(null);
  const motion0 = useMotion(rect0Ref, {
    initial: createRectVariants(0).normal,
    enter: createRectVariants(0).normal,
  });
  const motion1 = useMotion(rect1Ref, {
    initial: createRectVariants(0.1).normal,
    enter: createRectVariants(0.1).normal,
  });
  const motion2 = useMotion(rect2Ref, {
    initial: createRectVariants(0.2).normal,
    enter: createRectVariants(0.2).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion0.apply(createRectVariants(0).animate);
    motion1.apply(createRectVariants(0.1).animate);
    motion2.apply(createRectVariants(0.2).animate);
  };

  const stopAnimation = () => {
    motion0.apply(createRectVariants(0).normal);
    motion1.apply(createRectVariants(0.1).normal);
    motion2.apply(createRectVariants(0.2).normal);
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
