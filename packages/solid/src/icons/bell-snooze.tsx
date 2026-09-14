import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface BellSnoozeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BellSnoozeIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: BellSnoozeIconHandle) => void;
}

const BELL_VARIANTS = {
  normal: { rotate: 0, scale: 1, originX: 0.5, originY: 0.5 },
  animate: {
    rotate: [0, -8, -8, 0],
    scale: [1, 0.97, 0.97, 1],
    originX: 0.5,
    originY: 0.5,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const SNOOZE_VARIANTS = {
  normal: { opacity: 1, y: 0, scale: 1 },
  animate: {
    opacity: [1, 1, 0.6, 1],
    y: [0, -1, -2, 0],
    scale: [1, 1.1, 1.15, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const BellSnoozeIcon = (rawProps: BellSnoozeIconProps) => {
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
        <Motion.g
          animate={resolveValues(BELL_VARIANTS, variant())}
          transition={resolveTransition(BELL_VARIANTS, variant())}
        >
          <path d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818" />
        </Motion.g>
        <Motion.path
          animate={resolveValues(SNOOZE_VARIANTS, variant())}
          d="M10.5 8.25H13.5L10.5 12.75H13.5"
          transition={resolveTransition(SNOOZE_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { BellSnoozeIcon };
