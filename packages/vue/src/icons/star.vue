<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <svg
      ref="svgRef"
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="props.color"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="transform-box: fill-box; transform-origin: center"
    >
      <path
        d="M11.4806 3.4987C11.6728 3.03673 12.3272 3.03673 12.5193 3.4987L14.6453 8.61016C14.7263 8.80492 14.9095 8.93799 15.1197 8.95485L20.638 9.39724C21.1367 9.43722 21.339 10.0596 20.959 10.3851L16.7546 13.9866C16.5945 14.1238 16.5245 14.3391 16.5734 14.5443L17.8579 19.9292C17.974 20.4159 17.4446 20.8005 17.0176 20.5397L12.2932 17.6541C12.1132 17.5441 11.8868 17.5441 11.7068 17.6541L6.98238 20.5397C6.55539 20.8005 6.02594 20.4159 6.14203 19.9292L7.42652 14.5443C7.47546 14.3391 7.4055 14.1238 7.24531 13.9866L3.04099 10.3851C2.661 10.0596 2.86323 9.43722 3.36197 9.39724L8.88022 8.95485C9.09048 8.93799 9.27363 8.80492 9.35464 8.61016L11.4806 3.4987Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "StarIcon",
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
    normal: { scale: 1 },
    animate: {
      scale: [1, 0.9, 1.2, 1],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const svgRef = ref<SVGSVGElement | null>(null);
  const motionInstance = useMotion(svgRef, {
    initial: variants.normal,
    enter: variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => motionInstance.apply(variants.animate);
  const stopAnimation = () => motionInstance.apply(variants.normal);

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
