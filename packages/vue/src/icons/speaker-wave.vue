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
        d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
      <path ref="wave1Ref" d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424" />
      <path ref="wave2Ref" d="M19.114 5.636a9 9 0 0 1 0 12.728" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SpeakerWaveIcon",
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
