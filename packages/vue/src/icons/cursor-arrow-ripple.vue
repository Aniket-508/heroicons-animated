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
        ref="cursorRef"
        d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
      />
      <Motion
        is="path"
        ref="ripple1Ref"
        d="M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999"
      />
      <Motion
        is="path"
        ref="ripple0Ref"
        d="M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CursorArrowRippleIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

// Match React CURSOR_VARIANTS: x [0,0,-3,0] y [0,-4,0,0] duration 1 bounce 0.3
const cursorVariants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1] }, // approx bounce
  },
};

// Match React RIPPLE_VARIANTS: opacity [0,1] duration 0.3 delay 1+custom*0.3 easeOut
const rippleVariants = (delay: number) => ({
  normal: { opacity: 1 },
  ripple: {
    opacity: [0, 1],
    transition: { duration: 0.3, delay, ease: "easeOut" },
  },
});

const cursorRef = ref<SVGPathElement | null>();
const ripple0Ref = ref<SVGPathElement | null>();
const ripple1Ref = ref<SVGPathElement | null>();

const cursorMotion = useMotion(cursorRef, {
  initial: cursorVariants.normal,
  enter: cursorVariants.normal,
});
const ripple0Motion = useMotion(ripple0Ref, {
  initial: rippleVariants(1).normal,
  enter: rippleVariants(1).normal,
});
const ripple1Motion = useMotion(ripple1Ref, {
  initial: rippleVariants(1.3).normal,
  enter: rippleVariants(1.3).normal,
});

let isControlled = false;

const startAnimation = () => {
  cursorMotion.apply(cursorVariants.animate);
  ripple0Motion.apply(rippleVariants(1).ripple);
  ripple1Motion.apply(rippleVariants(1.3).ripple);
};

const stopAnimation = () => {
  cursorMotion.apply(cursorVariants.normal);
  ripple0Motion.apply(rippleVariants(1).normal);
  ripple1Motion.apply(rippleVariants(1.3).normal);
};

const handleMouseEnter = () => {
  if (!isControlled) startAnimation();
};

const handleMouseLeave = () => {
  if (!isControlled) stopAnimation();
};

const setControlled = (value: boolean) => {
  isControlled = value;
};

defineExpose({ startAnimation, stopAnimation, setControlled });
</script>
