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
        d="M13.75 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
      />
      <path ref="vertRef" d="M18 7.5v6" />
      <path ref="horizRef" d="M15 10.5h6" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "UserPlusIcon",
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

  const vertVariants = {
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        delay: 0.3,
        duration: 0.2,
        opacity: { duration: 0.1, delay: 0.3 },
      },
    },
  };
  const horizVariants = {
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      transition: {
        delay: 0.6,
        duration: 0.2,
        opacity: { duration: 0.1, delay: 0.6 },
      },
    },
  };

  const vertRef = ref<SVGPathElement | null>(null);
  const horizRef = ref<SVGPathElement | null>(null);
  const motionVert = useMotion(vertRef, {
    initial: vertVariants.normal,
    enter: vertVariants.normal,
  });
  const motionHoriz = useMotion(horizRef, {
    initial: horizVariants.normal,
    enter: horizVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionVert.apply(vertVariants.animate);
    motionHoriz.apply(horizVariants.animate);
  };

  const stopAnimation = () => {
    motionVert.apply(vertVariants.normal);
    motionHoriz.apply(horizVariants.normal);
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
