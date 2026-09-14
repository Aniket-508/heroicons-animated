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
        ref="path1Ref"
        d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
      />
      <path ref="path2Ref" d="M20.25 7.5L19.6246 18.1321" />
      <path ref="path3Ref" d="M3.75 7.5L4.37542 18.1321" />
      <path ref="path4Ref" d="M9.99976 11.25H13.9998" />
      <path
        ref="lidRef"
        d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ArchiveBoxIcon",
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

  const springTransition = {
    duration: 0.2,
    type: "spring" as const,
    stiffness: 200,
    damping: 25,
  };

  const lidVariants = {
    normal: {
      translateY: 0,
      transition: springTransition,
    },
    animate: {
      translateY: -1.5,
      transition: springTransition,
    },
  };

  const pathVariants = {
    normal: {
      translateY: 0,
      transition: springTransition,
    },
    animate: {
      translateY: 1,
      transition: springTransition,
    },
  };

  const path1Ref = ref<SVGPathElement | null>(null);
  const path2Ref = ref<SVGPathElement | null>(null);
  const path3Ref = ref<SVGPathElement | null>(null);
  const path4Ref = ref<SVGPathElement | null>(null);
  const lidRef = ref<SVGPathElement | null>(null);
  const pathRefs = [path1Ref, path2Ref, path3Ref, path4Ref] as const;
  const pathMotions = pathRefs.map((pathRef) =>
    useMotion(pathRef, {
      initial: pathVariants.normal,
      enter: pathVariants.normal,
    })
  );
  const lidMotion = useMotion(lidRef, {
    initial: lidVariants.normal,
    enter: lidVariants.normal,
  });

  let isControlled = false;

  const startAnimation = () => {
    for (const pathMotion of pathMotions) {
      pathMotion.apply(pathVariants.animate);
    }
    lidMotion.apply(lidVariants.animate);
  };

  const stopAnimation = () => {
    for (const pathMotion of pathMotions) {
      pathMotion.apply(pathVariants.normal);
    }
    lidMotion.apply(lidVariants.normal);
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
