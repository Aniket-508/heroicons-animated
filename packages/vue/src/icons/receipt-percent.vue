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
        d="M19.5 4.75699V21.75L15.75 20.25L12 21.75L8.25 20.25L4.5 21.75V4.75699C4.5 3.649 5.30608 2.70014 6.40668 2.57241C8.24156 2.35947 10.108 2.25 12 2.25C13.892 2.25 15.7584 2.35947 17.5933 2.57241C18.6939 2.70014 19.5 3.649 19.5 4.75699Z"
      />
      <path ref="percentLineRef" d="M9 14.25L15 8.25" />
      <path
        ref="dot1Ref"
        d="M9.75 9H9.7575V9.0075H9.75V9ZM10.125 9C10.125 9.20711 9.95711 9.375 9.75 9.375C9.54289 9.375 9.375 9.20711 9.375 9C9.375 8.79289 9.54289 8.625 9.75 8.625C9.95711 8.625 10.125 8.79289 10.125 9Z"
      />
      <path
        ref="dot2Ref"
        d="M14.25 13.5H14.2575V13.5075H14.25V13.5ZM14.625 13.5C14.625 13.7071 14.4571 13.875 14.25 13.875C14.0429 13.875 13.875 13.7071 13.875 13.5C13.875 13.2929 14.0429 13.125 14.25 13.125C14.4571 13.125 14.625 13.2929 14.625 13.5Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ReceiptPercentIcon",
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

  const percentVariants = {
    normal: {
      opacity: 1,
      pathLength: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut",
        opacity: { duration: 0.1 },
      },
    },
  };

  const createDotVariants = (delay: number) => ({
    normal: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: { delay, duration: 0.3, ease: "easeOut" },
    },
  });

  const percentLineRef = ref<SVGPathElement | null>(null);
  const dot1Ref = ref<SVGPathElement | null>(null);
  const dot2Ref = ref<SVGPathElement | null>(null);
  const percentMotion = useMotion(percentLineRef, {
    initial: percentVariants.normal,
    enter: percentVariants.normal,
  });
  const dot1Motion = useMotion(dot1Ref, {
    initial: createDotVariants(0.2).normal,
    enter: createDotVariants(0.2).normal,
  });
  const dot2Motion = useMotion(dot2Ref, {
    initial: createDotVariants(0.35).normal,
    enter: createDotVariants(0.35).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    percentMotion.apply(percentVariants.animate);
    dot1Motion.apply(createDotVariants(0.2).animate);
    dot2Motion.apply(createDotVariants(0.35).animate);
  };

  const stopAnimation = () => {
    percentMotion.apply(percentVariants.normal);
    dot1Motion.apply(createDotVariants(0.2).normal);
    dot2Motion.apply(createDotVariants(0.35).normal);
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
