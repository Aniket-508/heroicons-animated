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
      <path ref="topBarRef" d="M3.75 6.75h16.5" />
      <path ref="centerBarRef" d="M3.75 12H12" />
      <path ref="bottomBarRef" d="M3.75 17.25h16.5" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Bars3CenterLeftIcon",
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

  const createSlideVariants = (delay: number) => ({
    normal: {
      translateX: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    animate: {
      translateX: [0, -3, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay,
      },
    },
  });

  const centerBarVariants = {
    normal: {
      translateX: 0,
      pathLength: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    animate: {
      translateX: [0, -2, 0],
      pathLength: [1, 0.5, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.05,
      },
    },
  };

  const topBarRef = ref<SVGPathElement>();
  const centerBarRef = ref<SVGPathElement>();
  const bottomBarRef = ref<SVGPathElement>();

  const topBarVariants = createSlideVariants(0);
  const bottomBarVariants = createSlideVariants(0.1);

  const topBarMotion = useMotion(topBarRef, {
    initial: topBarVariants.normal,
    enter: topBarVariants.normal,
  });

  const centerBarMotion = useMotion(centerBarRef, {
    initial: centerBarVariants.normal,
    enter: centerBarVariants.normal,
  });

  const bottomBarMotion = useMotion(bottomBarRef, {
    initial: bottomBarVariants.normal,
    enter: bottomBarVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    topBarMotion.apply(topBarVariants.animate);
    centerBarMotion.apply(centerBarVariants.animate);
    bottomBarMotion.apply(bottomBarVariants.animate);
  };

  const stopAnimation = () => {
    topBarMotion.apply(topBarVariants.normal);
    centerBarMotion.apply(centerBarVariants.normal);
    bottomBarMotion.apply(bottomBarVariants.normal);
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
