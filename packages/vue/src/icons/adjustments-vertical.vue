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
      <line ref="line1Ref" x1="6" x2="6" y1="3.75" y2="13.5" />
      <line ref="line2Ref" x1="6" x2="6" y1="16.5" y2="20.25" />
      <circle ref="circle1Ref" cx="6" cy="15" fill="none" r="1.5" />

      <line ref="line3Ref" x1="12" x2="12" y1="3.75" y2="7.5" />
      <line ref="line4Ref" x1="12" x2="12" y1="10.5" y2="20.25" />
      <circle ref="circle2Ref" cx="12" cy="9" fill="none" r="1.5" />

      <line ref="line5Ref" x1="18" x2="18" y1="3.75" y2="13.5" />
      <line ref="line6Ref" x1="18" x2="18" y1="16.5" y2="20.25" />
      <circle ref="circle3Ref" cx="18" cy="15" fill="none" r="1.5" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "AdjustmentsVerticalIcon",
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

  const defaultTransition = {
    type: "spring" as const,
    stiffness: 100,
    damping: 12,
    mass: 0.4,
  };

  const line1Ref = ref<SVGLineElement | null>(null);
  const line2Ref = ref<SVGLineElement | null>(null);
  const circle1Ref = ref<SVGCircleElement | null>(null);
  const line3Ref = ref<SVGLineElement | null>(null);
  const line4Ref = ref<SVGLineElement | null>(null);
  const circle2Ref = ref<SVGCircleElement | null>(null);
  const line5Ref = ref<SVGLineElement | null>(null);
  const line6Ref = ref<SVGLineElement | null>(null);
  const circle3Ref = ref<SVGCircleElement | null>(null);

  const line1Variants = {
    normal: { y2: 13.5, transition: defaultTransition },
    animate: { y2: 10.5, transition: defaultTransition },
  };
  const line2Variants = {
    normal: { y1: 16.5, transition: defaultTransition },
    animate: { y1: 13.5, transition: defaultTransition },
  };
  const circle1Variants = {
    normal: { cy: 15, transition: defaultTransition },
    animate: { cy: 12, transition: defaultTransition },
  };
  const line3Variants = {
    normal: { y2: 7.5, transition: defaultTransition },
    animate: { y2: 10.5, transition: defaultTransition },
  };
  const line4Variants = {
    normal: { y1: 10.5, transition: defaultTransition },
    animate: { y1: 13.5, transition: defaultTransition },
  };
  const circle2Variants = {
    normal: { cy: 9, transition: defaultTransition },
    animate: { cy: 12, transition: defaultTransition },
  };
  const line5Variants = {
    normal: { y2: 13.5, transition: defaultTransition },
    animate: { y2: 10.5, transition: defaultTransition },
  };
  const line6Variants = {
    normal: { y1: 16.5, transition: defaultTransition },
    animate: { y1: 13.5, transition: defaultTransition },
  };
  const circle3Variants = {
    normal: { cy: 15, transition: defaultTransition },
    animate: { cy: 12, transition: defaultTransition },
  };

  const motionItems = [
    { targetRef: line1Ref, variants: line1Variants },
    { targetRef: line2Ref, variants: line2Variants },
    { targetRef: circle1Ref, variants: circle1Variants },
    { targetRef: line3Ref, variants: line3Variants },
    { targetRef: line4Ref, variants: line4Variants },
    { targetRef: circle2Ref, variants: circle2Variants },
    { targetRef: line5Ref, variants: line5Variants },
    { targetRef: line6Ref, variants: line6Variants },
    { targetRef: circle3Ref, variants: circle3Variants },
  ] as const;
  const motionInstances = motionItems.map((item) =>
    useMotion(item.targetRef, {
      initial: item.variants.normal,
      enter: item.variants.normal,
    })
  );

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const motionInstance of motionInstances) {
      motionInstance.apply(motionItems[index].variants.animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const motionInstance of motionInstances) {
      motionInstance.apply(motionItems[index].variants.normal);
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
