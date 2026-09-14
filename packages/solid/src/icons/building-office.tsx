import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface BuildingOfficeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BuildingOfficeIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: BuildingOfficeIconHandle) => void;
}

const FLOOR_VARIANTS = {
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

const FLOOR_LINES = [
  { path: "M9 12.75h1.5", y: 12.75, index: 0 },
  { path: "M13.5 12.75H15", y: 12.75, index: 0 },
  { path: "M9 9.75h1.5", y: 9.75, index: 1 },
  { path: "M13.5 9.75H15", y: 9.75, index: 1 },
  { path: "M9 6.75h1.5", y: 6.75, index: 2 },
  { path: "M13.5 6.75H15", y: 6.75, index: 2 },
] as const;
const BuildingOfficeIcon = (rawProps: BuildingOfficeIconProps) => {
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
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        {FLOOR_LINES.map((floorLine) => {
          return (
            <Motion.path
              animate={resolveValues(
                FLOOR_VARIANTS,
                variant(),
                floorLine.index
              )}
              d={floorLine.path}
              transition={resolveTransition(
                FLOOR_VARIANTS,
                variant(),
                floorLine.index
              )}
            />
          );
        })}
      </svg>
    </div>
  );
};

export { BuildingOfficeIcon };
