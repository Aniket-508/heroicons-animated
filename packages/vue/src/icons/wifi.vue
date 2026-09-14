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
      <path d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0" />
      <path ref="arc1Ref" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0" />
      <path ref="arc2Ref" d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0" />
      <path ref="arc3Ref" d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "WifiIcon",
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

  const normal = {
    opacity: 1,
    scale: 1,
  };
  const createPulse = (custom: number) => ({
    opacity: 0,
    scale: 0,
    transition: {
      opacity: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 0.2,
        delay: 0.2 * (custom - 1),
      },
      scale: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 0.2,
        delay: 0.2 * (custom - 1),
      },
    },
  });

  const arc1Ref = ref<SVGPathElement | null>(null);
  const arc2Ref = ref<SVGPathElement | null>(null);
  const arc3Ref = ref<SVGPathElement | null>(null);
  const motion1 = useMotion(arc1Ref, { initial: normal, enter: normal });
  const motion2 = useMotion(arc2Ref, { initial: normal, enter: normal });
  const motion3 = useMotion(arc3Ref, { initial: normal, enter: normal });

  let isControlled = false;

  const startAnimation = () => {
    motion1.apply(createPulse(1));
    motion2.apply(createPulse(2));
    motion3.apply(createPulse(3));
  };

  const stopAnimation = () => {
    motion1.apply(normal);
    motion2.apply(normal);
    motion3.apply(normal);
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
