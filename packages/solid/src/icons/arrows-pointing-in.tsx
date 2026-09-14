import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowsPointingInIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsPointingInIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowsPointingInIconHandle) => void;
}

const TOP_LEFT_ARROW_VARIANTS = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const BOTTOM_LEFT_ARROW_VARIANTS = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const TOP_RIGHT_ARROW_VARIANTS = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, -2, 0],
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const BOTTOM_RIGHT_ARROW_VARIANTS = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, -2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};
const ArrowsPointingInIcon = (rawProps: ArrowsPointingInIconProps) => {
  const props = mergeProps({ size: 28 }, rawProps);
  const [local, others] = splitProps(props, [
    "onMouseEnter",
    "onMouseLeave",
    "class",
    "size",
    "ref",
  ]);
  const [variant, setVariant] = createSignal("normal");
  let isControlled = false;

  if (local.ref) {
    isControlled = true;
    local.ref({
      startAnimation: () => setVariant("animate"),
      stopAnimation: () => setVariant("normal"),
    });
  }

  const handleMouseEnter: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
    e
  ) => {
    if (isControlled) {
      if (typeof local.onMouseEnter === "function") {
        local.onMouseEnter(e);
      }
    } else {
      setVariant("animate");
    }
  };

  const handleMouseLeave: JSX.EventHandler<HTMLDivElement, MouseEvent> = (
    e
  ) => {
    if (isControlled) {
      if (typeof local.onMouseLeave === "function") {
        local.onMouseLeave(e);
      }
    } else {
      setVariant("normal");
    }
  };

  return (
    <div
      class={cn(local.class)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...others}
    >
      <svg
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <Motion.g
          animate={resolveValues(TOP_LEFT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(TOP_LEFT_ARROW_VARIANTS, variant())}
        >
          <path d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(BOTTOM_LEFT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(BOTTOM_LEFT_ARROW_VARIANTS, variant())}
        >
          <path d="M9 15v4.5M9 15H4.5M9 15l-5.25 5.25" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(TOP_RIGHT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(TOP_RIGHT_ARROW_VARIANTS, variant())}
        >
          <path d="M15 9h4.5M15 9V4.5M15 9l5.25-5.25" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(BOTTOM_RIGHT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(BOTTOM_RIGHT_ARROW_VARIANTS, variant())}
        >
          <path d="M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { ArrowsPointingInIcon };
