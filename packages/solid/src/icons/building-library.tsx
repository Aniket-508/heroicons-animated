import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface BuildingLibraryIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BuildingLibraryIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: BuildingLibraryIconHandle) => void;
}

const DOT_VARIANTS = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
};

const PILLARS = [
  { d: "M8.25 12.75v8.25", index: 0 },
  { d: "M12 12.75v8.25", index: 1 },
  { d: "M15.75 12.75v8.25", index: 2 },
] as const;

const PILLAR_VARIANTS = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.2 + custom * 0.15,
      duration: 0.3,
      ease: "linear",
    },
  }),
};
const BuildingLibraryIcon = (rawProps: BuildingLibraryIconProps) => {
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
        <path d="M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
        <Motion.path
          animate={resolveValues(DOT_VARIANTS, variant())}
          d="M12 6.75h.008v.008H12V6.75Z"
          transition={resolveTransition(DOT_VARIANTS, variant())}
        />
        {PILLARS.map((pillar) => (
          <Motion.path
            animate={resolveValues(PILLAR_VARIANTS, variant(), pillar.index)}
            d={pillar.d}
            transition={resolveTransition(
              PILLAR_VARIANTS,
              variant(),
              pillar.index
            )}
          />
        ))}
      </svg>
    </div>
  );
};

export { BuildingLibraryIcon };
