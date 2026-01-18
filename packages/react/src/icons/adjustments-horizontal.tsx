"use client";

import { cn } from "@heroicons-animated/shared";
import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface AdjustmentsHorizontalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AdjustmentsHorizontalIconProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const AdjustmentsHorizontalIcon = forwardRef<
  AdjustmentsHorizontalIconHandle,
  AdjustmentsHorizontalIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        controls.start("animate");
      }
    },
    [controls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e);
      } else {
        controls.start("normal");
      }
    },
    [controls, onMouseLeave]
  );

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { x1: 10.5 },
            animate: { x1: 13.5 },
          }}
          x1="10.5"
          x2="20.25"
          y1="6"
          y2="6"
        />
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { x2: 7.5 },
            animate: { x2: 10.5 },
          }}
          x1="3.75"
          x2="7.5"
          y1="6"
          y2="6"
        />
        <motion.circle
          animate={controls}
          cx="9"
          cy="6"
          fill="none"
          r="1.5"
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { cx: 9 },
            animate: { cx: 12 },
          }}
        />

        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { x1: 16.5 },
            animate: { x1: 13.5 },
          }}
          x1="16.5"
          x2="20.25"
          y1="12"
          y2="12"
        />
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { x2: 13.5 },
            animate: { x2: 10.5 },
          }}
          x1="3.75"
          x2="13.5"
          y1="12"
          y2="12"
        />
        <motion.circle
          animate={controls}
          cx="15"
          cy="12"
          fill="none"
          r="1.5"
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { cx: 15 },
            animate: { cx: 12 },
          }}
        />

        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { x1: 10.5 },
            animate: { x1: 13.5 },
          }}
          x1="10.5"
          x2="20.25"
          y1="18"
          y2="18"
        />
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { x2: 7.5 },
            animate: { x2: 10.5 },
          }}
          x1="3.75"
          x2="7.5"
          y1="18"
          y2="18"
        />
        <motion.circle
          animate={controls}
          cx="9"
          cy="18"
          fill="none"
          r="1.5"
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { cx: 9 },
            animate: { cx: 12 },
          }}
        />
      </svg>
    </div>
  );
});

AdjustmentsHorizontalIcon.displayName = "AdjustmentsHorizontalIcon";

export { AdjustmentsHorizontalIcon };
