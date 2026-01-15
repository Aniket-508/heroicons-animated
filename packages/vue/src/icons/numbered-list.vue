<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
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
      <g v-for="(item, index) in LIST_ITEMS" :key="index">
        <path :d="item.numberPath" ref="numberRefs"/>
        <path :d="item.linePath" ref="lineRefs"/>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "NumberedListIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { onMounted, ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const NUMBER_DURATION = 200;
const LINE_DURATION = 300;

const LIST_ITEMS = [
  {
    numberPath:
      "M4.1157 7.49548V3.74512H2.99072M4.1157 7.49548H2.99072M4.1157 7.49548H5.24068",
    linePath: "M8.24185 5.99179H20.2416",
  },
  {
    numberPath:
      "M3.32128 10.0715C3.76061 9.63214 4.4729 9.63214 4.91223 10.0715C5.35157 10.5109 5.35157 11.2233 4.91223 11.6627L3.08285 13.4923L5.24182 13.4925",
    linePath: "M8.24118 11.9945H20.2409",
  },
  {
    numberPath:
      "M2.99072 15.7446H4.1156C4.73696 15.7446 5.24068 16.2484 5.24068 16.8697C5.24068 17.4911 4.73696 17.9949 4.1156 17.9949H3.74071M3.74071 17.9928H4.1156C4.73696 17.9928 5.24068 18.4966 5.24068 19.1179C5.24068 19.7393 4.73696 20.243 4.1156 20.243H2.99072",
    linePath: "M8.24185 17.9936H20.2416",
  },
];

const numberRefs = ref<SVGPathElement[]>([]);
const lineRefs = ref<SVGPathElement[]>([]);

const numberMotions: any[] = [];
const lineMotions: any[] = [];

onMounted(() => {
  numberRefs.value.forEach((el, index) => {
    numberMotions[index] = useMotion(el, {
      initial: { pathLength: 1, opacity: 1 },
    });
  });
  lineRefs.value.forEach((el, index) => {
    lineMotions[index] = useMotion(el, {
      initial: { pathLength: 1, opacity: 1 },
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  LIST_ITEMS.forEach((_, index) => {
    const numberDelay = index * (NUMBER_DURATION + LINE_DURATION);
    const lineDelay = numberDelay + NUMBER_DURATION;

    numberMotions[index]?.apply({
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: NUMBER_DURATION,
        delay: numberDelay,
      },
    });

    lineMotions[index]?.apply({
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: LINE_DURATION,
        delay: lineDelay,
      },
    });
  });
};

const stopAnimation = () => {
  numberMotions.forEach((m) => {
    m?.apply({ pathLength: 1, opacity: 1 });
  });
  lineMotions.forEach((m) => {
    m?.apply({ pathLength: 1, opacity: 1 });
  });
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
