import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface VariableIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface VariableIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: VariableIconHandle) => void;
}

const VARIABLE_VARIANTS = {
  normal: {
    scaleX: 1,
  },
  animate: {
    scaleX: [1, 1.1, 0.9, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const VariableIcon = (rawProps: VariableIconProps) => {
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
        animate={resolveValues(VARIABLE_VARIANTS, variant())}
        fill="none"
        height={local.size}
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        style={{ "transform-origin": "50% 50%" }}
        transition={resolveTransition(VARIABLE_VARIANTS, variant())}
        viewBox="0 0 24 24"
        width={local.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.74455 3C3.61952 5.77929 3 8.8173 3 12C3 15.1827 3.61952 18.2207 4.74455 21M19.5 3C20.4673 5.77929 21 8.8173 21 12C21 15.1827 20.4673 18.2207 19.5 21M8.25 8.88462L9.6945 7.99569C10.1061 7.74241 10.6463 7.93879 10.7991 8.39726L13.2009 15.6027C13.3537 16.0612 13.8939 16.2576 14.3055 16.0043L15.75 15.1154M7.5 15.8654L7.71335 15.9556C8.45981 16.2715 9.32536 16.012 9.77495 15.3376L14.225 8.66243C14.6746 7.98804 15.5402 7.72854 16.2867 8.04435L16.5 8.13462" />
      </Motion.svg>
    </div>
  );
};

export { VariableIcon };
