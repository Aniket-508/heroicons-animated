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
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
      />
      <path ref="window1Ref" d="M6.75 12.75h.75" />
      <path ref="window2Ref" d="M6.75 9.75h.75" />
      <path ref="window3Ref" d="M6.75 6.75h.75" />
      <path ref="window4Ref" d="M10.5 12.75h.75" />
      <path ref="window5Ref" d="M10.5 9.75h.75" />
      <path ref="window6Ref" d="M10.5 6.75h.75" />
      <path ref="window7Ref" d="M17.25 17h.008v.008h-.008v-.008Z" />
      <path ref="window8Ref" d="M17.25 14h.008v.008h-.008v-.008Z" />
      <path ref="window9Ref" d="M17.25 11h.008v.008h-.008v-.008Z" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "BuildingOffice2Icon",
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

  const createWindowVariants = (custom: number) => ({
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      transition: {
        duration: 0.3,
        ease: "linear",
        delay: 0.1 + custom * 0.15,
      },
    },
  });

  const window0Variants = createWindowVariants(0);
  const window1Variants = createWindowVariants(1);
  const window2Variants = createWindowVariants(2);

  const window1Ref = ref<SVGPathElement | null>(null);
  const window2Ref = ref<SVGPathElement | null>(null);
  const window3Ref = ref<SVGPathElement | null>(null);
  const window4Ref = ref<SVGPathElement | null>(null);
  const window5Ref = ref<SVGPathElement | null>(null);
  const window6Ref = ref<SVGPathElement | null>(null);
  const window7Ref = ref<SVGPathElement | null>(null);
  const window8Ref = ref<SVGPathElement | null>(null);
  const window9Ref = ref<SVGPathElement | null>(null);
  const windowRefs = [
    window1Ref,
    window2Ref,
    window3Ref,
    window4Ref,
    window5Ref,
    window6Ref,
    window7Ref,
    window8Ref,
    window9Ref,
  ] as const;
  const windowVariants = [
    window0Variants,
    window1Variants,
    window2Variants,
    window0Variants,
    window1Variants,
    window2Variants,
    window0Variants,
    window1Variants,
    window2Variants,
  ] as const;
  const windowMotions = windowRefs.map((windowRef, index) =>
    useMotion(windowRef, {
      initial: windowVariants[index].normal,
      enter: windowVariants[index].normal,
    })
  );

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const windowMotion of windowMotions) {
      windowMotion.apply(windowVariants[index].animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const windowMotion of windowMotions) {
      windowMotion.apply(windowVariants[index].normal);
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
