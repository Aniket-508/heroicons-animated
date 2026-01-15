"use client";

import { cn } from "@heroicons-animated/shared";
import type { Transition } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface AdjustmentsVerticalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AdjustmentsVerticalIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 12,
  mass: 0.4,
};

const AdjustmentsVerticalIcon = forwardRef<
  AdjustmentsVerticalIconHandle,
  AdjustmentsVerticalIconProps
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
            normal: { y2: 13.5 },
            animate: { y2: 10.5 },
          }}
          x1="6"
          x2="6"
          y1="3.75"
          y2="13.5"
        />
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { y1: 16.5 },
            animate: { y1: 13.5 },
          }}
          x1="6"
          x2="6"
          y1="16.5"
          y2="20.25"
        />
        <motion.circle
          animate={controls}
          cx="6"
          cy="15"
          fill="none"
          r="1.5"
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { cy: 15 },
            animate: { cy: 12 },
          }}
        />

        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { y2: 7.5 },
            animate: { y2: 10.5 },
          }}
          x1="12"
          x2="12"
          y1="3.75"
          y2="7.5"
        />
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { y1: 10.5 },
            animate: { y1: 13.5 },
          }}
          x1="12"
          x2="12"
          y1="10.5"
          y2="20.25"
        />
        <motion.circle
          animate={controls}
          cx="12"
          cy="9"
          fill="none"
          r="1.5"
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { cy: 9 },
            animate: { cy: 12 },
          }}
        />

        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { y2: 13.5 },
            animate: { y2: 10.5 },
          }}
          x1="18"
          x2="18"
          y1="3.75"
          y2="13.5"
        />
        <motion.line
          animate={controls}
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { y1: 16.5 },
            animate: { y1: 13.5 },
          }}
          x1="18"
          x2="18"
          y1="16.5"
          y2="20.25"
        />
        <motion.circle
          animate={controls}
          cx="18"
          cy="15"
          fill="none"
          r="1.5"
          transition={DEFAULT_TRANSITION}
          variants={{
            normal: { cy: 15 },
            animate: { cy: 12 },
          }}
        />
      </svg>
    </div>
  );
});

AdjustmentsVerticalIcon.displayName = "AdjustmentsVerticalIcon";

export { AdjustmentsVerticalIcon };
