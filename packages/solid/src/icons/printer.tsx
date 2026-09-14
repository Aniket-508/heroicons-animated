import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface PrinterIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PrinterIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: PrinterIconHandle) => void;
}

const PAPER_VARIANTS = {
  normal: {
    y: 0,
  },
  animate: {
    y: [0, 1.7, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const PrinterIcon = (rawProps: PrinterIconProps) => {
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
        <path d="M6 13.9253C6.23939 13.8911 6.47944 13.8589 6.72012 13.8287C8.44957 13.6118 10.2117 13.5 12 13.5C13.7883 13.5 15.5504 13.6118 17.2799 13.8287C17.5206 13.8589 17.7606 13.8911 18 13.9253M17.6591 18H18.75C19.9926 18 21 16.9926 21 15.75V9.45569C21 8.37475 20.2321 7.44082 19.1631 7.28086C18.5293 7.18604 17.8916 7.10361 17.25 7.03381M6.34091 18H5.25C4.00736 18 3 16.9926 3 15.75V9.45569C3 8.37475 3.7679 7.44082 4.83694 7.28086C5.47066 7.18604 6.10843 7.10361 6.75 7.03381M17.25 7.03381C15.5258 6.84625 13.7741 6.75 12 6.75C10.2259 6.75 8.47423 6.84625 6.75 7.03381M17.25 7.03381V3.375C17.25 2.75368 16.7463 2.25 16.125 2.25H7.875C7.25368 2.25 6.75 2.75368 6.75 3.375V7.03381M18 10.5H18.0075V10.5075H18V10.5ZM15 10.5H15.0075V10.5075H15V10.5Z" />
        <Motion.path
          animate={resolveValues(PAPER_VARIANTS, variant())}
          d="M6.72012 13.8287L6.34091 18L6.11153 20.5231C6.05164 21.182 6.57038 21.75 7.23191 21.75H16.7681C17.4296 21.75 17.9484 21.182 17.8885 20.5231L17.6591 18L17.2799 13.8287"
          transition={resolveTransition(PAPER_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { PrinterIcon };
