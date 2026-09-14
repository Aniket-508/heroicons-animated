import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface VideoCameraIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface VideoCameraIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: VideoCameraIconHandle) => void;
}

const CAMERA_VARIANTS = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const RECORD_VARIANTS = {
  normal: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 0, 1, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const VideoCameraIcon = (rawProps: VideoCameraIconProps) => {
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
        animate={resolveValues(CAMERA_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transition={resolveTransition(CAMERA_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" />
        <Motion.circle
          animate={resolveValues(RECORD_VARIANTS, variant())}
          cx="5"
          cy="7.5"
          fill="red"
          r="1"
          stroke="none"
          transition={resolveTransition(RECORD_VARIANTS, variant())}
        />
      </Motion.svg>
    </div>
  );
};

export { VideoCameraIcon };
