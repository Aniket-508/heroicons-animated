import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ArrowDownIconHandle) => void;
}

const ARROW_HEAD_VARIANTS = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const LINE_VARIANTS = {
  normal: { d: "M12 21V3" },
  animate: {
    d: ["M12 21V3", "M12 18V3", "M12 21V3"],
    transition: {
      duration: 0.4,
    },
  },
};
const ArrowDownIcon = (rawProps: ArrowDownIconProps) => {
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
          animate={resolveValues(ARROW_HEAD_VARIANTS, variant())}
          d="M19.5 13.5 12 21m0 0-7.5-7.5"
          transition={resolveTransition(ARROW_HEAD_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(LINE_VARIANTS, variant())}
          d="M12 21V3"
          transition={resolveTransition(LINE_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { ArrowDownIcon };
