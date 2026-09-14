import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowLongRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLongRightIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowLongRightIconHandle) => void;
}

const ARROW_HEAD_VARIANTS = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const LINE_VARIANTS = {
  normal: { d: "M21 12H3" },
  animate: {
    d: ["M21 12H3", "M18 12H3", "M21 12H3"],
    transition: {
      duration: 0.4,
    },
  },
};
const ArrowLongRightIcon = (rawProps: ArrowLongRightIconProps) => {
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
          animate={resolveValues(ARROW_HEAD_VARIANTS, variant())}
          d="M17.25 8.25 21 12m0 0-3.75 3.75"
          transition={resolveTransition(ARROW_HEAD_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(LINE_VARIANTS, variant())}
          d="M21 12H3"
          transition={resolveTransition(LINE_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { ArrowLongRightIcon };
