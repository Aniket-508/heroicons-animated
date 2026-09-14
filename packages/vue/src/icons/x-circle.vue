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
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path ref="path1Ref" d="m9.75 9.75 4.5 4.5" />
      <path ref="path2Ref" d="m14.25 9.75-4.5 4.5" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "XCircleIcon",
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

  const pathVariants = {
    normal: {
      pathLength: 1,
      opacity: 1,
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
    },
  };

  const path1Ref = ref<SVGPathElement | null>(null);
  const path2Ref = ref<SVGPathElement | null>(null);
  const motion1 = useMotion(path1Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const motion2 = useMotion(path2Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion1.apply(pathVariants.animate);
    motion2.apply({
      ...pathVariants.animate,
      transition: { delay: 0.2 },
    });
  };

  const stopAnimation = () => {
    motion1.apply(pathVariants.normal);
    motion2.apply(pathVariants.normal);
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
