import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface WindowIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WindowIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: WindowIconHandle) => void;
}

const BUTTON_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (delay: number) => ({
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};
const WindowIcon = (rawProps: WindowIconProps) => {
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
        <path d="M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21" />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 0)}
          d="M5.25 6H5.2575V6.0075H5.25V6Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 0)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 0.1)}
          d="M7.5 6H7.5075V6.0075H7.5V6Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 0.1)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 0.2)}
          d="M9.75 6H9.7575V6.0075H9.75V6Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 0.2)}
        />
      </svg>
    </div>
  );
};

export { WindowIcon };
