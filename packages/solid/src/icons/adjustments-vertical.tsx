import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface AdjustmentsVerticalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AdjustmentsVerticalIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: AdjustmentsVerticalIconHandle) => void;
}

const DEFAULT_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const LEFT_TOP_LINE_VARIANTS = {
  normal: { d: "M6 3.75V13.5" },
  animate: { d: "M6 3.75V10.5" },
};

const LEFT_BOTTOM_LINE_VARIANTS = {
  normal: { d: "M6 16.5V20.25" },
  animate: { d: "M6 13.5V20.25" },
};

const MIDDLE_TOP_LINE_VARIANTS = {
  normal: { d: "M12 3.75V7.5" },
  animate: { d: "M12 3.75V10.5" },
};

const MIDDLE_BOTTOM_LINE_VARIANTS = {
  normal: { d: "M12 10.5V20.25" },
  animate: { d: "M12 13.5V20.25" },
};

const RIGHT_TOP_LINE_VARIANTS = {
  normal: { d: "M18 3.75V13.5" },
  animate: { d: "M18 3.75V10.5" },
};

const RIGHT_BOTTOM_LINE_VARIANTS = {
  normal: { d: "M18 16.5V20.25" },
  animate: { d: "M18 13.5V20.25" },
};

const UP_KNOB_VARIANTS = {
  normal: { y: 0 },
  animate: { y: -3 },
};

const DOWN_KNOB_VARIANTS = {
  normal: { y: 0 },
  animate: { y: 3 },
};

const AdjustmentsVerticalIcon = (rawProps: AdjustmentsVerticalIconProps) => {
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
          animate={resolveValues(LEFT_TOP_LINE_VARIANTS, variant())}
          d="M6 3.75V13.5"
          transition={resolveTransition(
            LEFT_TOP_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(LEFT_BOTTOM_LINE_VARIANTS, variant())}
          d="M6 16.5V20.25"
          transition={resolveTransition(
            LEFT_BOTTOM_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.g
          animate={resolveValues(UP_KNOB_VARIANTS, variant())}
          transition={resolveTransition(
            UP_KNOB_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        >
          <circle cx="6" cy="15" fill="none" r="1.5" />
        </Motion.g>

        <Motion.path
          animate={resolveValues(MIDDLE_TOP_LINE_VARIANTS, variant())}
          d="M12 3.75V7.5"
          transition={resolveTransition(
            MIDDLE_TOP_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(MIDDLE_BOTTOM_LINE_VARIANTS, variant())}
          d="M12 10.5V20.25"
          transition={resolveTransition(
            MIDDLE_BOTTOM_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.g
          animate={resolveValues(DOWN_KNOB_VARIANTS, variant())}
          transition={resolveTransition(
            DOWN_KNOB_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        >
          <circle cx="12" cy="9" fill="none" r="1.5" />
        </Motion.g>

        <Motion.path
          animate={resolveValues(RIGHT_TOP_LINE_VARIANTS, variant())}
          d="M18 3.75V13.5"
          transition={resolveTransition(
            RIGHT_TOP_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(RIGHT_BOTTOM_LINE_VARIANTS, variant())}
          d="M18 16.5V20.25"
          transition={resolveTransition(
            RIGHT_BOTTOM_LINE_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        />
        <Motion.g
          animate={resolveValues(UP_KNOB_VARIANTS, variant())}
          transition={resolveTransition(
            UP_KNOB_VARIANTS,
            variant(),
            undefined,
            DEFAULT_TRANSITION
          )}
        >
          <circle cx="18" cy="15" fill="none" r="1.5" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { AdjustmentsVerticalIcon };
