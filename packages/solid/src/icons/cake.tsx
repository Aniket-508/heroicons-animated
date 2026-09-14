import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CakeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CakeIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CakeIconHandle) => void;
}

const CAKE_BODY_VARIANTS = {
  normal: {
    translateY: 0,
    opacity: 1,
  },
  animate: {
    translateY: [8, -1, 0],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const CANDLE_VARIANTS = {
  normal: {
    scaleY: 1,
    opacity: 1,
  },
  animate: {
    scaleY: [0, 1.2, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const FLAME_LEFT_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const FLAME_MIDDLE_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.65,
    },
  },
};

const FLAME_RIGHT_VARIANTS = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.8,
    },
  },
};
const CakeIcon = (rawProps: CakeIconProps) => {
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
          animate={resolveValues(CAKE_BODY_VARIANTS, variant())}
          d="M12 8.25c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m3 3.879-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"
          style={{ "transform-origin": "50% 100%" }}
          transition={resolveTransition(CAKE_BODY_VARIANTS, variant())}
        />
        <Motion.g
          animate={resolveValues(CANDLE_VARIANTS, variant())}
          style={{ "transform-origin": "50% 100%" }}
          transition={resolveTransition(CANDLE_VARIANTS, variant())}
        >
          <path d="M9 8.25v-1.5" />
          <path d="M12 8.25v-1.5" />
          <path d="M15 8.25v-1.5" />
        </Motion.g>
        <Motion.path
          animate={resolveValues(FLAME_LEFT_VARIANTS, variant())}
          d="M9.265 3.11a.375.375 0 1 1-.53 0L9 2.845l.265.265Z"
          style={{ "transform-origin": "37.5% 50%" }}
          transition={resolveTransition(FLAME_LEFT_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(FLAME_MIDDLE_VARIANTS, variant())}
          d="M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z"
          style={{ "transform-origin": "50% 50%" }}
          transition={resolveTransition(FLAME_MIDDLE_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(FLAME_RIGHT_VARIANTS, variant())}
          d="M15.265 3.11a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
          style={{ "transform-origin": "62.5% 50%" }}
          transition={resolveTransition(FLAME_RIGHT_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { CakeIcon };
