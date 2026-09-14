import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CalendarDateRangeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CalendarDateRangeIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CalendarDateRangeIconHandle) => void;
}

const FIRST_DOT_VARIANTS = {
  normal: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: [1, 0.3, 1],
    transition: {
      delay: 0,
      duration: 0.4,
      times: [0, 0.5, 1],
    },
  },
};

const LINE_VARIANTS = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  animate: (custom: number) => ({
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      delay: 0.4 + custom * 0.15,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const DOT_VARIANTS = {
  normal: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  animate: (custom: number) => ({
    opacity: [1, 0.3, 1],
    transition: {
      delay: 0.7 + custom * 0.1,
      duration: 0.4,
      times: [0, 0.5, 1],
    },
  }),
};

const RANGE_LINES = [
  { d: "M14.25 12.75h2.25", index: 0 },
  { d: "M7.5 15h4.5", index: 1 },
] as const;

const FIRST_DOT = { d: "M12 12.75h.005v.006H12v-.006Z" };

const DOTS = [
  { d: "M14.25 15h.005v.005h-.005v-.005Z", index: 0 },
  { d: "M16.5 15h.006v.005H16.5v-.005Z", index: 1 },
  { d: "M7.5 17.25h.005v.005h-.006v-.005Z", index: 2 },
  { d: "M9.75 17.25h.005v.006H9.75v-.006Z", index: 3 },
  { d: "M12 17.25h.006v.006h-.006v-.005Z", index: 4 },
  { d: "M14.25 17.25h.006v.006h-.006v-.006Z", index: 5 },
] as const;

const CalendarDateRangeIcon = (rawProps: CalendarDateRangeIconProps) => {
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
        <path d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5" />
        <Motion.path
          animate={resolveValues(FIRST_DOT_VARIANTS, variant())}
          d={FIRST_DOT.d}
          transition={resolveTransition(FIRST_DOT_VARIANTS, variant())}
        />
        {RANGE_LINES.map((line) => (
          <Motion.path
            animate={resolveValues(LINE_VARIANTS, variant(), line.index)}
            d={line.d}
            transition={resolveTransition(LINE_VARIANTS, variant(), line.index)}
          />
        ))}
        {DOTS.map((dot) => (
          <Motion.path
            animate={resolveValues(DOT_VARIANTS, variant(), dot.index)}
            d={dot.d}
            transition={resolveTransition(DOT_VARIANTS, variant(), dot.index)}
          />
        ))}
      </svg>
    </div>
  );
};

export { CalendarDateRangeIcon };
