import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface HomeModernIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface HomeModernIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: HomeModernIconHandle) => void;
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
const HomeModernIcon = (rawProps: HomeModernIconProps) => {
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
        <path d="M8.25 21V16.125C8.25 15.5037 8.75368 15 9.375 15H11.625C12.2463 15 12.75 15.5037 12.75 16.125V21M12.75 21H17.25V3.54545M12.75 21H20.25V10.75M2.25 21H3.75M21.75 21H3.75M2.25 9L6.75 7.36364M18.75 3L17.25 3.54545M17.25 9.75L20.25 10.75M21.75 11.25L20.25 10.75M6.75 7.36364V3H3.75V21M6.75 7.36364L17.25 3.54545" />
      </Motion.svg>
    </div>
  );
};

export { HomeModernIcon };
