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
      <Motion is="path" ref="lineRef" d="M4.49902 11.9983H19.4987" />
      <Motion is="g" ref="topRef">
        <path d="M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808Z" />
        <path
          d="M12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808Z"
        />
      </Motion>
      <Motion is="g" ref="bottomRef">
        <path d="M11.9998 18.7509H12.0073V18.7584H11.9998V18.7509Z" />
        <path
          d="M12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z"
        />
      </Motion>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "DivideIcon",
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

const lineVariants = {
  normal: { scaleX: 1 },
  animate: {
    scaleX: [1, 1.1, 1],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};
const topVariants = {
  normal: { y: 0 },
  animate: { y: [0, -2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
};
const bottomVariants = {
  normal: { y: 0 },
  animate: { y: [0, 2, 0], transition: { duration: 0.4, ease: "easeInOut" } },
};

const lineRef = ref<SVGPathElement | null>();
const topRef = ref<SVGGElement | null>();
const bottomRef = ref<SVGGElement | null>();

const lineMotion = useMotion(lineRef, {
  initial: lineVariants.normal,
  enter: lineVariants.normal,
});
const topMotion = useMotion(topRef, {
  initial: topVariants.normal,
  enter: topVariants.normal,
});
const bottomMotion = useMotion(bottomRef, {
  initial: bottomVariants.normal,
  enter: bottomVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  lineMotion.apply(lineVariants.animate);
  topMotion.apply(topVariants.animate);
  bottomMotion.apply(bottomVariants.animate);
};

const stopAnimation = () => {
  lineMotion.apply(lineVariants.normal);
  topMotion.apply(topVariants.normal);
  bottomMotion.apply(bottomVariants.normal);
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
