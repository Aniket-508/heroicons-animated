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
      <g ref="leftPageRef" style="transform-origin: 100% 50%">
        <path
          d="M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917"
        />
      </g>
      <g ref="rightPageRef" style="transform-origin: 0% 50%">
        <path
          d="M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917"
        />
      </g>
      <path d="M12 6.04168V20.2917" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "BookOpenIcon",
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

  const leftPageVariants = {
    normal: {
      rotateY: 0,
    },
    animate: {
      rotateY: [0, 15, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const rightPageVariants = {
    normal: {
      rotateY: 0,
    },
    animate: {
      rotateY: [0, -15, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const leftPageRef = ref<SVGGElement>();
  const rightPageRef = ref<SVGGElement>();

  const leftPageMotion = useMotion(leftPageRef, {
    initial: leftPageVariants.normal,
    enter: leftPageVariants.normal,
  });

  const rightPageMotion = useMotion(rightPageRef, {
    initial: rightPageVariants.normal,
    enter: rightPageVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    leftPageMotion.apply(leftPageVariants.animate);
    rightPageMotion.apply(rightPageVariants.animate);
  };

  const stopAnimation = () => {
    leftPageMotion.apply(leftPageVariants.normal);
    rightPageMotion.apply(rightPageVariants.normal);
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
