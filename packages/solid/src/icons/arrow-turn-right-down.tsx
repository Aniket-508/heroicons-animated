import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowTurnRightDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnRightDownIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowTurnRightDownIconHandle) => void;
}

const STRETCH_VARIANTS = {
  normal: { scaleY: 1, y: 0, opacity: 1 },
  animate: {
    scaleY: [1, 1.15, 1],
    y: [0, 2, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};
const ArrowTurnRightDownIcon = (rawProps: ArrowTurnRightDownIconProps) => {
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
      <Motion.svg
        animate={resolveValues(STRETCH_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transition={resolveTransition(STRETCH_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49" />
      </Motion.svg>
    </div>
  );
};

export { ArrowTurnRightDownIcon };
