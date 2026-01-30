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
      <line ref="line1Ref" x1="6" x2="6" y1="3.75" y2="13.5" />
      <line ref="line2Ref" x1="6" x2="6" y1="16.5" y2="20.25" />
      <circle ref="circle1Ref" cx="6" cy="15" fill="none" r="1.5" />

      <line ref="line3Ref" x1="12" x2="12" y1="3.75" y2="7.5" />
      <line ref="line4Ref" x1="12" x2="12" y1="10.5" y2="20.25" />
      <circle ref="circle2Ref" cx="12" cy="9" fill="none" r="1.5" />

      <line ref="line5Ref" x1="18" x2="18" y1="3.75" y2="13.5" />
      <line ref="line6Ref" x1="18" x2="18" y1="16.5" y2="20.25" />
      <circle ref="circle3Ref" cx="18" cy="15" fill="none" r="1.5" />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "AdjustmentsVerticalIcon",
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
    // Column 1
    line1Ref.value?.animate([{ y2: 13.5 }, { y2: 10.5 }], defaultOptions);
    line2Ref.value?.animate([{ y1: 16.5 }, { y1: 13.5 }], defaultOptions);
    circle1Ref.value?.animate([{ cy: 15 }, { cy: 12 }], defaultOptions);

    // Column 2
    line3Ref.value?.animate([{ y2: 7.5 }, { y2: 10.5 }], defaultOptions);
    line4Ref.value?.animate([{ y1: 10.5 }, { y1: 13.5 }], defaultOptions);
    circle2Ref.value?.animate([{ cy: 9 }, { cy: 12 }], defaultOptions);

    // Column 3
    line5Ref.value?.animate([{ y2: 13.5 }, { y2: 10.5 }], defaultOptions);
    line6Ref.value?.animate([{ y1: 16.5 }, { y1: 13.5 }], defaultOptions);
    circle3Ref.value?.animate([{ cy: 15 }, { cy: 12 }], defaultOptions);
  }
};

const stopAnimation = () => {
  // Column 1
  line1Ref.value?.animate([{ y2: 10.5 }, { y2: 13.5 }], defaultOptions);
  line2Ref.value?.animate([{ y1: 13.5 }, { y1: 16.5 }], defaultOptions);
  circle1Ref.value?.animate([{ cy: 12 }, { cy: 15 }], defaultOptions);

  // Column 2
  line3Ref.value?.animate([{ y2: 10.5 }, { y2: 7.5 }], defaultOptions);
  line4Ref.value?.animate([{ y1: 13.5 }, { y1: 10.5 }], defaultOptions);
  circle2Ref.value?.animate([{ cy: 12 }, { cy: 9 }], defaultOptions);

  // Column 3
  line5Ref.value?.animate([{ y2: 10.5 }, { y2: 13.5 }], defaultOptions);
  line6Ref.value?.animate([{ y1: 13.5 }, { y1: 16.5 }], defaultOptions);
  circle3Ref.value?.animate([{ cy: 12 }, { cy: 15 }], defaultOptions);
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
