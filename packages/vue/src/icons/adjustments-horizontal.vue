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
      <line ref="line1Ref" x1="10.5" x2="20.25" y1="6" y2="6" />
      <line ref="line2Ref" x1="3.75" x2="7.5" y1="6" y2="6" />
      <circle ref="circle1Ref" cx="9" cy="6" fill="none" r="1.5" />

      <line ref="line3Ref" x1="16.5" x2="20.25" y1="12" y2="12" />
      <line ref="line4Ref" x1="3.75" x2="13.5" y1="12" y2="12" />
      <circle ref="circle2Ref" cx="15" cy="12" fill="none" r="1.5" />

      <line ref="line5Ref" x1="10.5" x2="20.25" y1="18" y2="18" />
      <line ref="line6Ref" x1="3.75" x2="7.5" y1="18" y2="18" />
      <circle ref="circle3Ref" cx="9" cy="18" fill="none" r="1.5" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "AdjustmentsHorizontalIcon",
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
    normal: { x1: 10.5, transition: defaultTransition },
    animate: { x1: 13.5, transition: defaultTransition },
  };
  const line2Variants = {
    normal: { x2: 7.5, transition: defaultTransition },
    animate: { x2: 10.5, transition: defaultTransition },
  };
  const circle1Variants = {
    normal: { cx: 9, transition: defaultTransition },
    animate: { cx: 12, transition: defaultTransition },
  };
  const line3Variants = {
    normal: { x1: 16.5, transition: defaultTransition },
    animate: { x1: 13.5, transition: defaultTransition },
  };
  const line4Variants = {
    normal: { x2: 13.5, transition: defaultTransition },
    animate: { x2: 10.5, transition: defaultTransition },
  };
  const circle2Variants = {
    normal: { cx: 15, transition: defaultTransition },
    animate: { cx: 12, transition: defaultTransition },
  };
  const line5Variants = {
    normal: { x1: 10.5, transition: defaultTransition },
    animate: { x1: 13.5, transition: defaultTransition },
  };
  const line6Variants = {
    normal: { x2: 7.5, transition: defaultTransition },
    animate: { x2: 10.5, transition: defaultTransition },
  };
  const circle3Variants = {
    normal: { cx: 9, transition: defaultTransition },
    animate: { cx: 12, transition: defaultTransition },
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
