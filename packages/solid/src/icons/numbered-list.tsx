import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface NumberedListIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface NumberedListIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: NumberedListIconHandle) => void;
}

const NUMBER_DURATION = 0.2;
const LINE_DURATION = 0.3;

const LIST_ITEMS = [
  {
    y: 5.992,
    numberPath:
      "M4.1157 7.49548V3.74512H2.99072M4.1157 7.49548H2.99072M4.1157 7.49548H5.24068",
    linePath: "M8.24185 5.99179H20.2416",
  },
  {
    y: 11.9945,
    numberPath:
      "M3.32128 10.0715C3.76061 9.63214 4.4729 9.63214 4.91223 10.0715C5.35157 10.5109 5.35157 11.2233 4.91223 11.6627L3.08285 13.4923L5.24182 13.4925",
    linePath: "M8.24118 11.9945H20.2409",
  },
  {
    y: 17.9936,
    numberPath:
      "M2.99072 15.7446H4.1156C4.73696 15.7446 5.24068 16.2484 5.24068 16.8697C5.24068 17.4911 4.73696 17.9949 4.1156 17.9949H3.74071M3.74071 17.9928H4.1156C4.73696 17.9928 5.24068 18.4966 5.24068 19.1179C5.24068 19.7393 4.73696 20.243 4.1156 20.243H2.99072",
    linePath: "M8.24185 17.9936H20.2416",
  },
] as const;

const CREATE_NUMBER_VARIANTS = (delay: number) => ({
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      pathLength: { duration: NUMBER_DURATION, ease: "easeInOut", delay },
      opacity: { duration: NUMBER_DURATION, ease: "easeInOut", delay },
    },
  },
});

const CREATE_LINE_VARIANTS = (delay: number) => ({
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      pathLength: { duration: LINE_DURATION, ease: "easeInOut", delay },
      opacity: { duration: LINE_DURATION, ease: "easeInOut", delay },
    },
  },
});
const NumberedListIcon = (rawProps: NumberedListIconProps) => {
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
        {LIST_ITEMS.map((item, index) => {
          const numberDelay = index * (NUMBER_DURATION + LINE_DURATION);
          const lineDelay = numberDelay + NUMBER_DURATION;

          return (
            <g>
              <Motion.path
                animate={resolveValues(
                  CREATE_NUMBER_VARIANTS(numberDelay),
                  variant()
                )}
                d={item.numberPath}
                transition={resolveTransition(
                  CREATE_NUMBER_VARIANTS(numberDelay),
                  variant()
                )}
              />
              <Motion.path
                animate={resolveValues(
                  CREATE_LINE_VARIANTS(lineDelay),
                  variant()
                )}
                d={item.linePath}
                transition={resolveTransition(
                  CREATE_LINE_VARIANTS(lineDelay),
                  variant()
                )}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export { NumberedListIcon };
