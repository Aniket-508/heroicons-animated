import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface Bars3BottomLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Bars3BottomLeftIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: Bars3BottomLeftIconHandle) => void;
}

const CREATE_SLIDE_VARIANTS = (delay: number) => ({
  normal: {
    translateX: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    translateX: [0, -3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay,
    },
  },
});

const BOTTOM_BAR_VARIANTS = {
  normal: {
    translateX: 0,
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    translateX: [0, -2, 0],
    pathLength: [1, 0.5, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};
const Bars3BottomLeftIcon = (rawProps: Bars3BottomLeftIconProps) => {
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
          animate={resolveValues(CREATE_SLIDE_VARIANTS(0), variant())}
          d="M3.75 6.75h16.5"
          transition={resolveTransition(CREATE_SLIDE_VARIANTS(0), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_SLIDE_VARIANTS(0.05), variant())}
          d="M3.75 12h16.5"
          transition={resolveTransition(CREATE_SLIDE_VARIANTS(0.05), variant())}
        />
        <Motion.path
          animate={resolveValues(BOTTOM_BAR_VARIANTS, variant())}
          d="M3.75 17.25H12"
          transition={resolveTransition(BOTTOM_BAR_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { Bars3BottomLeftIcon };
