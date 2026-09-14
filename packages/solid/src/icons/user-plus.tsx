import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface UserPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface UserPlusIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: UserPlusIconHandle) => void;
}

const VERTICAL_LINE_VARIANT = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.3,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
};

const HORIZONTAL_LINE_VARIANT = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.6,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.6 },
    },
  },
};
const UserPlusIcon = (rawProps: UserPlusIconProps) => {
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
        <path d="M13.75 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        <Motion.path
          animate={resolveValues(VERTICAL_LINE_VARIANT, variant())}
          d="M18 7.5v6"
          transition={resolveTransition(VERTICAL_LINE_VARIANT, variant())}
        />
        <Motion.path
          animate={resolveValues(HORIZONTAL_LINE_VARIANT, variant())}
          d="M15 10.5h6"
          transition={resolveTransition(HORIZONTAL_LINE_VARIANT, variant())}
        />
      </svg>
    </div>
  );
};

export { UserPlusIcon };
