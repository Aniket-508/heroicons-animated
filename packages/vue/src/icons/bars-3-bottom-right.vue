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
      <Motion is="path" ref="topBarRef" d="M3.75 6.75h16.5" />
      <Motion is="path" ref="middleBarRef" d="M3.75 12h16.5" />
      <Motion is="path" ref="bottomBarRef" d="M12 17.25h8.25" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "Bars3BottomRightIcon",
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

const createSlideVariants = (delay: number) => ({
  normal: {
    translateX: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay,
    },
  },
});

const bottomBarVariants = {
  normal: {
    translateX: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    translateX: [0, 2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};

const topBarRef = ref<SVGPathElement>();
const middleBarRef = ref<SVGPathElement>();
const bottomBarRef = ref<SVGPathElement>();

const topBarVariants = createSlideVariants(0);
const middleBarVariants = createSlideVariants(0.05);

const topBarMotion = useMotion(topBarRef, {
  initial: topBarVariants.normal,
  enter: topBarVariants.normal,
});

const middleBarMotion = useMotion(middleBarRef, {
  initial: middleBarVariants.normal,
  enter: middleBarVariants.normal,
});

const bottomBarMotion = useMotion(bottomBarRef, {
  initial: bottomBarVariants.normal,
  enter: bottomBarVariants.normal,
});

let isControlled = false;
let bottomBarAnimation: Animation | null = null;

const startAnimation = () => {
  topBarMotion.apply(topBarVariants.animate);
  middleBarMotion.apply(middleBarVariants.animate);
  bottomBarMotion.apply(bottomBarVariants.animate);

  // Animate pathLength and pathOffset using Web Animations API
  if (bottomBarRef.value) {
    const pathLength = bottomBarRef.value.getTotalLength();
    bottomBarRef.value.style.strokeDasharray = `${pathLength}`;
    bottomBarRef.value.style.strokeDashoffset = "0";

    bottomBarAnimation = bottomBarRef.value.animate(
      [
        { strokeDashoffset: 0 },
        { strokeDashoffset: pathLength * 0.5 },
        { strokeDashoffset: 0 },
      ],
      {
        duration: 500,
        easing: "ease-in-out",
        delay: 150,
        fill: "forwards",
      },
    );
  }
};

const stopAnimation = () => {
  topBarMotion.apply(topBarVariants.normal);
  middleBarMotion.apply(middleBarVariants.normal);
  bottomBarMotion.apply(bottomBarVariants.normal);

  if (bottomBarAnimation) {
    bottomBarAnimation.cancel();
    bottomBarAnimation = null;
  }

  if (bottomBarRef.value) {
    bottomBarRef.value.style.strokeDasharray = "";
    bottomBarRef.value.style.strokeDashoffset = "";
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
