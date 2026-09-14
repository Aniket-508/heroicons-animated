import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface AdjustmentsHorizontalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AdjustmentsHorizontalIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: AdjustmentsHorizontalIconHandle) => void;
}

const DEFAULT_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const TOP_RIGHT_LINE_VARIANTS = {
  normal: { d: "M10.5 6H20.25" },
  animate: { d: "M13.5 6H20.25" },
};

const TOP_LEFT_LINE_VARIANTS = {
  normal: { d: "M3.75 6H7.5" },
  animate: { d: "M3.75 6H10.5" },
};

const MIDDLE_RIGHT_LINE_VARIANTS = {
  normal: { d: "M16.5 12H20.25" },
  animate: { d: "M13.5 12H20.25" },
};

const MIDDLE_LEFT_LINE_VARIANTS = {
  normal: { d: "M3.75 12H13.5" },
  animate: { d: "M3.75 12H10.5" },
};

const BOTTOM_RIGHT_LINE_VARIANTS = {
  normal: { d: "M10.5 18H20.25" },
  animate: { d: "M13.5 18H20.25" },
};

const BOTTOM_LEFT_LINE_VARIANTS = {
  normal: { d: "M3.75 18H7.5" },
  animate: { d: "M3.75 18H10.5" },
};

const RIGHT_KNOB_VARIANTS = {
  normal: { x: 0 },
  animate: { x: 3 },
};

const LEFT_KNOB_VARIANTS = {
  normal: { x: 0 },
  animate: { x: -3 },
};

const AdjustmentsHorizontalIcon = (
  rawProps: AdjustmentsHorizontalIconProps
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
        <Motion.path
          animate={resolveValues(TOP_RIGHT_LINE_VARIANTS, variant())}
          d="M10.5 6H20.25"
          transition={resolveTransition(
            TOP_RIGHT_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(TOP_LEFT_LINE_VARIANTS, variant())}
          d="M3.75 6H7.5"
          transition={resolveTransition(
            TOP_LEFT_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.g
          animate={resolveValues(RIGHT_KNOB_VARIANTS, variant())}
          transition={resolveTransition(
            RIGHT_KNOB_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        >
          <circle cx="9" cy="6" fill="none" r="1.5" />
        </Motion.g>

        <Motion.path
          animate={resolveValues(MIDDLE_RIGHT_LINE_VARIANTS, variant())}
          d="M16.5 12H20.25"
          transition={resolveTransition(
            MIDDLE_RIGHT_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(MIDDLE_LEFT_LINE_VARIANTS, variant())}
          d="M3.75 12H13.5"
          transition={resolveTransition(
            MIDDLE_LEFT_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.g
          animate={resolveValues(LEFT_KNOB_VARIANTS, variant())}
          transition={resolveTransition(
            LEFT_KNOB_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        >
          <circle cx="15" cy="12" fill="none" r="1.5" />
        </Motion.g>

        <Motion.path
          animate={resolveValues(BOTTOM_RIGHT_LINE_VARIANTS, variant())}
          d="M10.5 18H20.25"
          transition={resolveTransition(
            BOTTOM_RIGHT_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(BOTTOM_LEFT_LINE_VARIANTS, variant())}
          d="M3.75 18H7.5"
          transition={resolveTransition(
            BOTTOM_LEFT_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.g
          animate={resolveValues(RIGHT_KNOB_VARIANTS, variant())}
          transition={resolveTransition(
            RIGHT_KNOB_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        >
          <circle cx="9" cy="18" fill="none" r="1.5" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { AdjustmentsHorizontalIcon };
