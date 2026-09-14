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
      <circle ref="circleRef" cx="12" cy="12" r="4.5" />
      <path
        ref="pathRef"
        d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "AtSymbolIcon",
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

  const circleVariants = {
    normal: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 0.4,
        opacity: { duration: 0.1 },
      },
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      pathOffset: [1, 0],
      transition: {
        duration: 0.3,
        opacity: { duration: 0.1 },
      },
    },
  };

  const pathVariants = {
    normal: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
        opacity: { duration: 0.1, delay: 0.3 },
      },
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        delay: 0.3,
        duration: 0.3,
        opacity: { duration: 0.1, delay: 0.3 },
      },
    },
  };

  const circleRef = ref<SVGCircleElement>();
  const pathRef = ref<SVGPathElement>();
  const circleMotion = useMotion(circleRef, {
    initial: circleVariants.normal,
    enter: circleVariants.normal,
  });
  const pathMotion = useMotion(pathRef, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    circleMotion.apply(circleVariants.animate);
    pathMotion.apply(pathVariants.animate);
  };

  const stopAnimation = () => {
    circleMotion.apply(circleVariants.normal);
    pathMotion.apply(pathVariants.normal);
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
