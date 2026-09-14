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
        d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
        fill="none"
        stroke-opacity="0.4"
      />
      <path
        ref="path0Ref"
        d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
      />
      <path
        d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
        fill="none"
        stroke-opacity="0.4"
      />
      <path
        ref="path1Ref"
        d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
      />
      <path
        d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
        fill="none"
        stroke-opacity="0.4"
      />
      <path
        ref="path2Ref"
        d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
      />
      <path
        d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
        fill="none"
        stroke-opacity="0.4"
      />
      <path
        ref="path3Ref"
        d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
      />
      <path
        d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
        fill="none"
        stroke-opacity="0.4"
      />
      <path
        ref="path4Ref"
        d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "FingerPrintIcon",
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

  const pathVariants = {
    normal: { pathLength: 1, opacity: 1 },
    animate: {
      opacity: [0, 0, 1, 1, 1],
      pathLength: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
      transition: {
        opacity: { duration: 0.5 },
        pathLength: { duration: 2 },
      },
    },
  };

  const path0Ref = ref<SVGPathElement | null>(null);
  const path1Ref = ref<SVGPathElement | null>(null);
  const path2Ref = ref<SVGPathElement | null>(null);
  const path3Ref = ref<SVGPathElement | null>(null);
  const path4Ref = ref<SVGPathElement | null>(null);

  const motion0 = useMotion(path0Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const motion1 = useMotion(path1Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const motion2 = useMotion(path2Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const motion3 = useMotion(path3Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const motion4 = useMotion(path4Ref, {
    initial: pathVariants.normal,
    enter: pathVariants.normal,
  });
  const motions = [motion0, motion1, motion2, motion3, motion4];

  let isControlled = false;

  const startAnimation = () => {
    for (const motion of motions) {
      motion.apply(pathVariants.animate);
    }
  };

  const stopAnimation = () => {
    for (const motion of motions) {
      motion.apply(pathVariants.normal);
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
