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
      <defs>
        <clipPath :id="clipId">
          <Motion is="rect" ref="clipRectRef" height="4.5" x="4.5" y="10.5" />
        </clipPath>
      </defs>
      <path
        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21"
      />
      <path
        d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z"
      />
      <path d="M4.5 10.5H18V15H4.5v-4.5Z" />
      <path
        :clip-path="`url(#${clipId})`"
        d="M4.5 10.5H18V15H4.5v-4.5Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "Battery100Icon",
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

const clipId = `battery-clip-${Math.random().toString(36).substr(2, 9)}`;

const clipVariants = {
  normal: {
    width: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  animate: {
    width: 13.5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const clipRectRef = ref<SVGRectElement>();
const clipMotion = useMotion(clipRectRef, {
  initial: clipVariants.normal,
  enter: clipVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  clipMotion.apply(clipVariants.animate);
};

const stopAnimation = () => {
  clipMotion.apply(clipVariants.normal);
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
