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
      <line ref="line1Ref" x1="10.5" x2="20.25" y1="6" y2="6" />
      <line ref="line2Ref" x1="3.75" x2="7.5" y1="6" y2="6" />
      <circle ref="circle1Ref" cx="9" cy="6" fill="none" r="1.5" />

      <line ref="line3Ref" x1="16.5" x2="20.25" y1="12" y2="12" />
      <line ref="line4Ref" x1="3.75" x2="13.5" y1="12" y2="12" />
      <circle ref="circle2Ref" cx="15" cy="12" fill="none" r="1.5" />

      <line ref="line5Ref" x1="10.5" x2="20.25" y1="18" y2="18" />
      <line ref="line6Ref" x1="3.75" x2="7.5" y1="18" y2="18" />
      <circle ref="circle3Ref" cx="9" cy="18" fill="none" r="1.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "AdjustmentsHorizontalIcon",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const defaultOptions = {
  duration: 300,
  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Approximate spring
};

const line1Ref = ref<SVGLineElement>();
const line2Ref = ref<SVGLineElement>();
const circle1Ref = ref<SVGCircleElement>();
const line3Ref = ref<SVGLineElement>();
const line4Ref = ref<SVGLineElement>();
const circle2Ref = ref<SVGCircleElement>();
const line5Ref = ref<SVGLineElement>();
const line6Ref = ref<SVGLineElement>();
const circle3Ref = ref<SVGCircleElement>();

let isControlled = false;

const startAnimation = () => {
  if (!isControlled) {
    // Row 1
    line1Ref.value?.animate([{ x1: 10.5 }, { x1: 13.5 }], defaultOptions);
    line2Ref.value?.animate([{ x2: 7.5 }, { x2: 10.5 }], defaultOptions);
    circle1Ref.value?.animate([{ cx: 9 }, { cx: 12 }], defaultOptions);

    // Row 2
    line3Ref.value?.animate([{ x1: 16.5 }, { x1: 13.5 }], defaultOptions);
    line4Ref.value?.animate([{ x2: 13.5 }, { x2: 10.5 }], defaultOptions);
    circle2Ref.value?.animate([{ cx: 15 }, { cx: 12 }], defaultOptions);

    // Row 3
    line5Ref.value?.animate([{ x1: 10.5 }, { x1: 13.5 }], defaultOptions);
    line6Ref.value?.animate([{ x2: 7.5 }, { x2: 10.5 }], defaultOptions);
    circle3Ref.value?.animate([{ cx: 9 }, { cx: 12 }], defaultOptions);
  }
};

const stopAnimation = () => {
  // Row 1
  line1Ref.value?.animate([{ x1: 13.5 }, { x1: 10.5 }], defaultOptions);
  line2Ref.value?.animate([{ x2: 10.5 }, { x2: 7.5 }], defaultOptions);
  circle1Ref.value?.animate([{ cx: 12 }, { cx: 9 }], defaultOptions);

  // Row 2
  line3Ref.value?.animate([{ x1: 13.5 }, { x1: 16.5 }], defaultOptions);
  line4Ref.value?.animate([{ x2: 10.5 }, { x2: 13.5 }], defaultOptions);
  circle2Ref.value?.animate([{ cx: 12 }, { cx: 15 }], defaultOptions);

  // Row 3
  line5Ref.value?.animate([{ x1: 13.5 }, { x1: 10.5 }], defaultOptions);
  line6Ref.value?.animate([{ x2: 10.5 }, { x2: 7.5 }], defaultOptions);
  circle3Ref.value?.animate([{ cx: 12 }, { cx: 9 }], defaultOptions);
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
