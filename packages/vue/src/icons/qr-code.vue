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
        d="M3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H9.375C9.99632 3.75 10.5 4.25368 10.5 4.875V9.375C10.5 9.99632 9.99632 10.5 9.375 10.5H4.875C4.25368 10.5 3.75 9.99632 3.75 9.375V4.875Z"
      />
      <path
        d="M3.75 14.625C3.75 14.0037 4.25368 13.5 4.875 13.5H9.375C9.99632 13.5 10.5 14.0037 10.5 14.625V19.125C10.5 19.7463 9.99632 20.25 9.375 20.25H4.875C4.25368 20.25 3.75 19.7463 3.75 19.125V14.625Z"
      />
      <path
        d="M13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75H19.125C19.7463 3.75 20.25 4.25368 20.25 4.875V9.375C20.25 9.99632 19.7463 10.5 19.125 10.5H14.625C14.0037 10.5 13.5 9.99632 13.5 9.375V4.875Z"
      />
      <path ref="dot0Ref" d="M6.75 6.75H7.5V7.5H6.75V6.75Z" />
      <path ref="dot1Ref" d="M6.75 16.5H7.5V17.25H6.75V16.5Z" />
      <path ref="dot2Ref" d="M16.5 6.75H17.25V7.5H16.5V6.75Z" />
      <path ref="dot3Ref" d="M13.5 13.5H14.25V14.25H13.5V13.5Z" />
      <path ref="dot4Ref" d="M13.5 19.5H14.25V20.25H13.5V19.5Z" />
      <path ref="dot5Ref" d="M19.5 13.5H20.25V14.25H19.5V13.5Z" />
      <path ref="dot6Ref" d="M19.5 19.5H20.25V20.25H19.5V19.5Z" />
      <path ref="dot7Ref" d="M16.5 16.5H17.25V17.25H16.5V16.5Z" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "QrCodeIcon",
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

  const createDotVariants = (delay: number) => ({
    normal: {
      opacity: 1,
      scale: 1,
    },
    animate: {
      opacity: [0, 1],
      scale: [0, 1.2, 1],
      transition: { delay, duration: 0.3, ease: "easeOut" },
    },
  });

  const DELAYS = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35];
  const dot0Ref = ref<SVGPathElement | null>(null);
  const dot1Ref = ref<SVGPathElement | null>(null);
  const dot2Ref = ref<SVGPathElement | null>(null);
  const dot3Ref = ref<SVGPathElement | null>(null);
  const dot4Ref = ref<SVGPathElement | null>(null);
  const dot5Ref = ref<SVGPathElement | null>(null);
  const dot6Ref = ref<SVGPathElement | null>(null);
  const dot7Ref = ref<SVGPathElement | null>(null);

  const motion0 = useMotion(dot0Ref, {
    initial: createDotVariants(0).normal,
    enter: createDotVariants(0).normal,
  });
  const motion1 = useMotion(dot1Ref, {
    initial: createDotVariants(0.05).normal,
    enter: createDotVariants(0.05).normal,
  });
  const motion2 = useMotion(dot2Ref, {
    initial: createDotVariants(0.1).normal,
    enter: createDotVariants(0.1).normal,
  });
  const motion3 = useMotion(dot3Ref, {
    initial: createDotVariants(0.15).normal,
    enter: createDotVariants(0.15).normal,
  });
  const motion4 = useMotion(dot4Ref, {
    initial: createDotVariants(0.2).normal,
    enter: createDotVariants(0.2).normal,
  });
  const motion5 = useMotion(dot5Ref, {
    initial: createDotVariants(0.25).normal,
    enter: createDotVariants(0.25).normal,
  });
  const motion6 = useMotion(dot6Ref, {
    initial: createDotVariants(0.3).normal,
    enter: createDotVariants(0.3).normal,
  });
  const motion7 = useMotion(dot7Ref, {
    initial: createDotVariants(0.35).normal,
    enter: createDotVariants(0.35).normal,
  });

  const motions = [
    motion0,
    motion1,
    motion2,
    motion3,
    motion4,
    motion5,
    motion6,
    motion7,
  ];

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const delay of DELAYS) {
      motions[index].apply(createDotVariants(delay).animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const motion of motions) {
      motion.apply(createDotVariants(DELAYS[index]).normal);
      index += 1;
    }
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
