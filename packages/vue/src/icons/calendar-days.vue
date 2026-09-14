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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
      <path ref="dot1Ref" d="M12 12.75h.008v.008H12v-.008Z" />
      <path ref="dot2Ref" d="M14.25 12.75h.008v.008h-.008v-.008Z" />
      <path ref="dot3Ref" d="M16.5 12.75h.008v.008H16.5v-.008Z" />
      <path ref="dot4Ref" d="M7.5 15h.008v.008H7.5V15Z" />
      <path ref="dot5Ref" d="M9.75 15h.008v.008H9.75V15Z" />
      <path ref="dot6Ref" d="M12 15h.008v.008H12V15Z" />
      <path ref="dot7Ref" d="M14.25 15h.008v.008h-.008V15Z" />
      <path ref="dot8Ref" d="M16.5 15h.008v.008H16.5V15Z" />
      <path ref="dot9Ref" d="M7.5 17.25h.008v.008H7.5v-.008Z" />
      <path ref="dot10Ref" d="M9.75 17.25h.008v.008H9.75v-.008Z" />
      <path ref="dot11Ref" d="M12 17.25h.008v.008H12v-.008Z" />
      <path ref="dot12Ref" d="M14.25 17.25h.008v.008h-.008v-.008Z" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "CalendarDaysIcon",
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

  const createDotVariants = (custom: number) => ({
    normal: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    animate: {
      opacity: [1, 0.3, 1],
      transition: {
        delay: custom * 0.1,
        duration: 0.4,
        times: [0, 0.5, 1],
      },
    },
  });

  const dot1Ref = ref<SVGPathElement>();
  const dot2Ref = ref<SVGPathElement>();
  const dot3Ref = ref<SVGPathElement>();
  const dot4Ref = ref<SVGPathElement>();
  const dot5Ref = ref<SVGPathElement>();
  const dot6Ref = ref<SVGPathElement>();
  const dot7Ref = ref<SVGPathElement>();
  const dot8Ref = ref<SVGPathElement>();
  const dot9Ref = ref<SVGPathElement>();
  const dot10Ref = ref<SVGPathElement>();
  const dot11Ref = ref<SVGPathElement>();
  const dot12Ref = ref<SVGPathElement>();

  const dot0Variants = createDotVariants(0);
  const dot1Variants = createDotVariants(1);
  const dot2Variants = createDotVariants(2);
  const dot3Variants = createDotVariants(3);
  const dot4Variants = createDotVariants(4);
  const dot5Variants = createDotVariants(5);
  const dot6Variants = createDotVariants(6);
  const dot7Variants = createDotVariants(7);
  const dot8Variants = createDotVariants(8);
  const dot9Variants = createDotVariants(9);
  const dot10Variants = createDotVariants(10);
  const dot11Variants = createDotVariants(11);

  const dotMotions = [
    useMotion(dot1Ref, {
      initial: dot0Variants.normal,
      enter: dot0Variants.normal,
    }),
    useMotion(dot2Ref, {
      initial: dot1Variants.normal,
      enter: dot1Variants.normal,
    }),
    useMotion(dot3Ref, {
      initial: dot2Variants.normal,
      enter: dot2Variants.normal,
    }),
    useMotion(dot4Ref, {
      initial: dot3Variants.normal,
      enter: dot3Variants.normal,
    }),
    useMotion(dot5Ref, {
      initial: dot4Variants.normal,
      enter: dot4Variants.normal,
    }),
    useMotion(dot6Ref, {
      initial: dot5Variants.normal,
      enter: dot5Variants.normal,
    }),
    useMotion(dot7Ref, {
      initial: dot6Variants.normal,
      enter: dot6Variants.normal,
    }),
    useMotion(dot8Ref, {
      initial: dot7Variants.normal,
      enter: dot7Variants.normal,
    }),
    useMotion(dot9Ref, {
      initial: dot8Variants.normal,
      enter: dot8Variants.normal,
    }),
    useMotion(dot10Ref, {
      initial: dot9Variants.normal,
      enter: dot9Variants.normal,
    }),
    useMotion(dot11Ref, {
      initial: dot10Variants.normal,
      enter: dot10Variants.normal,
    }),
    useMotion(dot12Ref, {
      initial: dot11Variants.normal,
      enter: dot11Variants.normal,
    }),
  ];

  const dotVariants = [
    dot0Variants,
    dot1Variants,
    dot2Variants,
    dot3Variants,
    dot4Variants,
    dot5Variants,
    dot6Variants,
    dot7Variants,
    dot8Variants,
    dot9Variants,
    dot10Variants,
    dot11Variants,
  ];

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const dotMotion of dotMotions) {
      dotMotion.apply(dotVariants[index].animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const dotMotion of dotMotions) {
      dotMotion.apply(dotVariants[index].normal);
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
