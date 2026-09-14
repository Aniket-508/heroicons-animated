import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface CalendarDaysIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CalendarDaysIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: CalendarDaysIconHandle) => void;
}

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
      delay: custom * 0.1,
      duration: 0.4,
      times: [0, 0.5, 1],
    },
  }),
};
const DOTS = [
  { d: "M12 12.75h.008v.008H12v-.008Z", index: 0 },
  { d: "M14.25 12.75h.008v.008h-.008v-.008Z", index: 1 },
  { d: "M16.5 12.75h.008v.008H16.5v-.008Z", index: 2 },
  { d: "M7.5 15h.008v.008H7.5V15Z", index: 3 },
  { d: "M9.75 15h.008v.008H9.75V15Z", index: 4 },
  { d: "M12 15h.008v.008H12V15Z", index: 5 },
  { d: "M14.25 15h.008v.008h-.008V15Z", index: 6 },
  { d: "M16.5 15h.008v.008H16.5V15Z", index: 7 },
  { d: "M7.5 17.25h.008v.008H7.5v-.008Z", index: 8 },
  { d: "M9.75 17.25h.008v.008H9.75v-.008Z", index: 9 },
  { d: "M12 17.25h.008v.008H12v-.008Z", index: 10 },
  { d: "M14.25 17.25h.008v.008h-.008v-.008Z", index: 11 },
] as const;

const CalendarDaysIcon = (rawProps: CalendarDaysIconProps) => {
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
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
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

export { CalendarDaysIcon };
