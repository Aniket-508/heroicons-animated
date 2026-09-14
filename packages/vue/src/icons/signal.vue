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
        d="M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
      <path
        ref="wave1Ref"
        d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304"
        style="transform-origin: 12px 12px"
      />
      <path
        ref="wave2Ref"
        d="M7.227 16.773a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546"
        style="transform-origin: 12px 12px"
      />
      <path
        ref="wave3Ref"
        d="M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788"
        style="transform-origin: 12px 12px"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SignalIcon",
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
  const wave3Ref = ref<SVGPathElement | null>(null);

  const motion1 = useMotion(wave1Ref, {
    initial: createWaveVariants(1).normal,
    enter: createWaveVariants(1).normal,
  });
  const motion2 = useMotion(wave2Ref, {
    initial: createWaveVariants(2).normal,
    enter: createWaveVariants(2).normal,
  });
  const motion3 = useMotion(wave3Ref, {
    initial: createWaveVariants(3).normal,
    enter: createWaveVariants(3).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion1.apply(createWaveVariants(1).animate);
    motion2.apply(createWaveVariants(2).animate);
    motion3.apply(createWaveVariants(3).animate);
  };

  const stopAnimation = () => {
    motion1.apply(createWaveVariants(1).normal);
    motion2.apply(createWaveVariants(2).normal);
    motion3.apply(createWaveVariants(3).normal);
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
