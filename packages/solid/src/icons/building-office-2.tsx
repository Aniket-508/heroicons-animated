import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface BuildingOffice2IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BuildingOffice2IconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: BuildingOffice2IconHandle) => void;
}

const WINDOW_VARIANTS = {
  normal: {
    opacity: 1,
  },
  animate: (custom: number) => ({
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "linear",
      delay: 0.1 + custom * 0.15,
    },
  }),
};

const WINDOWS = [
  { path: "M6.75 12.75h.75", index: 0 },
  { path: "M6.75 9.75h.75", index: 1 },
  { path: "M6.75 6.75h.75", index: 2 },
  { path: "M10.5 12.75h.75", index: 0 },
  { path: "M10.5 9.75h.75", index: 1 },
  { path: "M10.5 6.75h.75", index: 2 },
  { path: "M17.25 17h.008v.008h-.008v-.008Z", index: 0 },
  { path: "M17.25 14h.008v.008h-.008v-.008Z", index: 1 },
  { path: "M17.25 11h.008v.008h-.008v-.008Z", index: 2 },
] as const;
const BuildingOffice2Icon = (rawProps: BuildingOffice2IconProps) => {
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
        <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21" />
        {WINDOWS.map((window) => {
          return (
            <Motion.path
              animate={resolveValues(WINDOW_VARIANTS, variant(), window.index)}
              d={window.path}
              transition={resolveTransition(
                WINDOW_VARIANTS,
                variant(),
                window.index
              )}
            />
          );
        })}
      </svg>
    </div>
  );
};

export { BuildingOffice2Icon };
