import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface GiftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface GiftIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: GiftIconHandle) => void;
}

const SVG_VARIANTS = {
  normal: {
    rotate: 0,
    scale: 1,
  },
  animate: {
    rotate: [0, -5, 5, -3, 3, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const GiftIcon = (rawProps: GiftIconProps) => {
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
        animate={resolveValues(SVG_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transition={resolveTransition(SVG_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.625 11.5046V19.7546C20.625 20.5831 19.9534 21.2546 19.125 21.2546H4.875C4.04657 21.2546 3.375 20.5831 3.375 19.7546V11.5046M11.625 5.12964C11.625 3.67989 10.4497 2.50464 9 2.50464C7.55025 2.50464 6.375 3.67989 6.375 5.12964C6.375 6.57939 7.55025 7.75464 9 7.75464C9.73451 7.75464 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 5.84488 11.625 7.75464 11.625 7.75464M11.625 5.12964C11.625 3.67989 12.8003 2.50464 14.25 2.50464C15.6997 2.50464 16.875 3.67989 16.875 5.12964C16.875 6.57939 15.6997 7.75464 14.25 7.75464C13.5155 7.75464 11.625 7.75464 11.625 7.75464M11.625 7.75464V21.2546M3 11.5046H21C21.6213 11.5046 22.125 11.001 22.125 10.3796V8.87964C22.125 8.25832 21.6213 7.75464 21 7.75464H3C2.37868 7.75464 1.875 8.25832 1.875 8.87964V10.3796C1.875 11.001 2.37868 11.5046 3 11.5046Z" />
      </Motion.svg>
    </div>
  );
};

export { GiftIcon };
