import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ShareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ShareIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ShareIconHandle) => void;
}

const NODE_VARIANTS = {
  normal: {
    scale: 1,
  },
  animate: (delay: number) => ({
    scale: [1, 1.3, 1],
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const LINE_VARIANTS = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const ShareIcon = (rawProps: ShareIconProps) => {
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
          d="M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071"
          transition={resolveTransition(LINE_VARIANTS, variant())}
        />
        <Motion.circle
          animate={resolveValues(NODE_VARIANTS, variant(), 0)}
          cx="5.25"
          cy="12"
          r="2.25"
          transition={resolveTransition(NODE_VARIANTS, variant(), 0)}
        />
        <Motion.circle
          animate={resolveValues(NODE_VARIANTS, variant(), 0.15)}
          cx="18.75"
          cy="4.5"
          r="2.25"
          transition={resolveTransition(NODE_VARIANTS, variant(), 0.15)}
        />
        <Motion.circle
          animate={resolveValues(NODE_VARIANTS, variant(), 0.3)}
          cx="18.75"
          cy="19.5"
          r="2.25"
          transition={resolveTransition(NODE_VARIANTS, variant(), 0.3)}
        />
      </svg>
    </div>
  );
};

export { ShareIcon };
