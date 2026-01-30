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
      <Motion
        is="path"
        ref="cakeBodyRef"
        d="M12 8.25c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m3 3.879-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"
        style="transform-origin: center bottom"
      />
      <Motion
        is="g"
        ref="candleGroupRef"
        style="transform-origin: center bottom"
      >
        <path d="M9 8.25v-1.5" />
        <path d="M12 8.25v-1.5" />
        <path d="M15 8.25v-1.5" />
      </Motion>
      <Motion
        is="path"
        ref="flameLeftRef"
        d="M9.265 3.11a.375.375 0 1 1-.53 0L9 2.845l.265.265Z"
        style="transform-origin: 37.5% 50%"
      />
      <Motion
        is="path"
        ref="flameMiddleRef"
        d="M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z"
        style="transform-origin: 50% 50%"
      />
      <Motion
        is="path"
        ref="flameRightRef"
        d="M15.265 3.11a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
        style="transform-origin: 62.5% 50%"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CakeIcon",
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

const cakeBodyVariants = {
  normal: {
    translateY: 0,
    opacity: 1,
  },
  animate: {
    translateY: [8, -1, 0],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const candleVariants = {
  normal: {
    scaleY: 1,
    opacity: 1,
  },
  animate: {
    scaleY: [0, 1.2, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const flameLeftVariants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const flameMiddleVariants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.65,
    },
  },
};

const flameRightVariants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.8,
    },
  },
};

const cakeBodyRef = ref<SVGPathElement>();
const candleGroupRef = ref<SVGGElement>();
const flameLeftRef = ref<SVGPathElement>();
const flameMiddleRef = ref<SVGPathElement>();
const flameRightRef = ref<SVGPathElement>();

const cakeBodyMotion = useMotion(cakeBodyRef, {
  initial: cakeBodyVariants.normal,
  enter: cakeBodyVariants.normal,
});

const candleGroupMotion = useMotion(candleGroupRef, {
  initial: candleVariants.normal,
  enter: candleVariants.normal,
});

const flameLeftMotion = useMotion(flameLeftRef, {
  initial: flameLeftVariants.normal,
  enter: flameLeftVariants.normal,
});

const flameMiddleMotion = useMotion(flameMiddleRef, {
  initial: flameMiddleVariants.normal,
  enter: flameMiddleVariants.normal,
});

const flameRightMotion = useMotion(flameRightRef, {
  initial: flameRightVariants.normal,
  enter: flameRightVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  cakeBodyMotion.apply(cakeBodyVariants.animate);
  candleGroupMotion.apply(candleVariants.animate);
  flameLeftMotion.apply(flameLeftVariants.animate);
  flameMiddleMotion.apply(flameMiddleVariants.animate);
  flameRightMotion.apply(flameRightVariants.animate);
};

const stopAnimation = () => {
  cakeBodyMotion.apply(cakeBodyVariants.normal);
  candleGroupMotion.apply(candleVariants.normal);
  flameLeftMotion.apply(flameLeftVariants.normal);
  flameMiddleMotion.apply(flameMiddleVariants.normal);
  flameRightMotion.apply(flameRightVariants.normal);
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
