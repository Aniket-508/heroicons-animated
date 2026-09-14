import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArchiveBoxXMarkIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArchiveBoxXMarkIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArchiveBoxXMarkIconHandle) => void;
}

const LID_VARIANTS = {
  normal: {
    translateY: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    translateY: -1.5,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};

const PATH_VARIANTS = {
  normal: {
    translateY: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    translateY: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};

const X_MARK_VARIANTS = {
  normal: {
    opacity: 1,
    pathLength: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
  },
};
const ArchiveBoxXMarkIcon = (rawProps: ArchiveBoxXMarkIconProps) => {
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
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M19.6246 18.1321C19.5546 19.3214 18.5698 20.25 17.3785 20.25H6.62154C5.43022 20.25 4.44538 19.3214 4.37542 18.1321"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M20.25 7.5L19.6246 18.1321"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M3.75 7.5L4.37542 18.1321"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(X_MARK_VARIANTS, variant())}
          d="M9.75 11.625L14.25 16.125"
          transition={resolveTransition(X_MARK_VARIANTS, variant(), undefined, {
            delay: 0.2,
          })}
        />
        <Motion.path
          animate={resolveValues(X_MARK_VARIANTS, variant())}
          d="M14.25 11.625L9.75 16.125"
          transition={resolveTransition(X_MARK_VARIANTS, variant(), undefined, {
            delay: 0.4,
          })}
        />
        <Motion.path
          animate={resolveValues(LID_VARIANTS, variant())}
          d="M3.375 7.5H20.625C21.2463 7.5 21.75 6.99632 21.75 6.375V4.875C21.75 4.25368 21.2463 3.75 20.625 3.75H3.375C2.75368 3.75 2.25 4.25368 2.25 4.875V6.375C2.25 6.99632 2.75368 7.5 3.375 7.5Z"
          transition={resolveTransition(LID_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { ArchiveBoxXMarkIcon };
