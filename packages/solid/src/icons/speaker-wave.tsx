import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface SpeakerWaveIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SpeakerWaveIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: SpeakerWaveIconHandle) => void;
}

const WAVE_VARIANTS = {
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
const SpeakerWaveIcon = (rawProps: SpeakerWaveIconProps) => {
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
        <path d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        <Motion.path
          animate={resolveValues(WAVE_VARIANTS, variant(), 1)}
          d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424"
          transition={resolveTransition(WAVE_VARIANTS, variant(), 1)}
        />
        <Motion.path
          animate={resolveValues(WAVE_VARIANTS, variant(), 2)}
          d="M19.114 5.636a9 9 0 0 1 0 12.728"
          transition={resolveTransition(WAVE_VARIANTS, variant(), 2)}
        />
      </svg>
    </div>
  );
};

export { SpeakerWaveIcon };
