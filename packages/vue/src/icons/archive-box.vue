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
      <Motion is="path" ref="path4Ref" d="M9.99976 11.25H13.9998" />
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
  name: "ArchiveBoxIcon",
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

const path1Ref = ref();
const path2Ref = ref();
const path3Ref = ref();
const path4Ref = ref();
const lidRef = ref();

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
const path4Motion = useMotion(path4Ref, {
  initial: pathVariants.normal,
  enter: pathVariants.normal,
});
const lidMotion = useMotion(lidRef, {
  initial: lidVariants.normal,
  enter: lidVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  path1Motion.apply(pathVariants.animate);
  path2Motion.apply(pathVariants.animate);
  path3Motion.apply(pathVariants.animate);
  path4Motion.apply(pathVariants.animate);
  lidMotion.apply(lidVariants.animate);
};

const stopAnimation = () => {
  path1Motion.apply(pathVariants.normal);
  path2Motion.apply(pathVariants.normal);
  path3Motion.apply(pathVariants.normal);
  path4Motion.apply(pathVariants.normal);
  lidMotion.apply(lidVariants.normal);
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
