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
        d="M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18"
      />
      <Motion is="path" ref="dotRef" d="M12 6.75h.008v.008H12V6.75Z" />
      <Motion
        v-for="(pillar, index) in PILLARS"
        :key="index"
        is="path"
        :ref="(el: SVGPathElement | null) => setPillarRef(el, index)"
        :d="pillar.d"
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
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const PILLARS = [
  { d: "M8.25 12.75v8.25", index: 0 },
  { d: "M12 12.75v8.25", index: 1 },
  { d: "M15.75 12.75v8.25", index: 2 },
];

const dotVariants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
};

const createPillarVariants = (custom: number) => ({
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.2 + custom * 0.15,
      duration: 0.3,
      ease: "linear",
    },
  },
});

const dotRef = ref<SVGPathElement>();
const pillarRefs = ref<(SVGPathElement | null)[]>([]);
const pillarMotions = ref<any[]>([]);

const setPillarRef = (el: SVGPathElement | null, index: number) => {
  if (el) {
    pillarRefs.value[index] = el;
    pillarMotions.value[index] = useMotion(el, {
      initial: createPillarVariants(PILLARS[index].index).normal,
      enter: createPillarVariants(PILLARS[index].index).normal,
    });
  }
};

const dotMotion = useMotion(dotRef, {
  initial: dotVariants.normal,
  enter: dotVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  dotMotion.apply(dotVariants.animate);
  PILLARS.forEach((pillar, index) => {
    if (pillarMotions.value[index]) {
      pillarMotions.value[index].apply(
        createPillarVariants(pillar.index).animate,
      );
    }
  });
};

const stopAnimation = () => {
  dotMotion.apply(dotVariants.normal);
  PILLARS.forEach((pillar, index) => {
    if (pillarMotions.value[index]) {
      pillarMotions.value[index].apply(
        createPillarVariants(pillar.index).normal,
      );
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
