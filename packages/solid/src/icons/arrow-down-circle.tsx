import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowDownCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownCircleIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowDownCircleIconHandle) => void;
}

const ARROW_VARIANTS = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};
const ArrowDownCircleIcon = (rawProps: ArrowDownCircleIconProps) => {
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
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <Motion.g
          animate={resolveValues(ARROW_VARIANTS, variant())}
          transition={resolveTransition(ARROW_VARIANTS, variant())}
        >
          <path d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { ArrowDownCircleIcon };
