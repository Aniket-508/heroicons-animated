import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowsPointingOutIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsPointingOutIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowsPointingOutIconHandle) => void;
}

const TOP_LEFT_ARROW_VARIANTS = {
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

const BOTTOM_LEFT_ARROW_VARIANTS = {
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

const TOP_RIGHT_ARROW_VARIANTS = {
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

const BOTTOM_RIGHT_ARROW_VARIANTS = {
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
const ArrowsPointingOutIcon = (rawProps: ArrowsPointingOutIconProps) => {
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
          <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(BOTTOM_LEFT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(BOTTOM_LEFT_ARROW_VARIANTS, variant())}
        >
          <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(TOP_RIGHT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(TOP_RIGHT_ARROW_VARIANTS, variant())}
        >
          <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(BOTTOM_RIGHT_ARROW_VARIANTS, variant())}
          transition={resolveTransition(BOTTOM_RIGHT_ARROW_VARIANTS, variant())}
        >
          <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { ArrowsPointingOutIcon };
