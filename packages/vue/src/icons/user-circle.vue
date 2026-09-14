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
        ref="pathRef"
        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "UserCircleIcon",
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

  const pathVariants = {
    normal: {
      pathLength: 1,
      opacity: 1,
      pathOffset: 0,
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      pathOffset: [1, 0],
    },
  };

  const pathRef = ref<SVGPathElement | null>(null);
  const motionInstance = useMotion(pathRef, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => motionInstance.apply(pathVariants.animate);
  const stopAnimation = () => motionInstance.apply(pathVariants.normal);

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

  defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
