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
      <Motion is="path" ref="line1Ref" d="M7.5 8.25h9" />
      <Motion is="path" ref="line2Ref" d="M7.5 11.25H12" />
      <path
        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ChatBubbleBottomCenterTextIcon",
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

const visible = {
  pathLength: 1,
  opacity: 1,
  transition: { duration: 0.4 },
};

const hidden = (delay: number) => ({
  pathLength: 0,
  opacity: 0,
  transition: { delay, duration: 0.3 },
});

const toVisible = (delay: number) => ({
  pathLength: 1,
  opacity: 1,
  transition: { delay, duration: 0.3 },
});

const line1Ref = ref<SVGPathElement | null>();
const line2Ref = ref<SVGPathElement | null>();

const motion1 = useMotion(line1Ref, { initial: visible, enter: visible });
const motion2 = useMotion(line2Ref, { initial: visible, enter: visible });

let isControlled = false;

const startAnimation = async () => {
  await Promise.all([motion1.apply(hidden(0)), motion2.apply(hidden(0.1))]);
  await Promise.all([
    motion1.apply(toVisible(0)),
    motion2.apply(toVisible(0.1)),
  ]);
};

const stopAnimation = () => {
  motion1.apply(visible);
  motion2.apply(visible);
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
