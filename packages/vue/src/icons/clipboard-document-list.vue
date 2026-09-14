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
        d="M15.75 18.75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"
      />
      <path ref="dot1Ref" d="M6.75 12h.008v.008H6.75V12Z" />
      <path ref="line1Ref" d="M9 12h3.75" />
      <path ref="dot2Ref" d="M6.75 15h.008v.008H6.75V15Z" />
      <path ref="line2Ref" d="M9 15h3.75" />
      <path ref="dot3Ref" d="M6.75 18h.008v.008H6.75V18Z" />
      <path ref="line3Ref" d="M9 18h3.75" />
    </svg>
  </div>
</template>

<script lang="ts">
  export default {
    name: "ClipboardDocumentListIcon",
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

  const DOT_DURATION = 0.1;
  const LINE_DURATION = 0.3;

  const createDotVariants = (delay: number) => ({
    normal: {
      opacity: 1,
    },
    animate: {
      opacity: [0, 1],
      transition: {
        duration: DOT_DURATION,
        ease: "easeInOut",
        delay,
      },
    },
  });

  const createLineVariants = (delay: number) => ({
    normal: {
      pathLength: 1,
      opacity: 1,
    },
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1],
      transition: {
        pathLength: { duration: LINE_DURATION, ease: "easeInOut", delay },
        opacity: { duration: LINE_DURATION, ease: "easeInOut", delay },
      },
    },
  });

  const dotDelay0 = 0;
  const dotDelay1 = DOT_DURATION + LINE_DURATION;
  const dotDelay2 = (DOT_DURATION + LINE_DURATION) * 2;

  const lineDelay0 = dotDelay0 + DOT_DURATION;
  const lineDelay1 = dotDelay1 + DOT_DURATION;
  const lineDelay2 = dotDelay2 + DOT_DURATION;

  const dot1Variants = createDotVariants(dotDelay0);
  const dot2Variants = createDotVariants(dotDelay1);
  const dot3Variants = createDotVariants(dotDelay2);

  const line1Variants = createLineVariants(lineDelay0);
  const line2Variants = createLineVariants(lineDelay1);
  const line3Variants = createLineVariants(lineDelay2);

  const dot1Ref = ref<SVGPathElement | null>(null);
  const line1Ref = ref<SVGPathElement | null>(null);
  const dot2Ref = ref<SVGPathElement | null>(null);
  const line2Ref = ref<SVGPathElement | null>(null);
  const dot3Ref = ref<SVGPathElement | null>(null);
  const line3Ref = ref<SVGPathElement | null>(null);
  const itemRefs = [
    { dotRef: dot1Ref, lineRef: line1Ref },
    { dotRef: dot2Ref, lineRef: line2Ref },
    { dotRef: dot3Ref, lineRef: line3Ref },
  ] as const;
  const itemVariants = [
    { dot: dot1Variants, line: line1Variants },
    { dot: dot2Variants, line: line2Variants },
    { dot: dot3Variants, line: line3Variants },
  ] as const;
  const itemMotions = itemRefs.map((item, index) => ({
    dotMotion: useMotion(item.dotRef, {
      initial: itemVariants[index].dot.normal,
      enter: itemVariants[index].dot.normal,
    }),
    lineMotion: useMotion(item.lineRef, {
      initial: itemVariants[index].line.normal,
      enter: itemVariants[index].line.normal,
    }),
  }));

  let isControlled = false;

  const startAnimation = () => {
    let index = 0;
    for (const itemMotion of itemMotions) {
      itemMotion.dotMotion.apply(itemVariants[index].dot.animate);
      itemMotion.lineMotion.apply(itemVariants[index].line.animate);
      index += 1;
    }
  };

  const stopAnimation = () => {
    let index = 0;
    for (const itemMotion of itemMotions) {
      itemMotion.dotMotion.apply(itemVariants[index].dot.normal);
      itemMotion.lineMotion.apply(itemVariants[index].line.normal);
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
