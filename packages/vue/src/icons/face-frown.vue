<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <svg
      ref="faceRef"
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="props.color"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="transform-origin: 50% 50%"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        ref="mouthRef"
        d="M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
      />
      <path
        ref="leftEyeRef"
        d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
      />
      <path
        ref="rightEyeRef"
        d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "FaceFrownIcon",
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

  const faceVariants = {
    normal: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    animate: {
      scale: [1, 1.15, 1.05, 1.08],
      rotate: [0, -2, 2, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  const mouthVariants = {
    normal: {
      d: "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
      pathLength: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    animate: {
      d: [
        "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
        "M15.5 17C14.5 16 13 15.5 12 15.5C11 15.5 9.5 16 8.5 17",
        "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
      ],
      pathLength: [0.3, 1, 1],
      transition: {
        d: { duration: 0.5, ease: "easeOut" },
        pathLength: {
          duration: 0.5,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
        delay: 0.1,
      },
    },
  };

  const leftEyeVariants = {
    normal: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    animate: {
      scale: [1, 1.3, 0.9, 1.1],
      y: [0, -0.5, 0.3, 0],
      transition: {
        duration: 0.6,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  const rightEyeVariants = {
    normal: {
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    animate: {
      scale: [1, 0.9, 1.3, 1.1],
      y: [0, -0.5, 0.3, 0],
      transition: {
        duration: 0.6,
        times: [0, 0.3, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  const faceRef = ref<SVGSVGElement | null>(null);
  const mouthRef = ref<SVGPathElement | null>(null);
  const leftEyeRef = ref<SVGPathElement | null>(null);
  const rightEyeRef = ref<SVGPathElement | null>(null);

  const faceMotion = useMotion(faceRef, {
    initial: faceVariants.normal,
    enter: faceVariants.normal,
  });
  const mouthMotion = useMotion(mouthRef, {
    initial: mouthVariants.normal,
    enter: mouthVariants.normal,
  });
  const leftEyeMotion = useMotion(leftEyeRef, {
    initial: leftEyeVariants.normal,
    enter: leftEyeVariants.normal,
  });
  const rightEyeMotion = useMotion(rightEyeRef, {
    initial: rightEyeVariants.normal,
    enter: rightEyeVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    faceMotion.apply(faceVariants.animate);
    mouthMotion.apply(mouthVariants.animate);
    leftEyeMotion.apply(leftEyeVariants.animate);
    rightEyeMotion.apply(rightEyeVariants.animate);
  };

  const stopAnimation = () => {
    faceMotion.apply(faceVariants.normal);
    mouthMotion.apply(mouthVariants.normal);
    leftEyeMotion.apply(leftEyeVariants.normal);
    rightEyeMotion.apply(rightEyeVariants.normal);
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
