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
      <path
        d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z"
      />
      <Motion is="path" ref="line0Ref" d="M15 9H18.75" />
      <Motion is="path" ref="line1Ref" d="M15 12H18.75" />
      <Motion is="path" ref="line2Ref" d="M15 15H18.75" />
      <Motion
        is="path"
        ref="circleRef"
        d="M10.5 9.375C10.5 10.4105 9.66053 11.25 8.625 11.25C7.58947 11.25 6.75 10.4105 6.75 9.375C6.75 8.33947 7.58947 7.5 8.625 7.5C9.66053 7.5 10.5 8.33947 10.5 9.375Z"
      />
      <Motion
        is="path"
        ref="chinRef"
        d="M11.7939 15.7114C10.8489 16.2147 9.77021 16.5 8.62484 16.5C7.47948 16.5 6.40074 16.2147 5.45581 15.7114C5.92986 14.4207 7.16983 13.5 8.62484 13.5C10.0799 13.5 11.3198 14.4207 11.7939 15.7114Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "IdentificationIcon",
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

const baseNormal = { pathLength: 1, opacity: 1 };
const makeAnimate = (delay: number) => ({
  pathLength: [0, 1],
  opacity: [0, 1],
  transition: { duration: 0.3, delay },
});

const line0Ref = ref<SVGPathElement | null>();
const line1Ref = ref<SVGPathElement | null>();
const line2Ref = ref<SVGPathElement | null>();
const circleRef = ref<SVGPathElement | null>();
const chinRef = ref<SVGPathElement | null>();
const motions = [
  useMotion(chinRef, { initial: baseNormal, enter: baseNormal }),
  useMotion(circleRef, { initial: baseNormal, enter: baseNormal }),
  useMotion(line0Ref, { initial: baseNormal, enter: baseNormal }),
  useMotion(line1Ref, { initial: baseNormal, enter: baseNormal }),
  useMotion(line2Ref, { initial: baseNormal, enter: baseNormal }),
];
const delays = [0, 0.1, 0.2, 0.2, 0.2];

let isControlled = false;

const startAnimation = () => {
  for (let i = 0; i < motions.length; i++) {
    motions[i].apply(makeAnimate(delays[i]));
  }
};

const stopAnimation = () => {
  for (const m of motions) {
    m.apply(baseNormal);
  }
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
