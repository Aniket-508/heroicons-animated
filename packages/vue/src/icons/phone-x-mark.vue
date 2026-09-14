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
      <path ref="firstPathRef" d="M15.75 3.75L20.25 8.25" />
      <path ref="secondPathRef" d="M20.25 3.75L15.75 8.25" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "PhoneXMarkIcon",
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
    },
    animate: {
      opacity: [0, 1],
      pathLength: [0, 1],
    },
  };

  const delayedAnimateVariant = {
    ...variants.animate,
    transition: { delay: 0.2 },
  };

  const firstPathRef = ref<SVGPathElement | null>(null);
  const secondPathRef = ref<SVGPathElement | null>(null);

  const firstMotion = useMotion(firstPathRef, {
    initial: variants.normal,
    enter: variants.normal,
  });
  const secondMotion = useMotion(secondPathRef, {
    initial: variants.normal,
    enter: variants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    firstMotion.apply(variants.animate);
    secondMotion.apply(delayedAnimateVariant);
  };

  const stopAnimation = () => {
    firstMotion.apply(variants.normal);
    secondMotion.apply(variants.normal);
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
