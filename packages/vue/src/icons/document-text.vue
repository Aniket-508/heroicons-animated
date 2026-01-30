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
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
      <Motion is="path" ref="line0Ref" d="M8.25 12.75h7.5" />
      <Motion is="path" ref="line1Ref" d="M8.25 15.75H12" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "DocumentTextIcon",
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

// Match React: 2 lines hide (pathLength 0, opacity 0, delay i*0.1, 0.3s) then show (pathLength 1, opacity 1, same)
const hidden = (i: number) => ({
  pathLength: 0,
  opacity: 0,
  transition: { delay: i * 0.1, duration: 0.3 },
});
const visible = (i: number) => ({
  pathLength: 1,
  opacity: 1,
  transition: { delay: i * 0.1, duration: 0.3 },
});

const line0Ref = ref<SVGPathElement | null>();
const line1Ref = ref<SVGPathElement | null>();
const motion0 = useMotion(line0Ref, {
  initial: { pathLength: 1, opacity: 1 },
  enter: { pathLength: 1, opacity: 1 },
});
const motion1 = useMotion(line1Ref, {
  initial: { pathLength: 1, opacity: 1 },
  enter: { pathLength: 1, opacity: 1 },
});

let isControlled = false;

const startAnimation = async () => {
  motion0.apply(hidden(0));
  motion1.apply(hidden(1));
  await new Promise((r) => setTimeout(r, 400));
  motion0.apply(visible(0));
  motion1.apply(visible(1));
};

const stopAnimation = () => {
  motion0.apply({ pathLength: 1, opacity: 1 });
  motion1.apply({ pathLength: 1, opacity: 1 });
};

const handleMouseEnter = async () => {
  if (!isControlled) {
    await startAnimation();
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
