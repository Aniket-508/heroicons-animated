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
        ref="bar1Ref"
        d="M3.75 5.25h16.5"
        style="transform-origin: center"
      />
      <Motion
        is="path"
        ref="bar2Ref"
        d="M3.75 9.75h16.5"
        style="transform-origin: center"
      />
      <Motion
        is="path"
        ref="bar3Ref"
        d="M3.75 14.25h16.5"
        style="transform-origin: center"
      />
      <Motion
        is="path"
        ref="bar4Ref"
        d="M3.75 18.75h16.5"
        style="transform-origin: center"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "Bars4Icon",
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

const createBarVariants = (delay: number) => ({
  normal: {
    scaleX: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  animate: {
    scaleX: [1, 0.6, 1],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay,
    },
  },
});

const bar1Variants = createBarVariants(0);
const bar2Variants = createBarVariants(0.1);
const bar3Variants = createBarVariants(0.2);
const bar4Variants = createBarVariants(0.3);

const bar1Ref = ref<SVGPathElement>();
const bar2Ref = ref<SVGPathElement>();
const bar3Ref = ref<SVGPathElement>();
const bar4Ref = ref<SVGPathElement>();

const bar1Motion = useMotion(bar1Ref, {
  initial: bar1Variants.normal,
  enter: bar1Variants.normal,
});

const bar2Motion = useMotion(bar2Ref, {
  initial: bar2Variants.normal,
  enter: bar2Variants.normal,
});

const bar3Motion = useMotion(bar3Ref, {
  initial: bar3Variants.normal,
  enter: bar3Variants.normal,
});

const bar4Motion = useMotion(bar4Ref, {
  initial: bar4Variants.normal,
  enter: bar4Variants.normal,
});

let isControlled = false;

const startAnimation = () => {
  bar1Motion.apply(bar1Variants.animate);
  bar2Motion.apply(bar2Variants.animate);
  bar3Motion.apply(bar3Variants.animate);
  bar4Motion.apply(bar4Variants.animate);
};

const stopAnimation = () => {
  bar1Motion.apply(bar1Variants.normal);
  bar2Motion.apply(bar2Variants.normal);
  bar3Motion.apply(bar3Variants.normal);
  bar4Motion.apply(bar4Variants.normal);
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
