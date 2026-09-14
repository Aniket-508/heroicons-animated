import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface Bars2IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Bars2IconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: Bars2IconHandle) => void;
}

const TRANSITION = {
  duration: 0.3,
  ease: "easeInOut",
};

const CREATE_BAR_VARIANTS = (delay: number) => ({
  normal: {
    scaleX: 1,
    transition: TRANSITION,
  },
  animate: {
    scaleX: [1, 0.6, 1],
    transition: {
      ...TRANSITION,
      delay,
    },
  },
});

const BARS = [
  { d: "M3.75 9h16.5", delay: 0 },
  { d: "M3.75 15.75h16.5", delay: 0.1 },
] as const;
const Bars2Icon = (rawProps: Bars2IconProps) => {
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
        {BARS.map((bar) => (
          <Motion.path
            animate={resolveValues(CREATE_BAR_VARIANTS(bar.delay), variant())}
            d={bar.d}
            style={{ "transform-origin": "center" }}
            transition={resolveTransition(
              CREATE_BAR_VARIANTS(bar.delay),
              variant()
            )}
          />
        ))}
      </svg>
    </div>
  );
};

export { Bars2Icon };
