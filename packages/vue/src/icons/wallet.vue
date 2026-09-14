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
      :stroke="props.color"
      :stroke-width="props.strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12M21 12V9M3 12V9M21 12C21 10.7574 19.9926 9.75 18.75 9.75H15C15 11.4069 13.6569 12.75 12 12.75C10.3431 12.75 9 11.4069 9 9.75H5.25C4.00736 9.75 3 10.7574 3 12"
      />
      <path
        ref="card1Ref"
        d="M21 9C21 7.75736 19.9926 6.75 18.75 6.75H5.25C4.00736 6.75 3 7.75736 3 9M21 9V6M3 9V6"
      />
      <path
        ref="card2Ref"
        d="M21 9V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V9"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "WalletIcon",
  };
</script>

<script setup lang="ts">
  import { useMotion } from "../motion";
  import { ref } from "vue";

  export interface Props {
    size?: number;
    class?: string;
    color?: string;
    strokeWidth?: number | string;
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 28,
    color: "currentColor",
    strokeWidth: 1.5,
  });

  const cardNormal = {
    opacity: 1,
    y: 0,
  };
  const createCardAnimate = (delay: number) => ({
    opacity: [0, 1],
    y: [2, 0],
    transition: { duration: 0.4, delay, ease: "easeOut" },
  });

  const card1Ref = ref<SVGPathElement | null>(null);
  const card2Ref = ref<SVGPathElement | null>(null);
  const motion1 = useMotion(card1Ref, {
    initial: cardNormal,
    enter: cardNormal,
  });
  const motion2 = useMotion(card2Ref, {
    initial: cardNormal,
    enter: cardNormal,
  });

  let isControlled = false;

  const startAnimation = () => {
    motion1.apply(createCardAnimate(0));
    motion2.apply(createCardAnimate(0.15));
  };

  const stopAnimation = () => {
    motion1.apply(cardNormal);
    motion2.apply(cardNormal);
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
