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
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
      <path
        ref="pathRef"
        d="M8.25 10.5l.22-.22a.75.75 0 0 1 1.28.53v6.441c0 .472.214.934.64 1.137a3.75 3.75 0 0 0 4.994-1.77c.205-.428-.152-.868-.627-.868h-.507m-6-2.25h7.5"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "DocumentCurrencyBangladeshiIcon",
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

  const variants = {
    normal: {
      opacity: 1,
      pathLength: 1,
      pathOffset: 0,
      transition: {
        duration: 0.4,
        opacity: { duration: 0.1 },
      },
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
      pathOffset: [1, 0],
      transition: {
        duration: 0.6,
        ease: "linear",
        opacity: { duration: 0.1 },
      },
    },
  };

  const pathRef = ref<SVGPathElement | null>(null);
  const motionInstance = useMotion(pathRef, {
    initial: variants.normal,
    enter: variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionInstance.apply(variants.animate);
  };

  const stopAnimation = () => {
    motionInstance.apply(variants.normal);
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
