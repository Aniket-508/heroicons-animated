"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface ArrowUturnDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnDownIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const STRETCH_VARIANTS: Variants = {
  normal: { scaleY: 1, y: 0, opacity: 1 },
  animate: {
    scaleY: [1, 1.15, 1],
    y: [0, 1.5, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const ArrowUturnDownIcon = forwardRef<
  ArrowUturnDownIconHandle,
  ArrowUturnDownIconProps
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
        <path d="M9 21V9a6 6 0 0 1 12 0v3" />
        <motion.g animate={controls} variants={STRETCH_VARIANTS}>
          <path d="m15 15-6 6m0 0-6-6m6 6" />
        </motion.g>
      </svg>
    </div>
  );
});

ArrowUturnDownIcon.displayName = "ArrowUturnDownIcon";

export { ArrowUturnDownIcon };
