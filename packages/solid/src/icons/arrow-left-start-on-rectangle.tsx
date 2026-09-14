import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowLeftStartOnRectangleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLeftStartOnRectangleIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowLeftStartOnRectangleIconHandle) => void;
}

const ARROW_VARIANTS = {
  normal: { translateX: 0 },
  animate: {
    translateX: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};
const ArrowLeftStartOnRectangleIcon = (
  rawProps: ArrowLeftStartOnRectangleIconProps
) => {
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
        <path d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15" />
        <Motion.g
          animate={resolveValues(ARROW_VARIANTS, variant())}
          transition={resolveTransition(ARROW_VARIANTS, variant())}
        >
          <path d="M5.25 15l-3-3m0 0 3-3m-3 3H15" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { ArrowLeftStartOnRectangleIcon };
