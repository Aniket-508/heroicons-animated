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
      <path ref="path1Ref" d="M6 6l12 12" />
      <path ref="path2Ref" d="M18 6l-12 12" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "XMarkIcon",
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
      opacity: 1,
      pathLength: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
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

  const path2Animate = {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: { delay: 0.2 },
  };

  const startAnimation = () => {
    motion1.apply(pathVariants.animate);
    motion2.apply(path2Animate);
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

  defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
