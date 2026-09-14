import type { JSX } from "solid-js";
import { createSignal, mergeProps, splitProps } from "solid-js";
import { Motion } from "solid-motionone";
import { resolveTransition, resolveValues } from "@/lib/motion-compat";
import { cn } from "@/lib/utils";

export interface FingerPrintIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FingerPrintIconProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, "ref"> {
  size?: number;
  ref?: (handle: FingerPrintIconHandle) => void;
}

const PATH_VARIANTS = {
  normal: { pathLength: 1, opacity: 1 },
  animate: {
    opacity: [0, 0, 1, 1, 1],
    pathLength: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
    transition: {
      opacity: { duration: 0.5 },
      pathLength: {
        duration: 2,
      },
    },
  },
};
const FingerPrintIcon = (rawProps: FingerPrintIconProps) => {
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
        <path
          d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
          fill="none"
          stroke-opacity={0.4}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <path
          d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
          fill="none"
          stroke-opacity={0.4}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <path
          d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
          fill="none"
          stroke-opacity={0.4}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <path
          d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
          fill="none"
          stroke-opacity={0.4}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
        <path
          d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
          fill="none"
          stroke-opacity={0.4}
        />
        <Motion.path
          animate={resolveValues(PATH_VARIANTS, variant())}
          d="M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
          transition={resolveTransition(PATH_VARIANTS, variant())}
        />
      </svg>
    </div>
  );
};

export { FingerPrintIcon };
