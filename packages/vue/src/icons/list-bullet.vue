<template>
  <div
    v-bind="$attrs"
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
        <path :d="item.bulletPath" ref="bulletRefs" />
        <path :d="item.linePath" ref="lineRefs" />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "ListBulletIcon",
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
  {
    bulletPath:
      "M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75Z",
    linePath: "M8.25 6.75H20.25",
  },
  {
    bulletPath:
      "M3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12Z",
    linePath: "M8.25 12H20.25",
  },
  {
    bulletPath:
      "M3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z",
    linePath: "M8.25 17.25H20.25",
  },
];

const bulletRefs = ref<SVGPathElement[]>([]);
const lineRefs = ref<SVGPathElement[]>([]);

const bulletMotions: any[] = [];
const lineMotions: any[] = [];

onMounted(() => {
  bulletRefs.value.forEach((el, index) => {
    bulletMotions[index] = useMotion(el, {
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
  for (let index = 0; index < LIST_ITEMS.length; index++) {
    const bulletDelay = index * (DOT_DURATION + LINE_DURATION);
    const lineDelay = bulletDelay + DOT_DURATION;

    bulletMotions[index]?.apply({
      opacity: [0, 1],
      transition: {
        duration: DOT_DURATION,
        ease: "easeInOut",
        delay: bulletDelay,
      },
    });

    lineMotions[index]?.apply({
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        pathLength: {
          duration: LINE_DURATION,
          ease: "easeInOut",
          delay: lineDelay,
        },
        opacity: {
          duration: LINE_DURATION,
          ease: "easeInOut",
          delay: lineDelay,
        },
      },
    });
  }
};

const stopAnimation = () => {
  bulletMotions.forEach((m) => {
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
