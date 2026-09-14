import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface MagnifyingGlassCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MagnifyingGlassCircleIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: MagnifyingGlassCircleIconHandle) => void;
}

const VARIANTS = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, 0, -2, 0],
    y: [0, -3, 0, 0],
    transition: {
      duration: 1,
      bounce: 0.3,
    },
  },
};
const MagnifyingGlassCircleIcon = (
  rawProps: MagnifyingGlassCircleIconProps
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
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        <Motion.path
          animate={resolveValues(VARIANTS, variant())}
          d="M15.75 15.75L13.2615 13.2615M13.2615 13.2615C13.8722 12.6507 14.25 11.807 14.25 10.875C14.25 9.01104 12.739 7.5 10.875 7.5C9.01104 7.5 7.5 9.01104 7.5 10.875C7.5 12.739 9.01104 14.25 10.875 14.25C11.807 14.25 12.6507 13.8722 13.2615 13.2615"
          transition={resolveTransition(VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { MagnifyingGlassCircleIcon };
