<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <svg
      class="overflow-visible"
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
      <line
        ref="line0Ref"
        stroke-linecap="round"
        :stroke-width="props.strokeWidth"
        x1="0"
        x2="5"
        y1="8"
        y2="8"
      />
      <line
        ref="line1Ref"
        stroke-linecap="round"
        :stroke-width="props.strokeWidth"
        x1="-1"
        x2="6"
        y1="11"
        y2="11"
      />
      <line
        ref="line2Ref"
        stroke-linecap="round"
        :stroke-width="props.strokeWidth"
        x1="0"
        x2="4"
        y1="14"
        y2="14"
      />
      <path
        ref="pathRef"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "TruckIcon",
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

  const truckVariants = {
    normal: { x: 0, y: 0 },
    animate: {
      y: [0, -1, 0, -0.5, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
  };

  const createSpeedLineVariants = (i: number) => ({
    normal: {
      opacity: 0,
      x: 0,
      scaleX: 0,
    },
    animate: {
      opacity: [0, 0.7, 0.5, 0],
      x: [0, -4, -10, -16],
      scaleX: [0.2, 1, 0.8, 0.3],
      transition: {
        duration: 0.5,
        ease: "easeOut",
        repeat: Number.POSITIVE_INFINITY,
        delay: i * 0.08,
        times: [0, 0.2, 0.6, 1],
      },
    },
  });

  const pathRef = ref<SVGPathElement | null>(null);
  const line0Ref = ref<SVGLineElement | null>(null);
  const line1Ref = ref<SVGLineElement | null>(null);
  const line2Ref = ref<SVGLineElement | null>(null);

  const pathMotion = useMotion(pathRef, {
    initial: truckVariants.normal,
    enter: truckVariants.normal,
  });
  const lineMotion0 = useMotion(line0Ref, {
    initial: createSpeedLineVariants(0).normal,
    enter: createSpeedLineVariants(0).normal,
  });
  const lineMotion1 = useMotion(line1Ref, {
    initial: createSpeedLineVariants(1).normal,
    enter: createSpeedLineVariants(1).normal,
  });
  const lineMotion2 = useMotion(line2Ref, {
    initial: createSpeedLineVariants(2).normal,
    enter: createSpeedLineVariants(2).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    pathMotion.apply(truckVariants.animate);
    lineMotion0.apply(createSpeedLineVariants(0).animate);
    lineMotion1.apply(createSpeedLineVariants(1).animate);
    lineMotion2.apply(createSpeedLineVariants(2).animate);
  };

  const stopAnimation = () => {
    pathMotion.apply(truckVariants.normal);
    lineMotion0.apply(createSpeedLineVariants(0).normal);
    lineMotion1.apply(createSpeedLineVariants(1).normal);
    lineMotion2.apply(createSpeedLineVariants(2).normal);
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
