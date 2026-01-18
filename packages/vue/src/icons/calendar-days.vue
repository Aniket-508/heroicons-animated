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
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
      <path
        v-for="(dot, index) in DOTS"
        :key="index"
        :d="dot.d"
        ref="dotRefs"
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
import { onMounted, ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const dotVariants = (custom: number) => ({
  normal: {
    opacity: 1,
    transition: {
      duration: 200,
    },
  },
  animate: {
    opacity: [1, 0.3, 1],
    transition: {
      delay: custom * 100,
      duration: 400,
    },
  },
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

const dotRefs = ref<SVGPathElement[]>([]);
const dotMotions: any[] = [];

onMounted(() => {
  dotRefs.value.forEach((el, index) => {
    dotMotions[index] = useMotion(el, {
      initial: dotVariants(index).normal,
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  DOTS.forEach((_, index) => {
    dotMotions[index]?.apply(dotVariants(index).animate);
  });
};

const stopAnimation = () => {
  DOTS.forEach((_, index) => {
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
