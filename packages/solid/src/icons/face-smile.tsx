import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface FaceSmileIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FaceSmileIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: FaceSmileIconHandle) => void;
}

const FACE_VARIANTS = {
  normal: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    scale: [1, 1.15, 1.05, 1.1],
    rotate: [0, -3, 3, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut",
    },
  },
};

const MOUTH_VARIANTS = {
  normal: {
    d: "M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182",
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    d: [
      "M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182",
      "M14.5 14C13 15.5 11 15.5 9.5 14",
      "M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182",
    ],
    pathLength: [0.3, 1, 1],
    pathOffset: [0, 0, 0],
    transition: {
      d: { duration: 0.4, ease: "easeOut" },
      pathLength: {
        duration: 0.5,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      },
      delay: 0.1,
    },
  },
};

const EYE_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    scale: [1, 1.5, 0.8, 1.2],
    opacity: [1, 1, 1, 1],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut",
    },
  },
};
const FaceSmileIcon = (rawProps: FaceSmileIconProps) => {
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
      <Motion.svg
        animate={resolveValues(FACE_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transition={resolveTransition(FACE_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" />
        <Motion.path
          animate={resolveValues(MOUTH_VARIANTS, variant())}
          d="M15.182 15.182C13.4246 16.9393 10.5754 16.9393 8.81802 15.182"
          transition={resolveTransition(MOUTH_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(EYE_VARIANTS, variant())}
          d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
          transition={resolveTransition(EYE_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(EYE_VARIANTS, variant())}
          d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
          transition={resolveTransition(EYE_VARIANTS, variant())}
        />
      </Motion.svg>
    </div>
  );
};

export { FaceSmileIcon };
