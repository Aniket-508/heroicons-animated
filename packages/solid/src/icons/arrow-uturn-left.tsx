import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowUturnLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnLeftIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowUturnLeftIconHandle) => void;
}

const STRETCH_VARIANTS = {
  normal: { scaleX: 1, x: 0, opacity: 1, originX: 0.5, originY: 0.5 },
  animate: {
    scaleX: [1, 1.15, 1],
    x: [0, -1.5, 0],
    originX: 0.5,
    originY: 0.5,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};
const ArrowUturnLeftIcon = (rawProps: ArrowUturnLeftIconProps) => {
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
        <path d="M3 9h12a6 6 0 0 1 0 12h-3" />
        <Motion.g
          animate={resolveValues(STRETCH_VARIANTS, variant())}
          transition={resolveTransition(STRETCH_VARIANTS, variant())}
        >
          <path d="M9 15 3 9m0 0 6-6" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { ArrowUturnLeftIcon };
