import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface ClipboardDocumentListIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ClipboardDocumentListIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: ClipboardDocumentListIconHandle) => void;
}

const DOT_DURATION = 0.1;
const LINE_DURATION = 0.3;

const LIST_ITEMS = [
  { y: 12, dotPath: "M6.75 12h.008v.008H6.75V12Z", linePath: "M9 12h3.75" },
  { y: 15, dotPath: "M6.75 15h.008v.008H6.75V15Z", linePath: "M9 15h3.75" },
  { y: 18, dotPath: "M6.75 18h.008v.008H6.75V18Z", linePath: "M9 18h3.75" },
] as const;

const CREATE_DOT_VARIANTS = (delay: number) => ({
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: DOT_DURATION,
      ease: "easeInOut",
      delay,
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
const ClipboardDocumentListIcon = (
  rawProps: ClipboardDocumentListIconProps
) => {
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
        <path d="M15.75 18.75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
        {LIST_ITEMS.map((item, index) => {
          const dotDelay = index * (DOT_DURATION + LINE_DURATION);
          const lineDelay = dotDelay + DOT_DURATION;

          return (
            <g>
              <Motion.path
                animate={resolveValues(
                  CREATE_DOT_VARIANTS(dotDelay),
                  variant()
                )}
                d={item.dotPath}
                transition={resolveTransition(
                  CREATE_DOT_VARIANTS(dotDelay),
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

export { ClipboardDocumentListIcon };
