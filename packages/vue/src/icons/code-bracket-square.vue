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
        d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
      />
      <path ref="leftBracketRef" d="M9.75 9.75L7.5 12l2.25 2.25" />
      <path ref="rightBracketRef" d="M14.25 9.75 16.5 12l-2.25 2.25" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "CodeBracketSquareIcon",
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

  const createCodeVariants = (direction: number) => ({
    normal: {
      x: 0,
      rotate: 0,
      opacity: 1,
    },
    animate: {
      x: [0, direction * 1.5, 0],
      rotate: [0, direction * -6, 0],
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  });

  const leftBracketVariants = createCodeVariants(-1);
  const rightBracketVariants = createCodeVariants(1);

  const leftBracketRef = ref<SVGPathElement | null>(null);
  const rightBracketRef = ref<SVGPathElement | null>(null);

  const leftBracketMotion = useMotion(leftBracketRef, {
    initial: leftBracketVariants.normal,
    enter: leftBracketVariants.normal,
  });
  const rightBracketMotion = useMotion(rightBracketRef, {
    initial: rightBracketVariants.normal,
    enter: rightBracketVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    leftBracketMotion.apply(leftBracketVariants.animate);
    rightBracketMotion.apply(rightBracketVariants.animate);
  };

  const stopAnimation = () => {
    leftBracketMotion.apply(leftBracketVariants.normal);
    rightBracketMotion.apply(rightBracketVariants.normal);
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
