import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CreditCardIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CreditCardIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CreditCardIconHandle) => void;
}

const LINE_VARIANTS = {
  visible: (index: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
  hidden: (index: number) => ({
    pathLength: 0,
    opacity: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const LINE_ANIMATION_STEP_MS = 400;
const CreditCardIcon = (rawProps: CreditCardIconProps) => {
  const props = mergeProps({ size: 28 }, rawProps);
  const [local, others] = splitProps(props, [
    "onMouseEnter",
    "onMouseLeave",
    "class",
    "size",
    "ref",
  ]);
  const [variant, setVariant] = createSignal("visible");
  let isControlled = false;

  const runLineAnimation = () => {
    setVariant("hidden");
    setTimeout(() => {
      setVariant("visible");
    }, LINE_ANIMATION_STEP_MS);
  };

  if (local.ref) {
    isControlled = true;
    local.ref({
      startAnimation: () => runLineAnimation(),
      stopAnimation: () => setVariant("visible"),
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
      runLineAnimation();
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
      setVariant("visible");
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
        <path d="M2.25 8.25h19.5M2.25 9h19.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        {[
          { d: "M5.25 14.25h6", index: 0 },
          { d: "M5.25 16.5h3", index: 1 },
        ].map((line) => (
          <Motion.path
            animate={resolveValues(LINE_VARIANTS, variant(), line.index)}
            d={line.d}
            initial="visible"
            transition={resolveTransition(LINE_VARIANTS, variant(), line.index)}
          />
        ))}
      </svg>
    </div>
  );
};

export { CreditCardIcon };
