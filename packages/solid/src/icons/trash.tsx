import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface TrashIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface TrashIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: TrashIconHandle) => void;
}

const LID_VARIANTS = {
  normal: {
    translateY: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    translateY: -1.5,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};

const PATH_VARIANTS = {
  normal: {
    translateY: 0,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
  animate: {
    translateY: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};
const TrashIcon = (rawProps: TrashIconProps) => {
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
        <Motion.path
          animate={resolveValues(LID_VARIANTS, variant())}
          d="M15.75 5.39432V4.47819C15.75 3.29882 14.8393 2.31423 13.6606 2.27652C13.1092 2.25889 12.5556 2.25 12 2.25C11.4444 2.25 10.8908 2.25889 10.3394 2.27652C9.16065 2.31423 8.25 3.29882 8.25 4.47819V5.39432M15.75 5.39432C14.5126 5.2987 13.262 5.25 12 5.25C10.738 5.25 9.48744 5.2987 8.25 5.39432M19.2276 5.79057C19.5696 5.84221 19.9104 5.89747 20.25 5.95629M19.2276 5.79057C18.0812 5.61744 16.9215 5.48485 15.75 5.39432M3.75 5.95629C4.08957 5.89747 4.43037 5.84221 4.77235 5.79057M4.77235 5.79057C5.91878 5.61744 7.07849 5.48485 8.25 5.39432"
          transition={resolveTransition(LID_VARIANTS, variant())}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M14.7404 9L14.3942 18M9.60577 18L9.25962 9M19.2276 5.79057L18.1598 19.6726C18.0696 20.8448 17.0921 21.75 15.9164 21.75H8.08357C6.90786 21.75 5.93037 20.8448 5.8402 19.6726L4.77235 5.79057"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { TrashIcon };
