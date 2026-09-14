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
        d="M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21"
      />
      <path ref="b0Ref" d="M5.25 6H5.2575V6.0075H5.25V6Z" />
      <path ref="b1Ref" d="M7.5 6H7.5075V6.0075H7.5V6Z" />
      <path ref="b2Ref" d="M9.75 6H9.7575V6.0075H9.75V6Z" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "WindowIcon",
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

  const createButtonVariants = (delay: number) => ({
    normal: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: [0, 1.3, 1],
      opacity: [0, 1, 1],
      transition: { delay, duration: 0.3, ease: "easeOut" },
    },
  });

  const b0Ref = ref<SVGPathElement | null>(null);
  const b1Ref = ref<SVGPathElement | null>(null);
  const b2Ref = ref<SVGPathElement | null>(null);
  const m0 = useMotion(b0Ref, {
    initial: createButtonVariants(0).normal,
    enter: createButtonVariants(0).normal,
  });
  const m1 = useMotion(b1Ref, {
    initial: createButtonVariants(0.1).normal,
    enter: createButtonVariants(0.1).normal,
  });
  const m2 = useMotion(b2Ref, {
    initial: createButtonVariants(0.2).normal,
    enter: createButtonVariants(0.2).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    m0.apply(createButtonVariants(0).animate);
    m1.apply(createButtonVariants(0.1).animate);
    m2.apply(createButtonVariants(0.2).animate);
  };

  const stopAnimation = () => {
    m0.apply(createButtonVariants(0).normal);
    m1.apply(createButtonVariants(0.1).normal);
    m2.apply(createButtonVariants(0.2).normal);
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
