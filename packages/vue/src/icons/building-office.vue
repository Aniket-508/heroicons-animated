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
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
      <path ref="floor1Ref" d="M9 12.75h1.5" />
      <path ref="floor2Ref" d="M13.5 12.75H15" />
      <path ref="floor3Ref" d="M9 9.75h1.5" />
      <path ref="floor4Ref" d="M13.5 9.75H15" />
      <path ref="floor5Ref" d="M9 6.75h1.5" />
      <path ref="floor6Ref" d="M13.5 6.75H15" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "BuildingOfficeIcon",
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

  const createFloorVariants = (custom: number) => ({
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

  const floor0Variants = createFloorVariants(0);
  const floor1Variants = createFloorVariants(1);
  const floor2Variants = createFloorVariants(2);

  const floor1Ref = ref<SVGPathElement | null>(null);
  const floor2Ref = ref<SVGPathElement | null>(null);
  const floor3Ref = ref<SVGPathElement | null>(null);
  const floor4Ref = ref<SVGPathElement | null>(null);
  const floor5Ref = ref<SVGPathElement | null>(null);
  const floor6Ref = ref<SVGPathElement | null>(null);
  const floorRefs = [
    floor1Ref,
    floor2Ref,
    floor3Ref,
    floor4Ref,
    floor5Ref,
    floor6Ref,
  ] as const;
  const floorVariants = [
    floor0Variants,
    floor0Variants,
    floor1Variants,
    floor1Variants,
    floor2Variants,
    floor2Variants,
  ] as const;
  const floorMotions = floorRefs.map((floorRef, index) =>
    useMotion(floorRef, {
      initial: floorVariants[index].normal,
      enter: floorVariants[index].normal,
    })
  );

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const floorMotion of floorMotions) {
      floorMotion.apply(floorVariants[index].animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const floorMotion of floorMotions) {
      floorMotion.apply(floorVariants[index].normal);
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
