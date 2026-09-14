import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface BookOpenIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BookOpenIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: BookOpenIconHandle) => void;
}

const LEFT_PAGE_VARIANTS = {
  normal: { rotateY: 0 },
  animate: {
    rotateY: [0, 15, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const RIGHT_PAGE_VARIANTS = {
  normal: { rotateY: 0 },
  animate: {
    rotateY: [0, -15, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const BookOpenIcon = (rawProps: BookOpenIconProps) => {
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
        <Motion.g
          animate={resolveValues(LEFT_PAGE_VARIANTS, variant())}
          style={{ "transform-origin": "100% 50%" }}
          transition={resolveTransition(LEFT_PAGE_VARIANTS, variant())}
        >
          <path d="M12 6.04168C10.4077 4.61656 8.30506 3.75 6 3.75C4.94809 3.75 3.93834 3.93046 3 4.26212V18.5121C3.93834 18.1805 4.94809 18 6 18C8.30506 18 10.4077 18.8666 12 20.2917" />
        </Motion.g>
        <Motion.g
          animate={resolveValues(RIGHT_PAGE_VARIANTS, variant())}
          style={{ "transform-origin": "0% 50%" }}
          transition={resolveTransition(RIGHT_PAGE_VARIANTS, variant())}
        >
          <path d="M12 6.04168C13.5923 4.61656 15.6949 3.75 18 3.75C19.0519 3.75 20.0617 3.93046 21 4.26212V18.5121C20.0617 18.1805 19.0519 18 18 18C15.6949 18 13.5923 18.8666 12 20.2917" />
        </Motion.g>
        <path d="M12 6.04168V20.2917" />
      </svg>
    </div>
  );
};

export { BookOpenIcon };
