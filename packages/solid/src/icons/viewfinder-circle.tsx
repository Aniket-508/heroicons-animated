import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ViewfinderCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ViewfinderCircleIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ViewfinderCircleIconHandle) => void;
}

const CORNER_VARIANTS = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  animate: {
    scale: 1.2,
    rotate: 45,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const CIRCLE_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
  animate: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

const ANIMATION_RESET_DELAY_MS = 400;

const ViewfinderCircleIcon = (rawProps: ViewfinderCircleIconProps) => {
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

  const runFocusAnimation = () => {
    setVariant("animate");
    setTimeout(() => {
      setVariant("normal");
    }, ANIMATION_RESET_DELAY_MS);
  };

  if (local.ref) {
    isControlled = true;
    local.ref({
      startAnimation: () => runFocusAnimation(),
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
      runFocusAnimation();
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
          animate={resolveValues(CORNER_VARIANTS, variant())}
          d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5"
          transition={resolveTransition(CORNER_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(CORNER_VARIANTS, variant())}
          d="M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5"
          transition={resolveTransition(CORNER_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(CORNER_VARIANTS, variant())}
          d="M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5"
          transition={resolveTransition(CORNER_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(CORNER_VARIANTS, variant())}
          d="M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5"
          transition={resolveTransition(CORNER_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(CIRCLE_VARIANTS, variant())}
          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
          transition={resolveTransition(CIRCLE_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { ViewfinderCircleIcon };
