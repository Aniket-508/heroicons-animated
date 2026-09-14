import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface QueueListIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface QueueListIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: QueueListIconHandle) => void;
}

const ITEM_DURATION = 0.2;
const INITIAL_DELAY = 0.1;
const STAGGER_DELAY = 0.15;

const LIST_ITEMS = [
  { y: 19.5, path: "M3.75 19.5H20.25" },
  { y: 15.75, path: "M3.75 15.75H20.25" },
  { y: 12, path: "M3.75 12H20.25" },
] as const;

const CREATE_ITEM_VARIANTS = (delay: number) => ({
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: ITEM_DURATION,
      ease: "easeOut",
      delay,
    },
  },
});
const QueueListIcon = (rawProps: QueueListIconProps) => {
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
        <path d="M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z" />
        {LIST_ITEMS.map((item, index) => {
          const delay =
            INITIAL_DELAY + (LIST_ITEMS.length - 1 - index) * STAGGER_DELAY;
          return (
            <Motion.path
              animate={resolveValues(CREATE_ITEM_VARIANTS(delay), variant())}
              d={item.path}
              transition={resolveTransition(
                CREATE_ITEM_VARIANTS(delay),
                variant()
              )}
            />
          );
        })}
      </svg>
    </div>
  );
};

export { QueueListIcon };
