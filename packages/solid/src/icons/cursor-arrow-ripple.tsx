import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CursorArrowRippleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CursorArrowRippleIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CursorArrowRippleIconHandle) => void;
}

const CURSOR_VARIANTS = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: {
      duration: 1,
      bounce: 0.3,
    },
  },
};

const RIPPLE_VARIANTS = {
  normal: {
    opacity: 1,
  },
  ripple: (custom: number) => ({
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      delay: 1 + custom * 0.3, // Start after cursor animation (1s) + stagger
      ease: "easeOut",
    },
  }),
};
const CursorArrowRippleIcon = (rawProps: CursorArrowRippleIconProps) => {
  const props = mergeProps({ size: 28 }, rawProps);
  const [local, others] = splitProps(props, [
    "onMouseEnter",
    "onMouseLeave",
    "class",
    "size",
    "ref",
  ]);
  const [cursorVariant, setCursorVariant] = createSignal("normal");
  const [rippleVariant, setRippleVariant] = createSignal("normal");
  let isControlled = false;

  if (local.ref) {
    isControlled = true;
    local.ref({
      startAnimation: () => {
        setCursorVariant("animate");
        setRippleVariant("ripple");
      },
      stopAnimation: () => {
        setCursorVariant("normal");
        setRippleVariant("normal");
      },
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
      setCursorVariant("animate");
      setRippleVariant("ripple");
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
      setCursorVariant("normal");
      setRippleVariant("normal");
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
          animate={resolveValues(CURSOR_VARIANTS, cursorVariant())}
          d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
          transition={resolveTransition(CURSOR_VARIANTS, cursorVariant())}
        />
        <Motion.path
          animate={resolveValues(RIPPLE_VARIANTS, rippleVariant(), 1)}
          d="M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999"
          transition={resolveTransition(RIPPLE_VARIANTS, rippleVariant(), 1)}
        />
        <Motion.path
          animate={resolveValues(RIPPLE_VARIANTS, rippleVariant(), 0)}
          d="M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999"
          transition={resolveTransition(RIPPLE_VARIANTS, rippleVariant(), 0)}
        />
      </svg>
    </div>
  );
};

export { CursorArrowRippleIcon };
