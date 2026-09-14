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
        ref="dot1Ref"
        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
      <path
        ref="dot2Ref"
        d="M12.75 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
      <path
        ref="dot3Ref"
        d="M16.875 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
      <path
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ChatBubbleLeftEllipsisIcon",
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

  const dotVariants = (custom: number) => ({
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [1, 0, 0, 1, 1, 0, 0, 1],
      transition: {
        opacity: {
          times: [
            0,
            0.1,
            0.1 + custom * 0.1,
            0.1 + custom * 0.1 + 0.1,
            0.5,
            0.6,
            0.6 + custom * 0.1,
            0.6 + custom * 0.1 + 0.1,
          ],
          duration: 1.5,
        },
      },
    },
  });

  const dot1Variants = dotVariants(0);
  const dot2Variants = dotVariants(1);
  const dot3Variants = dotVariants(2);

  const dot1Ref = ref<SVGPathElement | null>();
  const dot2Ref = ref<SVGPathElement | null>();
  const dot3Ref = ref<SVGPathElement | null>();

  const dot1Motion = useMotion(dot1Ref, {
    initial: dot1Variants.normal,
    enter: dot1Variants.normal,
  });
  const dot2Motion = useMotion(dot2Ref, {
    initial: dot2Variants.normal,
    enter: dot2Variants.normal,
  });
  const dot3Motion = useMotion(dot3Ref, {
    initial: dot3Variants.normal,
    enter: dot3Variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    dot1Motion.apply(dot1Variants.animate);
    dot2Motion.apply(dot2Variants.animate);
    dot3Motion.apply(dot3Variants.animate);
  };

  const stopAnimation = () => {
    dot1Motion.apply(dot1Variants.normal);
    dot2Motion.apply(dot2Variants.normal);
    dot3Motion.apply(dot3Variants.normal);
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
