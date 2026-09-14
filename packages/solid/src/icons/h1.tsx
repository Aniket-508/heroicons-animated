import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface H1IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface H1IconProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: H1IconHandle) => void;
}

const VARIANTS = {
  normal: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
    },
  },
  animate: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  },
};
const H1Icon = (rawProps: H1IconProps) => {
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
        <path d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
        <Motion.path
          animate={resolveValues(VARIANTS, variant())}
          d="M17.244 10.868l2.25-1.5v10.126h-2.25m2.25 0h2.25"
          style={{ "transform-origin": "50% 12px" }}
          transition={resolveTransition(VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { H1Icon };
