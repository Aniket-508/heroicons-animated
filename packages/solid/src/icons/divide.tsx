import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface DivideIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface DivideIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: DivideIconHandle) => void;
}

const LINE_VARIANTS = {
  normal: { scaleX: 1 },
  animate: {
    scaleX: [1, 1.1, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const TOP_DOT_VARIANTS = {
  normal: { y: 0 },
  animate: {
    y: [0, -2, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const BOTTOM_DOT_VARIANTS = {
  normal: { y: 0 },
  animate: {
    y: [0, 2, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};
const DivideIcon = (rawProps: DivideIconProps) => {
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
          animate={resolveValues(LINE_VARIANTS, variant())}
          d="M4.49902 11.9983H19.4987"
          transition={resolveTransition(LINE_VARIANTS, variant())}
        />
        <Motion.g
          animate={resolveValues(TOP_DOT_VARIANTS, variant())}
          transition={resolveTransition(TOP_DOT_VARIANTS, variant())}
        >
          <path d="M11.9992 5.24808H12.0067V5.25558H11.9992V5.24808Z" />
          <path d="M12.3742 5.24808C12.3742 5.45521 12.2063 5.62312 11.9992 5.62312C11.7921 5.62312 11.6242 5.45521 11.6242 5.24808C11.6242 5.04096 11.7921 4.87305 11.9992 4.87305C12.2063 4.87305 12.3742 5.04096 12.3742 5.24808Z" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(BOTTOM_DOT_VARIANTS, variant())}
          transition={resolveTransition(BOTTOM_DOT_VARIANTS, variant())}
        >
          <path d="M11.9998 18.7509H12.0073V18.7584H11.9998V18.7509Z" />
          <path d="M12.3748 18.7509C12.3748 18.9581 12.2069 19.126 11.9998 19.126C11.7927 19.126 11.6248 18.9581 11.6248 18.7509C11.6248 18.5438 11.7927 18.3759 11.9998 18.3759C12.2069 18.3759 12.3748 18.5438 12.3748 18.7509Z" />
        </Motion.g>
      </svg>
    </div>
  );
};

export { DivideIcon };
