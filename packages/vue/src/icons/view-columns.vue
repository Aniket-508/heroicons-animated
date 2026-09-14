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
        d="M4.125 19.5h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z"
      />
      <path ref="line0Ref" d="M9 4.5v15" />
      <path ref="line1Ref" d="M15 4.5v15" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ViewColumnsIcon",
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

  const createLineVariants = (index: number) => ({
    normal: {
      pathLength: 1,
      opacity: 1,
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        delay: 0.2 + index * 0.15,
        duration: 0.3,
        ease: "linear",
      },
    },
  });

  const line0Ref = ref<SVGPathElement | null>(null);
  const line1Ref = ref<SVGPathElement | null>(null);
  const motion0 = useMotion(line0Ref, {
    initial: createLineVariants(0).normal,
    enter: createLineVariants(0).normal,
  });
  const motion1 = useMotion(line1Ref, {
    initial: createLineVariants(1).normal,
    enter: createLineVariants(1).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion0.apply(createLineVariants(0).animate);
    motion1.apply(createLineVariants(1).animate);
  };

  const stopAnimation = () => {
    motion0.apply(createLineVariants(0).normal);
    motion1.apply(createLineVariants(1).normal);
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
