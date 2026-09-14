import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface FolderArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FolderArrowDownIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: FolderArrowDownIconHandle) => void;
}

const ARROW_VARIANTS = {
  normal: { y: 0 },
  animate: { y: [0, 2, 0] },
};

const ARROW_TRANSITION = {
  times: [0, 0.4, 1],
  duration: 0.5,
};
const FolderArrowDownIcon = (rawProps: FolderArrowDownIconProps) => {
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
        <path d="M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z" />
        <Motion.g
          animate={resolveValues(ARROW_VARIANTS, variant())}
          transition={resolveTransition(
            ARROW_VARIANTS,
            variant(),
            undefined,
            ARROW_TRANSITION
          )}
        >
          <path d="M9 13.5L12 16.5M12 16.5L15 13.5M12 16.5L12 10.5" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { FolderArrowDownIcon };
