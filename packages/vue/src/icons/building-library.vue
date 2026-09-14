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
        d="M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18"
      />
      <path ref="dotRef" d="M12 6.75h.008v.008H12V6.75Z" />
      <path ref="pillar1Ref" d="M8.25 12.75v8.25" />
      <path ref="pillar2Ref" d="M12 12.75v8.25" />
      <path ref="pillar3Ref" d="M15.75 12.75v8.25" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "BuildingLibraryIcon",
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

  const dotVariants = {
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      transition: {
        delay: 0.1,
        duration: 0.1,
      },
    },
  };

  const createPillarVariants = (custom: number) => ({
    normal: {
      pathLength: 1,
      opacity: 1,
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        delay: 0.2 + custom * 0.15,
        duration: 0.3,
        ease: "linear",
      },
    },
  });

  const dotRef = ref<SVGPathElement | null>(null);
  const pillar1Ref = ref<SVGPathElement | null>(null);
  const pillar2Ref = ref<SVGPathElement | null>(null);
  const pillar3Ref = ref<SVGPathElement | null>(null);

  const pillar1Variants = createPillarVariants(0);
  const pillar2Variants = createPillarVariants(1);
  const pillar3Variants = createPillarVariants(2);

  const dotMotion = useMotion(dotRef, {
    initial: dotVariants.normal,
    enter: dotVariants.normal,
  });
  const pillarRefs = [pillar1Ref, pillar2Ref, pillar3Ref] as const;
  const pillarVariants = [
    pillar1Variants,
    pillar2Variants,
    pillar3Variants,
  ] as const;
  const pillarMotions = pillarRefs.map((pillarRef, index) =>
    useMotion(pillarRef, {
      initial: pillarVariants[index].normal,
      enter: pillarVariants[index].normal,
    })
  );

  let isControlled = false;

  const startAnimation = () => {
    dotMotion.apply(dotVariants.animate);
    let index = 0;
    for (const pillarMotion of pillarMotions) {
      pillarMotion.apply(pillarVariants[index].animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    dotMotion.apply(dotVariants.normal);
    let index = 0;
    for (const pillarMotion of pillarMotions) {
      pillarMotion.apply(pillarVariants[index].normal);
      index += 1;
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
