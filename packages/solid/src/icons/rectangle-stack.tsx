import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface RectangleStackIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface RectangleStackIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: RectangleStackIconHandle) => void;
}

const STACK_VARIANTS = {
  normal: { scaleY: 1 },
  animate: {
    scaleY: [1, 1.08, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
const RectangleStackIcon = (rawProps: RectangleStackIconProps) => {
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
        animate={resolveValues(STACK_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transition={resolveTransition(STACK_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 6.87803V6C6 4.75736 7.00736 3.75 8.25 3.75H15.75C16.9926 3.75 18 4.75736 18 6V6.87803M6 6.87803C6.23458 6.79512 6.48702 6.75 6.75 6.75H17.25C17.513 6.75 17.7654 6.79512 18 6.87803M6 6.87803C5.12611 7.18691 4.5 8.02034 4.5 9V9.87803M18 6.87803C18.8739 7.18691 19.5 8.02034 19.5 9V9.87803M19.5 9.87803C19.2654 9.79512 19.013 9.75 18.75 9.75H5.25C4.98702 9.75 4.73458 9.79512 4.5 9.87803M19.5 9.87803C20.3739 10.1869 21 11.0203 21 12V18C21 19.2426 19.9926 20.25 18.75 20.25H5.25C4.00736 20.25 3 19.2426 3 18V12C3 11.0203 3.62611 10.1869 4.5 9.87803" />
      </Motion.svg>
    </div>
  );
};

export { RectangleStackIcon };
