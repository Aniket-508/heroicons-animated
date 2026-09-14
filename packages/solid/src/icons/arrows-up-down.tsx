import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowsUpDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsUpDownIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowsUpDownIconHandle) => void;
}

const UP_ARROW_VARIANTS = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const DOWN_ARROW_VARIANTS = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};
const ArrowsUpDownIcon = (rawProps: ArrowsUpDownIconProps) => {
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
    if (!isControlled) {
      setVariant("animate");
    }
    if (typeof local.onMouseEnter === "function") {
      local.onMouseEnter(e);
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
          animate={resolveValues(UP_ARROW_VARIANTS, variant())}
          transition={resolveTransition(UP_ARROW_VARIANTS, variant())}
        >
          <path d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(DOWN_ARROW_VARIANTS, variant())}
          transition={resolveTransition(DOWN_ARROW_VARIANTS, variant())}
        >
          <path d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { ArrowsUpDownIcon };
