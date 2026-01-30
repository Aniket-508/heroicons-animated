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
      <Motion is="path" ref="r0" d="M12 2.25V4.5" />
      <Motion is="path" ref="r1" d="M17.8336 4.66637L16.2426 6.25736" />
      <Motion is="path" ref="r2" d="M20.25 10.5H18" />
      <Motion is="path" ref="r3" d="M7.75736 14.7426L6.16637 16.3336" />
      <Motion is="path" ref="r4" d="M6 10.5H3.75" />
      <Motion is="path" ref="r5" d="M7.75736 6.25736L6.16637 4.66637" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CursorArrowRaysIcon",
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

const cursorVariants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: { duration: 1, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const rayCustoms = [
  { x: 0, y: -2 },
  { x: 2, y: -2 },
  { x: 2, y: 0 },
  { x: -2, y: 2 },
  { x: -2, y: 0 },
  { x: -2, y: -2 },
];

const raySpread = (custom: { x: number; y: number }) => ({
  opacity: [0, 1, 0, 0, 0, 0, 1],
  x: [0, custom.x, 0, 0],
  y: [0, custom.y, 0, 0],
  transition: {
    delay: 1.3,
    duration: 0.5,
    ease: [0.34, 1.56, 0.64, 1],
  },
});

const rayNormal = { opacity: 1, x: 0, y: 0 };

const cursorRef = ref<SVGPathElement | null>();
const r0 = ref<SVGPathElement | null>();
const r1 = ref<SVGPathElement | null>();
const r2 = ref<SVGPathElement | null>();
const r3 = ref<SVGPathElement | null>();
const r4 = ref<SVGPathElement | null>();
const r5 = ref<SVGPathElement | null>();

const cursorMotion = useMotion(cursorRef, {
  initial: cursorVariants.normal,
  enter: cursorVariants.normal,
});
const rayMotions = [
  useMotion(r0, { initial: rayNormal, enter: rayNormal }),
  useMotion(r1, { initial: rayNormal, enter: rayNormal }),
  useMotion(r2, { initial: rayNormal, enter: rayNormal }),
  useMotion(r3, { initial: rayNormal, enter: rayNormal }),
  useMotion(r4, { initial: rayNormal, enter: rayNormal }),
  useMotion(r5, { initial: rayNormal, enter: rayNormal }),
];

let isControlled = false;

const startAnimation = () => {
  cursorMotion.apply(cursorVariants.animate);
  for (let i = 0; i < 6; i++) {
    rayMotions[i].apply(raySpread(rayCustoms[i]));
  }
};

const stopAnimation = () => {
  cursorMotion.apply(cursorVariants.normal);
  for (let i = 0; i < 6; i++) {
    rayMotions[i].apply(rayNormal);
  }
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
