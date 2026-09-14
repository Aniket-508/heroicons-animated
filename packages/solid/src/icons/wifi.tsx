import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface WifiIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WifiIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: WifiIconHandle) => void;
}

const ARC_VARIANTS = {
  normal: { opacity: 1, scale: 1 },
  animate: (custom: number) => ({
    opacity: 0,
    scale: 0,
    transition: {
      opacity: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 0.2,
        delay: 0.2 * (custom - 1),
      },
      scale: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 0.2,
        delay: 0.2 * (custom - 1),
      },
    },
  }),
};
const WifiIcon = (rawProps: WifiIconProps) => {
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
        <path d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0" />
        <Motion.path
          animate={resolveValues(ARC_VARIANTS, variant(), 1)}
          d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0"
          transition={resolveTransition(ARC_VARIANTS, variant(), 1)}
        />
        <Motion.path
          animate={resolveValues(ARC_VARIANTS, variant(), 2)}
          d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0"
          transition={resolveTransition(ARC_VARIANTS, variant(), 2)}
        />
        <Motion.path
          animate={resolveValues(ARC_VARIANTS, variant(), 3)}
          d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
          transition={resolveTransition(ARC_VARIANTS, variant(), 3)}
        />
      </svg>
    </div>
  );
};

export { WifiIcon };
