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
      <Motion is="path" ref="headRef" d="M6.75 15.75 3 12m0 0 3.75-3.75" />
      <path ref="lineRef" d="M3 12h18" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArrowLongLeftIcon",
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

const headVariants = {
  normal: {
    translateX: 0,
  },
  animate: {
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const headRef = ref<SVGPathElement>();
const lineRef = ref<SVGPathElement>();
const headMotion = useMotion(headRef, {
  initial: headVariants.normal,
  enter: headVariants.normal,
});

let isControlled = false;
let lineAnimation: Animation | null = null;

const startAnimation = () => {
  headMotion.apply(headVariants.animate);

  // Animate line path morphing using Web Animations API
  if (lineRef.value) {
    lineAnimation = lineRef.value.animate(
      [{ d: "M3 12h18" }, { d: "M6 12h15" }, { d: "M3 12h18" }],
      {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );
  }
};

const stopAnimation = () => {
  headMotion.apply(headVariants.normal);

  if (lineAnimation) {
    lineAnimation.cancel();
    lineAnimation = null;
  }

  if (lineRef.value) {
    lineRef.value.setAttribute("d", "M3 12h18");
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

defineExpose({
  startAnimation,
  stopAnimation,
  setControlled,
});
</script>
