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
      <Motion is="g" ref="capGroupRef" style="transform-origin: center center">
        <path
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
        />
      </Motion>
      <Motion
        is="g"
        ref="tasselGroupRef"
        style="transform-origin: 6.75px 14.25px"
      >
        <path
          d="M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </Motion>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "AcademicCapIcon",
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

const capVariants = {
  normal: {
    y: 0,
    rotate: 0,
  },
  animate: {
    y: [0, -3, 0],
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const tasselVariants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: [0, 10, -10, 5, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const capGroupRef = ref();
const tasselGroupRef = ref();

const capMotion = useMotion(capGroupRef, {
  initial: capVariants.normal,
  enter: capVariants.normal,
});

const tasselMotion = useMotion(tasselGroupRef, {
  initial: tasselVariants.normal,
  enter: tasselVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  capMotion.apply(capVariants.animate);
  tasselMotion.apply(tasselVariants.animate);
};

const stopAnimation = () => {
  capMotion.apply(capVariants.normal);
  tasselMotion.apply(tasselVariants.normal);
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
