import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CalculatorIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CalculatorIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CalculatorIconHandle) => void;
}

const BUTTON_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (delay: number) => ({
    scale: [1, 1.5, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 0.15,
      delay: delay * 0.08,
      ease: "easeOut",
    },
  }),
};

const ENTER_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [1, 1.3, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 0.2,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const SCREEN_VARIANTS = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.4, 1],
    transition: {
      duration: 0.2,
      delay: 0.65,
      ease: "easeOut",
    },
  },
};
const CalculatorIcon = (rawProps: CalculatorIconProps) => {
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
        <path d="M12 2.25C10.108 2.25 8.24156 2.35947 6.40668 2.57241C5.30608 2.70014 4.5 3.649 4.5 4.75699V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V4.75699C19.5 3.649 18.6939 2.70014 17.5933 2.57241C15.7584 2.35947 13.892 2.25 12 2.25Z" />
        <Motion.path
          animate={resolveValues(SCREEN_VARIANTS, variant())}
          d="M8.25 6H15.75V8.25H8.25V6Z"
          transition={resolveTransition(SCREEN_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 0)}
          d="M8.25 11.25H8.2575V11.2575H8.25V11.25Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 0)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 2)}
          d="M10.7476 11.25H10.7551V11.2575H10.7476V11.25Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 2)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 1)}
          d="M13.2524 13.5H13.2599V13.5075H13.2524V13.5Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 1)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 4)}
          d="M8.25 15.75H8.2575V15.7575H8.25V15.75Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 4)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 3)}
          d="M15.75 11.25H15.7575V11.2575H15.75V11.25Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 3)}
        />
        <Motion.path
          animate={resolveValues(BUTTON_VARIANTS, variant(), 5)}
          d="M10.7476 18H10.7551V18.0075H10.7476V18Z"
          transition={resolveTransition(BUTTON_VARIANTS, variant(), 5)}
        />
        <path d="M8.25 13.5H8.2575V13.5075H8.25V13.5Z" />
        <path d="M8.25 18H8.2575V18.0075H8.25V18Z" />
        <path d="M10.7476 13.5H10.7551V13.5075H10.7476V13.5Z" />
        <path d="M10.7476 15.75H10.7551V15.7575H10.7476V15.75Z" />
        <path d="M13.2524 11.25H13.2599V11.2575H13.2524V11.25Z" />
        <path d="M13.2524 15.75H13.2599V15.7575H13.2524V15.75Z" />
        <path d="M13.2524 18H13.2599V18.0075H13.2524V18Z" />
        <path d="M15.75 13.5H15.7575V13.5075H15.75V13.5Z" />
        <Motion.path
          animate={resolveValues(ENTER_VARIANTS, variant())}
          d="M15.75 15.75V18"
          transition={resolveTransition(ENTER_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { CalculatorIcon };
