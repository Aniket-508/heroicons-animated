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
        d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
      />
      <path ref="line1Ref" d="M17.25 9.75L21.75 14.25" />
      <path ref="line2Ref" d="M21.75 9.75L17.25 14.25" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SpeakerXMarkIcon",
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

  const lineVariants = {
    normal: {
      opacity: 1,
      pathLength: 1,
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
    },
  };

  const delayedAnimateVariant = {
    ...lineVariants.animate,
    transition: { delay: 0.2 },
  };

  const line1Ref = ref<SVGPathElement | null>(null);
  const line2Ref = ref<SVGPathElement | null>(null);
  const motion1 = useMotion(line1Ref, {
    initial: lineVariants.normal,
    enter: lineVariants.normal,
  });
  const motion2 = useMotion(line2Ref, {
    initial: lineVariants.normal,
    enter: lineVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion1.apply(lineVariants.animate);
    motion2.apply(delayedAnimateVariant);
  };

  const stopAnimation = () => {
    motion1.apply(lineVariants.normal);
    motion2.apply(lineVariants.normal);
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
