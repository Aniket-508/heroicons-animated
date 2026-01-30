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
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
      <Motion
        v-for="(dot, index) in DOTS"
        :key="index"
        is="path"
        :ref="(el: SVGPathElement | null) => setDotRef(el, index)"
        :d="dot.d"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CalendarDaysIcon",
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

const DOTS = [
  { d: "M12 12.75h.008v.008H12v-.008Z", index: 0 },
  { d: "M14.25 12.75h.008v.008h-.008v-.008Z", index: 1 },
  { d: "M16.5 12.75h.008v.008H16.5v-.008Z", index: 2 },
  { d: "M7.5 15h.008v.008H7.5V15Z", index: 3 },
  { d: "M9.75 15h.008v.008H9.75V15Z", index: 4 },
  { d: "M12 15h.008v.008H12V15Z", index: 5 },
  { d: "M14.25 15h.008v.008h-.008V15Z", index: 6 },
  { d: "M16.5 15h.008v.008H16.5V15Z", index: 7 },
  { d: "M7.5 17.25h.008v.008H7.5v-.008Z", index: 8 },
  { d: "M9.75 17.25h.008v.008H9.75v-.008Z", index: 9 },
  { d: "M12 17.25h.008v.008H12v-.008Z", index: 10 },
  { d: "M14.25 17.25h.008v.008h-.008v-.008Z", index: 11 },
];

const createDotVariants = (custom: number) => ({
  normal: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: [1, 0.3, 1],
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      times: [0, 0.5, 1],
    },
  },
});

const dotRefs = ref<(SVGPathElement | null)[]>([]);
const dotMotions = ref<any[]>([]);

const setDotRef = (el: SVGPathElement | null, index: number) => {
  if (el) {
    dotRefs.value[index] = el;
    dotMotions.value[index] = useMotion(el, {
      initial: createDotVariants(DOTS[index].index).normal,
      enter: createDotVariants(DOTS[index].index).normal,
    });
  }
};

let isControlled = false;

const startAnimation = () => {
  DOTS.forEach((dot, index) => {
    if (dotMotions.value[index]) {
      dotMotions.value[index].apply(createDotVariants(dot.index).animate);
    }
  });
};

const stopAnimation = () => {
  DOTS.forEach((dot, index) => {
    if (dotMotions.value[index]) {
      dotMotions.value[index].apply(createDotVariants(dot.index).normal);
    }
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
