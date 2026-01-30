<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <Motion
      is="svg"
      ref="svgRef"
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
        ref="pathRef"
        d="M2.25 18L9 11.25L13.3064 15.5564C14.5101 13.188 16.5042 11.2022 19.1203 10.0375L21.8609 8.81726"
      />
      <path
        ref="arrowRef"
        d="M21.8609 8.81726L15.9196 6.53662M21.8609 8.81726L19.5802 14.7585"
      />
    </Motion>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArrowTrendingUpIcon",
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

const svgVariants = {
  normal: {
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
    },
  },
};

const svgRef = ref<SVGSVGElement>();
const pathRef = ref<SVGPathElement>();
const arrowRef = ref<SVGPathElement>();
const svgMotion = useMotion(svgRef, {
  initial: svgVariants.normal,
  enter: svgVariants.normal,
});

let isControlled = false;
let pathAnimation: Animation | null = null;
let arrowAnimation: Animation | null = null;

const startAnimation = () => {
  svgMotion.apply(svgVariants.animate);

  // Animate path drawing using Web Animations API
  if (pathRef.value) {
    const pathLength = pathRef.value.getTotalLength();
    pathRef.value.style.strokeDasharray = `${pathLength}`;
    pathRef.value.style.strokeDashoffset = `${pathLength}`;
    pathRef.value.style.opacity = "0";

    pathAnimation = pathRef.value.animate(
      [
        { strokeDashoffset: pathLength, opacity: 0 },
        { strokeDashoffset: 0, opacity: 1 },
      ],
      {
        duration: 400,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );
  }

  // Animate arrow path drawing with delay
  if (arrowRef.value) {
    const arrowLength = arrowRef.value.getTotalLength();
    arrowRef.value.style.strokeDasharray = `${arrowLength}`;
    arrowRef.value.style.strokeDashoffset = `${arrowLength * 0.5}`;
    arrowRef.value.style.opacity = "0";

    setTimeout(() => {
      if (arrowRef.value) {
        arrowAnimation = arrowRef.value.animate(
          [
            { strokeDashoffset: arrowLength * 0.5, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1 },
          ],
          {
            duration: 300,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );
      }
    }, 300);
  }
};

const stopAnimation = () => {
  svgMotion.apply(svgVariants.normal);

  if (pathAnimation) {
    pathAnimation.cancel();
    pathAnimation = null;
  }

  if (arrowAnimation) {
    arrowAnimation.cancel();
    arrowAnimation = null;
  }

  if (pathRef.value) {
    pathRef.value.style.strokeDasharray = "";
    pathRef.value.style.strokeDashoffset = "";
    pathRef.value.style.opacity = "1";
  }

  if (arrowRef.value) {
    arrowRef.value.style.strokeDasharray = "";
    arrowRef.value.style.strokeDashoffset = "";
    arrowRef.value.style.opacity = "1";
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
