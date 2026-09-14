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
      <circle cx="12" cy="12" r="3.75" />
      <path ref="r0" d="M12 3V5.25" />
      <path ref="r1" d="M18.364 5.63604L16.773 7.22703" />
      <path ref="r2" d="M21 12H18.75" />
      <path ref="r3" d="M18.364 18.364L16.773 16.773" />
      <path ref="r4" d="M12 18.75V21" />
      <path ref="r5" d="M7.22703 16.773L5.63604 18.364" />
      <path ref="r6" d="M5.25 12H3" />
      <path ref="r7" d="M7.22703 7.22703L5.63604 5.63604" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SunIcon",
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

  const createRayVariants = (i: number) => ({
    normal: { opacity: 1 },
    animate: {
      opacity: [0, 1],
      transition: { delay: i * 0.1, duration: 0.3 },
    },
  });

  const r0 = ref<SVGPathElement | null>(null);
  const r1 = ref<SVGPathElement | null>(null);
  const r2 = ref<SVGPathElement | null>(null);
  const r3 = ref<SVGPathElement | null>(null);
  const r4 = ref<SVGPathElement | null>(null);
  const r5 = ref<SVGPathElement | null>(null);
  const r6 = ref<SVGPathElement | null>(null);
  const r7 = ref<SVGPathElement | null>(null);
  const m0 = useMotion(r0, {
    initial: createRayVariants(0).normal,
    enter: createRayVariants(0).normal,
  });
  const m1 = useMotion(r1, {
    initial: createRayVariants(1).normal,
    enter: createRayVariants(1).normal,
  });
  const m2 = useMotion(r2, {
    initial: createRayVariants(2).normal,
    enter: createRayVariants(2).normal,
  });
  const m3 = useMotion(r3, {
    initial: createRayVariants(3).normal,
    enter: createRayVariants(3).normal,
  });
  const m4 = useMotion(r4, {
    initial: createRayVariants(4).normal,
    enter: createRayVariants(4).normal,
  });
  const m5 = useMotion(r5, {
    initial: createRayVariants(5).normal,
    enter: createRayVariants(5).normal,
  });
  const m6 = useMotion(r6, {
    initial: createRayVariants(6).normal,
    enter: createRayVariants(6).normal,
  });
  const m7 = useMotion(r7, {
    initial: createRayVariants(7).normal,
    enter: createRayVariants(7).normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    const motions = [m0, m1, m2, m3, m4, m5, m6, m7];
    let index = 0;
    for (const motion of motions) {
      motion.apply(createRayVariants(index).animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    const motions = [m0, m1, m2, m3, m4, m5, m6, m7];
    let index = 0;
    for (const motion of motions) {
      motion.apply(createRayVariants(index).normal);
      index += 1;
    }
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

  defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
