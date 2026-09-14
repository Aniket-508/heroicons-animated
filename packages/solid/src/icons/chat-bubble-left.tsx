import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ChatBubbleLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChatBubbleLeftIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ChatBubbleLeftIconHandle) => void;
}

const ICON_VARIANTS = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: 1.05,
    rotate: [0, -7, 7, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut",
      },
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
};
const ChatBubbleLeftIcon = (rawProps: ChatBubbleLeftIconProps) => {
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
        animate={resolveValues(ICON_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        transition={resolveTransition(ICON_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </Motion.svg>
    </div>
  );
};

export { ChatBubbleLeftIcon };
