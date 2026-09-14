import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface NewspaperIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface NewspaperIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: NewspaperIconHandle) => void;
}

const SQUARE_VARIANTS = {
  normal: { opacity: 1 },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const CREATE_LINE_VARIANTS = (delay: number) => ({
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.2,
      delay,
      ease: "easeOut",
      opacity: { duration: 0.1, delay },
    },
  },
});
const NewspaperIcon = (rawProps: NewspaperIconProps) => {
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
        <path d="M16.5 7.5h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
        <Motion.path
          animate={resolveValues(SQUARE_VARIANTS, variant())}
          d="M6 7.5h3v3H6v-3Z"
          transition={resolveTransition(SQUARE_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_LINE_VARIANTS(0.2), variant())}
          d="M12 7.5h1.5"
          transition={resolveTransition(CREATE_LINE_VARIANTS(0.2), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_LINE_VARIANTS(0.3), variant())}
          d="M12 10.5h1.5"
          transition={resolveTransition(CREATE_LINE_VARIANTS(0.3), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_LINE_VARIANTS(0.4), variant())}
          d="M6 13.5h7.5"
          transition={resolveTransition(CREATE_LINE_VARIANTS(0.4), variant())}
        />
        <Motion.path
          animate={resolveValues(CREATE_LINE_VARIANTS(0.5), variant())}
          d="M6 16.5h7.5"
          transition={resolveTransition(CREATE_LINE_VARIANTS(0.5), variant())}
        />
      </svg>
    </div>
  );
};

export { NewspaperIcon };
