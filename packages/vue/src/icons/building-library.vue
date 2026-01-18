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
        d="M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18"
      />
      <Motion is="path" ref="dotRef" d="M12 6.75h.008v.008H12V6.75Z" />
      <path
        v-for="(pillar, index) in PILLARS"
        :key="index"
        :d="pillar.d"
        ref="pillarRefs"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "BuildingLibraryIcon",
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

const dotVariants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      delay: 100,
      duration: 100,
    },
  },
};

const pillarVariants = (custom: number) => ({
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 200 + custom * 150,
      duration: 300,
      ease: "linear",
    },
  },
});

const PILLARS = [
  { d: "M8.25 12.75v8.25", index: 0 },
  { d: "M12 12.75v8.25", index: 1 },
  { d: "M15.75 12.75v8.25", index: 2 },
];

const dotRef = ref();
const pillarRefs = ref<SVGPathElement[]>([]);

const dotMotion = useMotion(dotRef, {
  initial: dotVariants.normal,
});

const pillarMotions: any[] = [];

onMounted(() => {
  pillarRefs.value.forEach((el, index) => {
    pillarMotions[index] = useMotion(el, {
      initial: pillarVariants(index).normal,
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  dotMotion.apply(dotVariants.animate);
  pillarRefs.value.forEach((_, index) => {
    pillarMotions[index]?.apply(pillarVariants(index).animate);
  });
};

const stopAnimation = () => {
  dotMotion.apply(dotVariants.normal);
  pillarRefs.value.forEach((_, index) => {
    pillarMotions[index]?.apply(pillarVariants(index).normal);
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
