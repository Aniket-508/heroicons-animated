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
        d="M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z"
      />
      <path ref="item0Ref" d="M3.75 19.5H20.25" />
      <path ref="item1Ref" d="M3.75 15.75H20.25" />
      <path ref="item2Ref" d="M3.75 12H20.25" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "QueueListIcon",
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

  const ITEM_DURATION = 0.2;
  const INITIAL_DELAY = 0.1;
  const STAGGER_DELAY = 0.15;

  const LIST_ITEMS = [
    { y: 19.5, path: "M3.75 19.5H20.25" },
    { y: 15.75, path: "M3.75 15.75H20.25" },
    { y: 12, path: "M3.75 12H20.25" },
  ];

  const createItemVariants = (delay: number) => ({
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      transition: {
        duration: ITEM_DURATION,
        ease: "easeOut",
        delay,
      },
    },
  });

  const item0Delay =
    INITIAL_DELAY + (LIST_ITEMS.length - 1 - 0) * STAGGER_DELAY;
  const item1Delay =
    INITIAL_DELAY + (LIST_ITEMS.length - 1 - 1) * STAGGER_DELAY;
  const item2Delay =
    INITIAL_DELAY + (LIST_ITEMS.length - 1 - 2) * STAGGER_DELAY;

  const item0Variants = createItemVariants(item0Delay);
  const item1Variants = createItemVariants(item1Delay);
  const item2Variants = createItemVariants(item2Delay);

  const item0Ref = ref<SVGPathElement | null>(null);
  const item1Ref = ref<SVGPathElement | null>(null);
  const item2Ref = ref<SVGPathElement | null>(null);

  const item0Motion = useMotion(item0Ref, {
    initial: item0Variants.normal,
    enter: item0Variants.normal,
  });
  const item1Motion = useMotion(item1Ref, {
    initial: item1Variants.normal,
    enter: item1Variants.normal,
  });
  const item2Motion = useMotion(item2Ref, {
    initial: item2Variants.normal,
    enter: item2Variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    item0Motion.apply(item0Variants.animate);
    item1Motion.apply(item1Variants.animate);
    item2Motion.apply(item2Variants.animate);
  };

  const stopAnimation = () => {
    item0Motion.apply(item0Variants.normal);
    item1Motion.apply(item1Variants.normal);
    item2Motion.apply(item2Variants.normal);
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
