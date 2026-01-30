<template>
  <div
    :class="props.class"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <Motion
      is="svg"
      ref="svgRef"
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
      <Motion
        is="path"
        ref="handlePathRef"
        d="M20.25 14.1499V18.4C20.25 19.4944 19.4631 20.4359 18.3782 20.58C16.2915 20.857 14.1624 21 12 21C9.83757 21 7.70854 20.857 5.62185 20.58C4.5369 20.4359 3.75 19.4944 3.75 18.4V14.1499M20.25 14.1499C20.7219 13.7476 21 13.1389 21 12.4889V8.70569C21 7.62475 20.2321 6.69082 19.1631 6.53086C18.0377 6.36247 16.8995 6.23315 15.75 6.14432M20.25 14.1499C20.0564 14.315 19.8302 14.4453 19.5771 14.5294C17.1953 15.3212 14.6477 15.75 12 15.75C9.35229 15.75 6.80469 15.3212 4.42289 14.5294C4.16984 14.4452 3.94361 14.3149 3.75 14.1499M3.75 14.1499C3.27808 13.7476 3 13.1389 3 12.4889V8.70569C3 7.62475 3.7679 6.69082 4.83694 6.53086C5.96233 6.36247 7.10049 6.23315 8.25 6.14432M12 12.75H12.0075V12.7575H12V12.75Z"
      />
      <Motion
        is="path"
        ref="handle2PathRef"
        d="M15.75 6.14432V5.25C15.75 4.00736 14.7426 3 13.5 3H10.5C9.25736 3 8.25 4.00736 8.25 5.25V6.14432M15.75 6.14432C14.5126 6.0487 13.262 6 12 6C10.738 6 9.48744 6.0487 8.25 6.14432"
      />
    </Motion>
  </div>
</template>

<script lang="ts">
export default {
  name: "BriefcaseIcon",
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

const svgVariants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const handleVariants = {
  normal: {
    y: 0,
  },
  animate: {
    y: [0, -1, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const svgRef = ref<SVGSVGElement>();
const handlePathRef = ref<SVGPathElement>();
const handle2PathRef = ref<SVGPathElement>();

const svgMotion = useMotion(svgRef, {
  initial: svgVariants.normal,
  enter: svgVariants.normal,
});

const handlePathMotion = useMotion(handlePathRef, {
  initial: handleVariants.normal,
  enter: handleVariants.normal,
});

const handle2PathMotion = useMotion(handle2PathRef, {
  initial: handleVariants.normal,
  enter: handleVariants.normal,
});

let isControlled = false;

const startAnimation = () => {
  svgMotion.apply(svgVariants.animate);
  handlePathMotion.apply(handleVariants.animate);
  handle2PathMotion.apply(handleVariants.animate);
};

const stopAnimation = () => {
  svgMotion.apply(svgVariants.normal);
  handlePathMotion.apply(handleVariants.normal);
  handle2PathMotion.apply(handleVariants.normal);
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
