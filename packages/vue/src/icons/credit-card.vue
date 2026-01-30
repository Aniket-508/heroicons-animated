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
        d="M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
      <Motion is="path" ref="line1Ref" d="M5.25 14.25h6" />
      <Motion is="path" ref="line2Ref" d="M5.25 16.5h3" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "CreditCardIcon",
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
  transition: { duration: 0.3 },
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
