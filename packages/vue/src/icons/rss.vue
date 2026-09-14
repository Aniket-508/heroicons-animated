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
      <path d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      <path ref="wave1Ref" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5" />
      <path ref="wave2Ref" d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "RssIcon",
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

  const createWaveVariants = (custom: number) => ({
    normal: {
      opacity: 1,
      scale: 1,
    },
    animate: {
      opacity: 0,
      scale: 0,
      transition: {
        opacity: {
          duration: 0.2,
          ease: "easeInOut",
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 0.2,
          delay: 0.2 * (custom - 1),
        },
        scale: {
          duration: 0.2,
          ease: "easeInOut",
          repeat: 1,
          repeatType: "reverse",
          repeatDelay: 0.2,
          delay: 0.2 * (custom - 1),
        },
      },
    },
  });

  const wave1Ref = ref<SVGPathElement | null>(null);
  const wave2Ref = ref<SVGPathElement | null>(null);
  const motion1 = useMotion(wave1Ref, {
    initial: createWaveVariants(1).normal,
    enter: createWaveVariants(1).normal,
  });
  const motion2 = useMotion(wave2Ref, {
    initial: createWaveVariants(2).normal,
    enter: createWaveVariants(2).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion1.apply(createWaveVariants(1).animate);
    motion2.apply(createWaveVariants(2).animate);
  };

  const stopAnimation = () => {
    motion1.apply(createWaveVariants(1).normal);
    motion2.apply(createWaveVariants(2).normal);
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
