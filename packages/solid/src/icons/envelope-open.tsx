import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface EnvelopeOpenIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface EnvelopeOpenIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: EnvelopeOpenIconHandle) => void;
}

const SVG_VARIANTS = {
  normal: {
    scale: 1,
    y: 0,
  },
  animate: {
    scale: [1, 1.1, 1],
    y: [0, -1, 0],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const EnvelopeOpenIcon = (rawProps: EnvelopeOpenIconProps) => {
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
        <path d="M21.75 8.99997V9.90606C21.75 10.7338 21.2955 11.4947 20.5667 11.8871L14.0893 15.375M2.25 8.99997V9.90606C2.25 10.7338 2.70448 11.4947 3.43328 11.8871L9.91074 15.375M18.75 17.8846L14.0893 15.375M14.0893 15.375L13.0667 14.8244C12.4008 14.4658 11.5992 14.4658 10.9333 14.8244L9.91074 15.375M9.91074 15.375L5.25 17.8846M21.75 19.5C21.75 20.7426 20.7426 21.75 19.5 21.75H4.5C3.25736 21.75 2.25 20.7426 2.25 19.5L2.25 8.84388C2.25 8.01614 2.70448 7.25525 3.43328 6.86282L10.9333 2.82436C11.5992 2.46577 12.4008 2.46577 13.0667 2.82436L20.5667 6.86282C21.2955 7.25525 21.75 8.01615 21.75 8.84388V19.5Z" />
      </Motion.svg>
    </div>
  );
};

export { EnvelopeOpenIcon };
