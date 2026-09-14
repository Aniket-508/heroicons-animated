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
        ref="path0Ref"
        d="M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z"
      />
      <path
        ref="path1Ref"
        d="M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50533 18.2589 8.71454Z"
      />
      <path
        ref="path2Ref"
        d="M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SparklesIcon",
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

  const sparkleAnimate = (delay: number) => ({
    opacity: [1, 0.3, 1, 0.3, 1],
    scale: [1, 1.2, 1, 1.1, 1],
    transition: {
      duration: 1.5,
      times: [0, 0.2, 0.4, 0.6, 1],
      delay,
      ease: "easeInOut",
    },
  });

  const sparkleNormal = {
    opacity: 1,
    scale: 1,
  };

  const path0Ref = ref<SVGPathElement | null>(null);
  const path1Ref = ref<SVGPathElement | null>(null);
  const path2Ref = ref<SVGPathElement | null>(null);

  const motion0 = useMotion(path0Ref, {
    initial: sparkleNormal,
    enter: sparkleNormal,
  });
  const motion1 = useMotion(path1Ref, {
    initial: sparkleNormal,
    enter: sparkleNormal,
  });
  const motion2 = useMotion(path2Ref, {
    initial: sparkleNormal,
    enter: sparkleNormal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion0.apply(sparkleAnimate(0));
    motion1.apply(sparkleAnimate(0.15));
    motion2.apply(sparkleAnimate(0.3));
  };

  const stopAnimation = () => {
    motion0.apply(sparkleNormal);
    motion1.apply(sparkleNormal);
    motion2.apply(sparkleNormal);
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
