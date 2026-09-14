import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ChartPieIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChartPieIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ChartPieIconHandle) => void;
}

const PATH_VARIANTS = {
  normal: { translateX: 0, translateY: 0 },
  animate: { translateX: 1.1, translateY: -1.1 },
};
const ChartPieIcon = (rawProps: ChartPieIconProps) => {
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
        <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
          transition={resolveTransition(PATH_VARIANTS, variant(), undefined, {
            type: "spring",
            stiffness: 250,
            damping: 15,
            bounce: 0.6,
          })}
        />
      </svg>
    </div>
  );
};

export { ChartPieIcon };
