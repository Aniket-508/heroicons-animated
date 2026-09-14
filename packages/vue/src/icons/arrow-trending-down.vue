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
        ref="pathRef"
        d="M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919"
      />
      <path
        ref="arrowRef"
        d="M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ArrowTrendingDownIcon",
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

  const svgVariants = {
    normal: {
      translateX: 0,
      translateY: 0,
    },
    animate: {
      translateX: [0, 2, 0],
      translateY: [0, 2, 0],
      transition: {
        duration: 0.5,
      },
    },
  };

  const pathVariants = {
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        duration: 0.4,
        opacity: { duration: 0.1 },
      },
    },
  };

  const arrowVariants = {
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      pathOffset: [0.5, 0],
      transition: {
        delay: 0.3,
        duration: 0.3,
        opacity: { duration: 0.1, delay: 0.3 },
      },
    },
  };

  const svgRef = ref<SVGSVGElement>();
  const pathRef = ref<SVGPathElement>();
  const arrowRef = ref<SVGPathElement>();
  const svgMotion = useMotion(svgRef, {
    initial: svgVariants.normal,
    enter: svgVariants.normal,
  });
  const pathMotion = useMotion(pathRef, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const arrowMotion = useMotion(arrowRef, {
    initial: arrowVariants.normal,
    enter: arrowVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    svgMotion.apply(svgVariants.animate);
    pathMotion.apply(pathVariants.animate);
    arrowMotion.apply(arrowVariants.animate);
  };

  const stopAnimation = () => {
    svgMotion.apply(svgVariants.normal);
    pathMotion.apply(pathVariants.normal);
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
