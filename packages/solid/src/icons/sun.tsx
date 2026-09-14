import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface SunIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SunIconProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: SunIconHandle) => void;
}

const RAY_VARIANTS = {
  normal: { opacity: 1 },
  animate: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};
const SunIcon = (rawProps: SunIconProps) => {
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
        <circle cx="12" cy="12" r="3.75" />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 0)}
          d="M12 3V5.25"
          transition={resolveTransition(RAY_VARIANTS, variant(), 0)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 1)}
          d="M18.364 5.63604L16.773 7.22703"
          transition={resolveTransition(RAY_VARIANTS, variant(), 1)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 2)}
          d="M21 12H18.75"
          transition={resolveTransition(RAY_VARIANTS, variant(), 2)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 3)}
          d="M18.364 18.364L16.773 16.773"
          transition={resolveTransition(RAY_VARIANTS, variant(), 3)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 4)}
          d="M12 18.75V21"
          transition={resolveTransition(RAY_VARIANTS, variant(), 4)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 5)}
          d="M7.22703 16.773L5.63604 18.364"
          transition={resolveTransition(RAY_VARIANTS, variant(), 5)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 6)}
          d="M5.25 12H3"
          transition={resolveTransition(RAY_VARIANTS, variant(), 6)}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, variant(), 7)}
          d="M7.22703 7.22703L5.63604 5.63604"
          transition={resolveTransition(RAY_VARIANTS, variant(), 7)}
        />
      </svg>
    </div>
  );
};

export { SunIcon };
