import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface PauseIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PauseIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: PauseIconHandle) => void;
}

const BASE_VARIANTS = {
  normal: {
    y: 0,
  },
};

const BASE_TRANSITION = {
  transition: {
    times: [0, 0.2, 0.5, 1],
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

const LEFT_BAR_VARIANTS = {
  ...BASE_VARIANTS,
  animate: {
    y: [0, 0, 2, 0],
    ...BASE_TRANSITION,
  },
};

const RIGHT_BAR_VARIANTS = {
  ...BASE_VARIANTS,
  animate: {
    y: [0, 2, 0, 0],
    ...BASE_TRANSITION,
  },
};
const PauseIcon = (rawProps: PauseIconProps) => {
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
        <Motion.path
          animate={resolveValues(LEFT_BAR_VARIANTS, variant())}
          d="M15.75 5.25v13.5"
          transition={resolveTransition(LEFT_BAR_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(RIGHT_BAR_VARIANTS, variant())}
          d="M8.25 5.25v13.5"
          transition={resolveTransition(RIGHT_BAR_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { PauseIcon };
