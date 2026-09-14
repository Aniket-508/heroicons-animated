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
        d="M12 2.71411C9.8495 4.75073 6.94563 5.99986 3.75 5.99986C3.69922 5.99986 3.64852 5.99955 3.59789 5.99892C3.2099 7.17903 3 8.43995 3 9.74991C3 15.3414 6.82432 20.0397 12 21.3719C17.1757 20.0397 21 15.3414 21 9.74991C21 8.43995 20.7901 7.17903 20.4021 5.99892C20.3515 5.99955 20.3008 5.99986 20.25 5.99986C17.0544 5.99986 14.1505 4.75073 12 2.71411Z"
      />
      <path ref="checkPathRef" d="M9 12.7498L11.25 14.9998L15 9.74985" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ShieldCheckIcon",
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
      transition: { duration: 0.3 },
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        pathLength: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.4, ease: "easeInOut" },
      },
    },
  };

  const checkPathRef = ref<SVGPathElement | null>(null);
  const motionInstance = useMotion(checkPathRef, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motionInstance.apply(pathVariants.animate);
  };

  const stopAnimation = () => {
    motionInstance.apply(pathVariants.normal);
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
