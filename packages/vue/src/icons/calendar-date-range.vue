<template>
  <div
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
        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5"
      />
      <path :d="FIRST_DOT.d" ref="firstDotRef"/>
      <path
        v-for="(line, index) in RANGE_LINES"
        :key="'line-' + index"
        :d="line.d"
        ref="lineRefs"
      />
      <path
        v-for="(dot, index) in DOTS"
        :key="'dot-' + index"
        :d="dot.d"
        ref="dotRefs"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CalendarDateRangeIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { onMounted, ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const FIRST_DOT_VARIANTS = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.3, 1],
    transition: { duration: 400 },
  },
};

const lineVariants = (custom: number) => ({
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 400 + custom * 150,
      duration: 300,
      ease: "easeOut",
    },
  },
});

const dotVariants = (custom: number) => ({
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.3, 1],
    transition: {
      delay: 700 + custom * 100,
      duration: 400,
    },
  },
});

const RANGE_LINES = [
  { d: "M14.25 12.75h2.25", index: 0 },
  { d: "M7.5 15h4.5", index: 1 },
];

const FIRST_DOT = { d: "M12 12.75h.005v.006H12v-.006Z" };

const DOTS = [
  { d: "M14.25 15h.005v.005h-.005v-.005Z", index: 0 },
  { d: "M16.5 15h.006v.005H16.5v-.005Z", index: 1 },
  { d: "M7.5 17.25h.005v.005h-.006v-.005Z", index: 2 },
  { d: "M9.75 17.25h.005v.006H9.75v-.006Z", index: 3 },
  { d: "M12 17.25h.006v.006h-.006v-.005Z", index: 4 },
  { d: "M14.25 17.25h.006v.006h-.006v-.006Z", index: 5 },
];

const firstDotRef = ref();
const lineRefs = ref<SVGPathElement[]>([]);
const dotRefs = ref<SVGPathElement[]>([]);

const firstDotMotion = useMotion(firstDotRef, {
  initial: FIRST_DOT_VARIANTS.normal,
});
const lineMotions: any[] = [];
const dotMotions: any[] = [];

onMounted(() => {
  lineRefs.value.forEach((el, index) => {
    lineMotions[index] = useMotion(el, {
      initial: lineVariants(index).normal,
    });
  });
  dotRefs.value.forEach((el, index) => {
    dotMotions[index] = useMotion(el, {
      initial: dotVariants(index).normal,
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  firstDotMotion.apply(FIRST_DOT_VARIANTS.animate);
  lineRefs.value.forEach((_, index) => {
    lineMotions[index]?.apply(lineVariants(index).animate);
  });
  dotRefs.value.forEach((_, index) => {
    dotMotions[index]?.apply(dotVariants(index).animate);
  });
};

const stopAnimation = () => {
  firstDotMotion.apply(FIRST_DOT_VARIANTS.normal);
  lineRefs.value.forEach((_, index) => {
    lineMotions[index]?.apply(lineVariants(index).normal);
  });
  dotRefs.value.forEach((_, index) => {
    dotMotions[index]?.apply(dotVariants(index).normal);
  });
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
