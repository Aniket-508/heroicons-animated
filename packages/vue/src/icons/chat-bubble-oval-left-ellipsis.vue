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
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
      <path
        ref="dot2Ref"
        d="M12.75 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
      <path
        ref="dot3Ref"
        d="M16.875 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"
      />
      <path
        d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ChatBubbleOvalLeftEllipsisIcon",
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
