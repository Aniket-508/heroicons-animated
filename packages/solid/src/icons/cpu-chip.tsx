import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CpuChipIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CpuChipIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CpuChipIconHandle) => void;
}

const TRANSITION = {
  duration: 0.5,
  ease: "easeInOut",
  repeat: 1,
};

const Y_VARIANTS = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scaleY: [1, 1.5, 1],
    opacity: [1, 0.8, 1],
  },
};

const X_VARIANTS = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scaleX: [1, 1.5, 1],
    opacity: [1, 0.8, 1],
  },
};
const CpuChipIcon = (rawProps: CpuChipIconProps) => {
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
          animate={resolveValues(Y_VARIANTS, variant())}
          d="M8.25 3V4.5"
          transition={resolveTransition(
            Y_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(Y_VARIANTS, variant())}
          d="M12 3V4.5"
          transition={resolveTransition(
            Y_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(Y_VARIANTS, variant())}
          d="M15.75 3V4.5"
          transition={resolveTransition(
            Y_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(X_VARIANTS, variant())}
          d="M4.5 8.25H3"
          transition={resolveTransition(
            X_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(X_VARIANTS, variant())}
          d="M4.5 12H3"
          transition={resolveTransition(
            X_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(X_VARIANTS, variant())}
          d="M4.5 15.75H3"
          transition={resolveTransition(
            X_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(X_VARIANTS, variant())}
          d="M21 8.25H19.5"
          transition={resolveTransition(
            X_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(X_VARIANTS, variant())}
          d="M21 12H19.5"
          transition={resolveTransition(
            X_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(X_VARIANTS, variant())}
          d="M21 15.75H19.5"
          transition={resolveTransition(
            X_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(Y_VARIANTS, variant())}
          d="M8.25 19.5V21"
          transition={resolveTransition(
            Y_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(Y_VARIANTS, variant())}
          d="M12 19.5V21"
          transition={resolveTransition(
            Y_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <Motion.path
          animate={resolveValues(Y_VARIANTS, variant())}
          d="M15.75 19.5V21"
          transition={resolveTransition(
            Y_VARIANTS,
            variant(),
            undefined,
            TRANSITION
          )}
        />
        <path d="M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z" />
      </svg>
    </div>
  );
};

export { CpuChipIcon };
