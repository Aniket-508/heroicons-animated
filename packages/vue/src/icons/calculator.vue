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
        d="M12 2.25C10.108 2.25 8.24156 2.35947 6.40668 2.57241C5.30608 2.70014 4.5 3.649 4.5 4.75699V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.75699C19.5 3.649 18.6939 2.70014 17.5933 2.57241C15.7584 2.35947 13.892 2.25 12 2.25Z"
      />
      <Motion is="path" ref="screenRef" d="M8.25 6H15.75V8.25H8.25V6Z" />
      <Motion
        is="path"
        ref="button0Ref"
        d="M8.25 11.25H8.2575V11.2575H8.25V11.25Z"
      />
      <Motion
        is="path"
        ref="button2Ref"
        d="M10.7476 11.25H10.7551V11.2575H10.7476V11.25Z"
      />
      <Motion
        is="path"
        ref="button1Ref"
        d="M13.2524 13.5H13.2599V13.5075H13.2524V13.5Z"
      />
      <Motion
        is="path"
        ref="button4Ref"
        d="M8.25 15.75H8.2575V15.7575H8.25V15.75Z"
      />
      <Motion
        is="path"
        ref="button3Ref"
        d="M15.75 11.25H15.7575V11.2575H15.75V11.25Z"
      />
      <Motion
        is="path"
        ref="button5Ref"
        d="M10.7476 18H10.7551V18.0075H10.7476V18Z"
      />
      <path d="M8.25 13.5H8.2575V13.5075H8.25V13.5Z" />
      <path d="M8.25 18H8.2575V18.0075H8.25V18Z" />
      <path d="M10.7476 13.5H10.7551V13.5075H10.7476V13.5Z" />
      <path d="M10.7476 15.75H10.7551V15.7575H10.7476V15.75Z" />
      <path d="M13.2524 11.25H13.2599V11.2575H13.2524V11.25Z" />
      <path d="M13.2524 15.75H13.2599V15.7575H13.2524V15.75Z" />
      <path d="M13.2524 18H13.2599V18.0075H13.2524V18Z" />
      <path d="M15.75 13.5H15.7575V13.5075H15.75V13.5Z" />
      <Motion is="path" ref="enterRef" d="M15.75 15.75V18" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CalculatorIcon",
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

const createButtonVariants = (delay: number) => ({
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.5, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 0.15,
      delay: delay * 0.08,
      ease: "easeOut",
    },
  },
});

const enterVariants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 0.2,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const screenVariants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 0.2,
      delay: 0.65,
      ease: "easeOut",
    },
  },
};

const screenRef = ref<SVGPathElement>();
const button0Ref = ref<SVGPathElement>();
const button1Ref = ref<SVGPathElement>();
const button2Ref = ref<SVGPathElement>();
const button3Ref = ref<SVGPathElement>();
const button4Ref = ref<SVGPathElement>();
const button5Ref = ref<SVGPathElement>();
const enterRef = ref<SVGPathElement>();

const screenMotion = useMotion(screenRef, {
  initial: screenVariants.normal,
  enter: screenVariants.normal,
});

const button0Motion = useMotion(button0Ref, {
  initial: createButtonVariants(0).normal,
  enter: createButtonVariants(0).normal,
});

const button1Motion = useMotion(button1Ref, {
  initial: createButtonVariants(1).normal,
  enter: createButtonVariants(1).normal,
});

const button2Motion = useMotion(button2Ref, {
  initial: createButtonVariants(2).normal,
  enter: createButtonVariants(2).normal,
});

const button3Motion = useMotion(button3Ref, {
  initial: createButtonVariants(3).normal,
  enter: createButtonVariants(3).normal,
});

const button4Motion = useMotion(button4Ref, {
  initial: createButtonVariants(4).normal,
  enter: createButtonVariants(4).normal,
});

const button5Motion = useMotion(button5Ref, {
  initial: createButtonVariants(5).normal,
  enter: createButtonVariants(5).normal,
});

const enterMotion = useMotion(enterRef, {
  initial: enterVariants.normal,
  enter: enterVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  screenMotion.apply(screenVariants.animate);
  button0Motion.apply(createButtonVariants(0).animate);
  button1Motion.apply(createButtonVariants(1).animate);
  button2Motion.apply(createButtonVariants(2).animate);
  button3Motion.apply(createButtonVariants(3).animate);
  button4Motion.apply(createButtonVariants(4).animate);
  button5Motion.apply(createButtonVariants(5).animate);
  enterMotion.apply(enterVariants.animate);
};

const stopAnimation = () => {
  screenMotion.apply(screenVariants.normal);
  button0Motion.apply(createButtonVariants(0).normal);
  button1Motion.apply(createButtonVariants(1).normal);
  button2Motion.apply(createButtonVariants(2).normal);
  button3Motion.apply(createButtonVariants(3).normal);
  button4Motion.apply(createButtonVariants(4).normal);
  button5Motion.apply(createButtonVariants(5).normal);
  enterMotion.apply(enterVariants.normal);
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
