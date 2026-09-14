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
        ref="bar1Ref"
        d="M3.75 5.25h16.5"
        style="transform-origin: center"
      />
      <path
        ref="bar2Ref"
        d="M3.75 9.75h16.5"
        style="transform-origin: center"
      />
      <path
        ref="bar3Ref"
        d="M3.75 14.25h16.5"
        style="transform-origin: center"
      />
      <path
        ref="bar4Ref"
        d="M3.75 18.75h16.5"
        style="transform-origin: center"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "Bars4Icon",
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

  const createBarVariants = (delay: number) => ({
    normal: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    animate: {
      scaleX: [1, 0.6, 1],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        delay,
      },
    },
  });

  const bar1Variants = createBarVariants(0);
  const bar2Variants = createBarVariants(0.1);
  const bar3Variants = createBarVariants(0.2);
  const bar4Variants = createBarVariants(0.3);

  const bar1Ref = ref<SVGPathElement | null>(null);
  const bar2Ref = ref<SVGPathElement | null>(null);
  const bar3Ref = ref<SVGPathElement | null>(null);
  const bar4Ref = ref<SVGPathElement | null>(null);
  const barRefs = [bar1Ref, bar2Ref, bar3Ref, bar4Ref] as const;
  const barVariants = [
    bar1Variants,
    bar2Variants,
    bar3Variants,
    bar4Variants,
  ] as const;
  const barMotions = barRefs.map((barRef, index) =>
    useMotion(barRef, {
      initial: barVariants[index].normal,
      enter: barVariants[index].normal,
    })
  );

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const barMotion of barMotions) {
      barMotion.apply(barVariants[index].animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const barMotion of barMotions) {
      barMotion.apply(barVariants[index].normal);
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
