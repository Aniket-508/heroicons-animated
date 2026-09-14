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
        ref="p0Ref"
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Z"
      />
      <path
        ref="p1Ref"
        d="M13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z"
      />
      <path
        ref="p2Ref"
        d="M13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
      />
      <path
        ref="p3Ref"
        d="M3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Squares2X2Icon",
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

  const createVariants = (index: number) => ({
    normal: {
      opacity: 1,
      scale: 1,
    },
    animate: {
      opacity: [0, 1],
      scale: [0.6, 1],
      transition: {
        duration: 0.35,
        delay: index * 0.08,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  });

  const p0Ref = ref<SVGPathElement | null>(null);
  const p1Ref = ref<SVGPathElement | null>(null);
  const p2Ref = ref<SVGPathElement | null>(null);
  const p3Ref = ref<SVGPathElement | null>(null);

  const m0 = useMotion(p0Ref, {
    initial: createVariants(0).normal,
    enter: createVariants(0).normal,
  });
  const m1 = useMotion(p1Ref, {
    initial: createVariants(1).normal,
    enter: createVariants(1).normal,
  });
  const m2 = useMotion(p2Ref, {
    initial: createVariants(3).normal,
    enter: createVariants(3).normal,
  });
  const m3 = useMotion(p3Ref, {
    initial: createVariants(4).normal,
    enter: createVariants(4).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    m0.apply(createVariants(0).animate);
    m1.apply(createVariants(1).animate);
    m2.apply(createVariants(3).animate);
    m3.apply(createVariants(4).animate);
  };

  const stopAnimation = () => {
    m0.apply(createVariants(0).normal);
    m1.apply(createVariants(1).normal);
    m2.apply(createVariants(3).normal);
    m3.apply(createVariants(4).normal);
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
