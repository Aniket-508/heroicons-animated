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
        d="M15.75 18.75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
      />
      <g v-for="(item, index) in LIST_ITEMS" :key="index">
        <path :d="item.dotPath" ref="dotRefs" />
        <path :d="item.linePath" ref="lineRefs" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ClipboardDocumentListIcon",
};
</script>

<script setup lang="ts">
import { useMotion } from "@vueuse/motion";
import { onMounted, ref } from "vue";

export interface Props {
  size?: number;
  class?: string;
  [key: string]: any; // Allow all HTMLAttributes
}

const props = withDefaults(defineProps<Props>(), {
  size: 28,
});

const DOT_DURATION = 0.1;
const LINE_DURATION = 0.3;

const LIST_ITEMS = [
  { y: 12, dotPath: "M6.75 12h.008v.008H6.75V12Z", linePath: "M9 12h3.75" },
  { y: 15, dotPath: "M6.75 15h.008v.008H6.75V15Z", linePath: "M9 15h3.75" },
  { y: 18, dotPath: "M6.75 18h.008v.008H6.75V18Z", linePath: "M9 18h3.75" },
];

const dotRefs = ref<SVGPathElement[]>([]);
const lineRefs = ref<SVGPathElement[]>([]);

const dotMotions: any[] = [];
const lineMotions: any[] = [];

onMounted(() => {
  dotRefs.value.forEach((el, index) => {
    dotMotions[index] = useMotion(el, {
      initial: { opacity: 1 },
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
    const dotDelay = index * (DOT_DURATION + LINE_DURATION);
    const lineDelay = dotDelay + DOT_DURATION;

    dotMotions[index]?.apply({
      opacity: [0, 1],
      transition: {
        duration: DOT_DURATION,
        delay: dotDelay,
        ease: "easeInOut",
      },
    });

    lineMotions[index]?.apply({
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: LINE_DURATION,
        delay: lineDelay,
        ease: "easeInOut",
      },
    });
  });
};

const stopAnimation = () => {
  dotMotions.forEach((m) => {
    m?.apply({ opacity: 1 });
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
