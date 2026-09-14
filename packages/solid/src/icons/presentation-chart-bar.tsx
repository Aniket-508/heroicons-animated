import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface PresentationChartBarIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PresentationChartBarIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: PresentationChartBarIconHandle) => void;
}

const CREATE_BAR_VARIANTS = (delay: number) => ({
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
      opacity: { duration: 0.1, delay },
    },
  },
});
const PresentationChartBarIcon = (rawProps: PresentationChartBarIconProps) => {
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
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0), variant())}
          d="M9 11.25v1.5"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0.15), variant())}
          d="M12 9v3.75"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0.15), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_BAR_VARIANTS(0.3), variant())}
          d="M15 6.75v6"
          transition={resolveTransition(CREATE_BAR_VARIANTS(0.3), variant())}
        />
      </svg>
    </div>
  );
};

export { PresentationChartBarIcon };
