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
        ref="pathRef"
        d="M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071"
      />
      <circle ref="circleRef0" cx="5.25" cy="12" r="2.25" />
      <circle ref="circleRef1" cx="18.75" cy="4.5" r="2.25" />
      <circle ref="circleRef2" cx="18.75" cy="19.5" r="2.25" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ShareIcon",
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

  const lineVariants = {
    normal: {
      pathLength: 1,
      opacity: 1,
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const createNodeVariants = (delay: number) => ({
    normal: {
      scale: 1,
    },
    animate: {
      scale: [1, 1.3, 1],
      transition: {
        delay,
        duration: 0.3,
        ease: "easeOut",
      },
    },
  });

  const pathRef = ref<SVGPathElement | null>(null);
  const circleRef0 = ref<SVGCircleElement | null>(null);
  const circleRef1 = ref<SVGCircleElement | null>(null);
  const circleRef2 = ref<SVGCircleElement | null>(null);

  const pathMotion = useMotion(pathRef, {
    initial: lineVariants.normal,
    enter: lineVariants.normal,
  });
  const circle0Motion = useMotion(circleRef0, {
    initial: createNodeVariants(0).normal,
    enter: createNodeVariants(0).normal,
  });
  const circle1Motion = useMotion(circleRef1, {
    initial: createNodeVariants(0.15).normal,
    enter: createNodeVariants(0.15).normal,
  });
  const circle2Motion = useMotion(circleRef2, {
    initial: createNodeVariants(0.3).normal,
    enter: createNodeVariants(0.3).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    pathMotion.apply(lineVariants.animate);
    circle0Motion.apply(createNodeVariants(0).animate);
    circle1Motion.apply(createNodeVariants(0.15).animate);
    circle2Motion.apply(createNodeVariants(0.3).animate);
  };

  const stopAnimation = () => {
    pathMotion.apply(lineVariants.normal);
    circle0Motion.apply(createNodeVariants(0).normal);
    circle1Motion.apply(createNodeVariants(0.15).normal);
    circle2Motion.apply(createNodeVariants(0.3).normal);
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
