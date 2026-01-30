<template>
  <div
    v-bind="$attrs"
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
      />
      <Motion is="path" ref="squareRef" d="M6 7.5h3v3H6v-3Z" />
      <Motion is="path" ref="line1Ref" d="M12 7.5h1.5" />
      <Motion is="path" ref="line2Ref" d="M12 10.5h1.5" />
      <Motion is="path" ref="line3Ref" d="M6 13.5h7.5" />
      <Motion is="path" ref="line4Ref" d="M6 16.5h7.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "NewspaperIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const squareVariants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [0, 1],
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const createLineVariants = (delay: number) => ({
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.2,
      delay,
      ease: "easeOut",
      opacity: { duration: 0.1, delay },
    },
  },
});

const squareRef = ref<SVGPathElement | null>();
const line1Ref = ref<SVGPathElement | null>();
const line2Ref = ref<SVGPathElement | null>();
const line3Ref = ref<SVGPathElement | null>();
const line4Ref = ref<SVGPathElement | null>();
const squareMotion = useMotion(squareRef, {
  initial: squareVariants.normal,
  enter: squareVariants.normal,
});
const line1Motion = useMotion(line1Ref, {
  initial: createLineVariants(0.2).normal,
  enter: createLineVariants(0.2).normal,
});
const line2Motion = useMotion(line2Ref, {
  initial: createLineVariants(0.3).normal,
  enter: createLineVariants(0.3).normal,
});
const line3Motion = useMotion(line3Ref, {
  initial: createLineVariants(0.4).normal,
  enter: createLineVariants(0.4).normal,
});
const line4Motion = useMotion(line4Ref, {
  initial: createLineVariants(0.5).normal,
  enter: createLineVariants(0.5).normal,
});

let isControlled = false;

const startAnimation = () => {
  squareMotion.apply(squareVariants.animate);
  line1Motion.apply(createLineVariants(0.2).animate);
  line2Motion.apply(createLineVariants(0.3).animate);
  line3Motion.apply(createLineVariants(0.4).animate);
  line4Motion.apply(createLineVariants(0.5).animate);
};

const stopAnimation = () => {
  squareMotion.apply(squareVariants.normal);
  const lineNormal = { pathLength: 1, opacity: 1 };
  line1Motion.apply(lineNormal);
  line2Motion.apply(lineNormal);
  line3Motion.apply(lineNormal);
  line4Motion.apply(lineNormal);
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
