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
        d="M17.25 21.75c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
      />
      <path ref="arrowRef" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "PhoneArrowUpRightIcon",
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

  const arrowVariants = {
    normal: {
      translateX: 0,
      translateY: 0,
    },
    animate: {
      translateX: [0, 3, 0],
      translateY: [0, -3, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const arrowRef = ref<SVGPathElement | null>(null);
  const motionInstance = useMotion(arrowRef, {
    initial: arrowVariants.normal,
    enter: arrowVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionInstance.apply(arrowVariants.animate);
  };

  const stopAnimation = () => {
    motionInstance.apply(arrowVariants.normal);
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
