import type { JSX } from "solid-js";
import { createSignal, createUniqueId, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface Battery100IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Battery100IconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: Battery100IconHandle) => void;
}

const CLIP_VARIANTS = {
  normal: {
    scaleX: 0,
    originX: 0,
    originY: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  animate: {
    scaleX: 1,
    originX: 0,
    originY: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const Battery100Icon = (rawProps: Battery100IconProps) => {
  const props = mergeProps({ size: 28 }, rawProps);
  const [local, others] = splitProps(props, [
    "onMouseEnter",
    "onMouseLeave",
    "class",
    "size",
    "ref",
  ]);
  const [variant, setVariant] = createSignal("normal");
  const clipId = createUniqueId();
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
        <defs>
          <clipPath id={clipId}>
            <Motion.rect
              animate={resolveValues(CLIP_VARIANTS, variant())}
              height="4.5"
              transition={resolveTransition(CLIP_VARIANTS, variant())}
              width="13.5"
              x="4.5"
              y="10.5"
            />
          </clipPath>
        </defs>
        <path d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21" />
        <path d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
        <path d="M4.5 10.5H18V15H4.5v-4.5Z" />
        <path
          clip-path={`url(#${clipId})`}
          d="M4.5 10.5H18V15H4.5v-4.5Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </div>
  );
};

export { Battery100Icon };
