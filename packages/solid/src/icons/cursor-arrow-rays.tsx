import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CursorArrowRaysIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CursorArrowRaysIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CursorArrowRaysIconHandle) => void;
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

const RAY_VARIANTS = {
  normal: { opacity: 1, x: 0, y: 0 },
  spread: (custom: { x: number; y: number }) => ({
    opacity: [0, 1, 0, 0, 0, 0, 1],
    x: [0, custom.x, 0, 0],
    y: [0, custom.y, 0, 0],
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
      mass: 0.4,
    },
  }),
};

const RAY_SPREAD_DELAY = 1.3;

const CursorArrowRaysIcon = (rawProps: CursorArrowRaysIconProps) => {
  const props = mergeProps({ size: 28 }, rawProps);
  const [local, others] = splitProps(props, [
    "onMouseEnter",
    "onMouseLeave",
    "class",
    "size",
    "ref",
  ]);
  const [cursorVariant, setCursorVariant] = createSignal("normal");
  const [rayVariant, setRayVariant] = createSignal("normal");
  let isControlled = false;

  const resolveRayTransition = (custom: { x: number; y: number }) =>
    resolveTransition(
      RAY_VARIANTS,
      rayVariant(),
      custom,
      rayVariant() === "spread" ? { delay: RAY_SPREAD_DELAY } : undefined
    );

  if (local.ref) {
    isControlled = true;
    local.ref({
      startAnimation: () => {
        setCursorVariant("animate");
        setRayVariant("spread");
      },
      stopAnimation: () => {
        setCursorVariant("normal");
        setRayVariant("normal");
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
      setRayVariant("spread");
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
      setRayVariant("normal");
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
          animate={resolveValues(RAY_VARIANTS, rayVariant(), { x: 0, y: -2 })}
          d="M12 2.25V4.5"
          transition={resolveRayTransition({ x: 0, y: -2 })}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, rayVariant(), { x: 2, y: -2 })}
          d="M17.8336 4.66637L16.2426 6.25736"
          transition={resolveRayTransition({ x: 2, y: -2 })}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, rayVariant(), { x: 2, y: 0 })}
          d="M20.25 10.5H18"
          transition={resolveRayTransition({ x: 2, y: 0 })}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, rayVariant(), { x: -2, y: 2 })}
          d="M7.75736 14.7426L6.16637 16.3336"
          transition={resolveRayTransition({ x: -2, y: 2 })}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, rayVariant(), { x: -2, y: 0 })}
          d="M6 10.5H3.75"
          transition={resolveRayTransition({ x: -2, y: 0 })}
        />
        <Motion.path
          animate={resolveValues(RAY_VARIANTS, rayVariant(), { x: -2, y: -2 })}
          d="M7.75736 6.25736L6.16637 4.66637"
          transition={resolveRayTransition({ x: -2, y: -2 })}
        />
      </svg>
    </div>
  );
};

export { CursorArrowRaysIcon };
