import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ChartBarSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChartBarSquareIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ChartBarSquareIconHandle) => void;
}

const CREATE_BAR_VARIANTS = (delay: number) => ({
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
      opacity: { duration: 0.1, delay },
    },
  },
});
const ChartBarSquareIcon = (rawProps: ChartBarSquareIconProps) => {
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
        <path d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0), variant())}
          d="M7.5 14.25v2.25"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0.15), variant())}
          d="M10.5 12v4.5"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0.15), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0.3), variant())}
          d="M13.5 9.75v6.75"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0.3), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0.45), variant())}
          d="M16.5 7.5v9"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0.45), variant())}
        />
      </svg>
    </div>
  );
};

export { ChartBarSquareIcon };
