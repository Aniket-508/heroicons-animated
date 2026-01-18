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
      <path
        d="M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z"
      />
      <path
        v-for="(item, index) in LIST_ITEMS"
        :key="index"
        :d="item.path"
        ref="itemRefs"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "QueueListIcon",
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

const ITEM_DURATION = 200;
const INITIAL_DELAY = 100;
const STAGGER_DELAY = 150;

const LIST_ITEMS = [
  { y: 19.5, path: "M3.75 19.5H20.25" },
  { y: 15.75, path: "M3.75 15.75H20.25" },
  { y: 12, path: "M3.75 12H20.25" },
];

const itemRefs = ref<SVGPathElement[]>([]);
const itemMotions: any[] = [];

onMounted(() => {
  itemRefs.value.forEach((el, index) => {
    itemMotions[index] = useMotion(el, {
      initial: { opacity: 1 },
    });
  });
});

let isControlled = false;

const startAnimation = () => {
  LIST_ITEMS.forEach((_, index) => {
    const delay =
      INITIAL_DELAY + (LIST_ITEMS.length - 1 - index) * STAGGER_DELAY;
    itemMotions[index]?.apply({
      opacity: [0, 1],
      transition: {
        duration: ITEM_DURATION,
        delay,
        ease: "easeOut",
      },
    });
  });
};

const stopAnimation = () => {
  itemMotions.forEach((m) => {
    m?.apply({ opacity: 1 });
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
