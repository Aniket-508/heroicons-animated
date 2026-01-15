"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ArrowUturnRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnRightIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const STRETCH_VARIANTS: Variants = {
  normal: { scaleX: 1, x: 0, opacity: 1 },
  animate: {
    scaleX: [1, 1.15, 1],
    x: [0, 1.5, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const ArrowUturnRightIcon = forwardRef<
  ArrowUturnRightIconHandle,
  ArrowUturnRightIconProps
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
        <path d="M21 9H9a6 6 0 0 0 0 12h3" />
        <motion.g animate={controls} variants={STRETCH_VARIANTS}>
          <path d="m15 15 6-6m0 0-6-6m6 6" />
        </motion.g>
      </svg>
    </div>
  );
});

ArrowUturnRightIcon.displayName = "ArrowUturnRightIcon";

export { ArrowUturnRightIcon };
