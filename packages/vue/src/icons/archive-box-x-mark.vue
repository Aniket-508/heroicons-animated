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
        ref="path1Ref"
        d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
      />
      <Motion is="path" ref="path2Ref" d="M20.25 7.5L19.6246 18.1321" />
      <Motion is="path" ref="path3Ref" d="M3.75 7.5L4.37542 18.1321" />
      <Motion is="path" ref="xMark1Ref" d="M9.75 11.625L14.25 16.125" />
      <Motion is="path" ref="xMark2Ref" d="M14.25 11.625L9.75 16.125" />
      <Motion
        is="path"
        ref="lidRef"
        d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ArchiveBoxXMarkIcon",
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

const springTransition = {
  duration: 0.2,
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
};

const lidVariants = {
  normal: {
    translateY: 0,
    transition: springTransition,
  },
  animate: {
    translateY: -1.5,
    transition: springTransition,
  },
};

const pathVariants = {
  normal: {
    translateY: 0,
    transition: springTransition,
  },
  animate: {
    translateY: 1,
    transition: springTransition,
  },
};

const path1Ref = ref<SVGPathElement>();
const path2Ref = ref<SVGPathElement>();
const path3Ref = ref<SVGPathElement>();
const xMark1Ref = ref<SVGPathElement>();
const xMark2Ref = ref<SVGPathElement>();
const lidRef = ref<SVGPathElement>();

const path1Motion = useMotion(path1Ref, {
  initial: pathVariants.normal,
  enter: pathVariants.normal,
});
const path2Motion = useMotion(path2Ref, {
  initial: pathVariants.normal,
  enter: pathVariants.normal,
});
const path3Motion = useMotion(path3Ref, {
  initial: pathVariants.normal,
  enter: pathVariants.normal,
});
const lidMotion = useMotion(lidRef, {
  initial: lidVariants.normal,
  enter: lidVariants.normal,
});

let isControlled = false;
let xMark1Animation: Animation | null = null;
let xMark2Animation: Animation | null = null;

const startAnimation = () => {
  path1Motion.apply(pathVariants.animate);
  path2Motion.apply(pathVariants.animate);
  path3Motion.apply(pathVariants.animate);
  lidMotion.apply(lidVariants.animate);

  // Use Web Animations API for pathLength and opacity; match React delays (0.2s first X, 0.4s second X)
  setTimeout(() => {
    if (xMark1Ref.value) {
      const pathLength = xMark1Ref.value.getTotalLength();
      xMark1Ref.value.style.strokeDasharray = `${pathLength}`;
      xMark1Ref.value.style.strokeDashoffset = `${pathLength}`;
      xMark1Ref.value.style.opacity = "0";

      xMark1Animation = xMark1Ref.value.animate(
        [
          { strokeDashoffset: pathLength, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        {
          duration: 300,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
        },
      );
    }
  }, 200);

  setTimeout(() => {
    if (xMark2Ref.value) {
      const pathLength = xMark2Ref.value.getTotalLength();
      xMark2Ref.value.style.strokeDasharray = `${pathLength}`;
      xMark2Ref.value.style.strokeDashoffset = `${pathLength}`;
      xMark2Ref.value.style.opacity = "0";

      xMark2Animation = xMark2Ref.value.animate(
        [
          { strokeDashoffset: pathLength, opacity: 0 },
          { strokeDashoffset: 0, opacity: 1 },
        ],
        {
          duration: 300,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          fill: "forwards",
        },
      );
    }
  }, 400);
};

const stopAnimation = () => {
  path1Motion.apply(pathVariants.normal);
  path2Motion.apply(pathVariants.normal);
  path3Motion.apply(pathVariants.normal);
  lidMotion.apply(lidVariants.normal);

  // Stop and reset pathLength animations
  if (xMark1Animation) {
    xMark1Animation.cancel();
    xMark1Animation = null;
  }
  if (xMark2Animation) {
    xMark2Animation.cancel();
    xMark2Animation = null;
  }

  // Reset to initial state
  if (xMark1Ref.value) {
    xMark1Ref.value.style.opacity = "1";
    xMark1Ref.value.style.strokeDasharray = "none";
    xMark1Ref.value.style.strokeDashoffset = "0";
  }
  if (xMark2Ref.value) {
    xMark2Ref.value.style.opacity = "1";
    xMark2Ref.value.style.strokeDasharray = "none";
    xMark2Ref.value.style.strokeDashoffset = "0";
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
