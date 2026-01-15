"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ArrowTurnDownLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnDownLeftIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const STRETCH_VARIANTS: Variants = {
  normal: { scaleX: 1, x: 0, opacity: 1 },
  animate: {
    scaleX: [1, 1.15, 1],
    x: [0, -2, 0],
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const ArrowTurnDownLeftIcon = forwardRef<
  ArrowTurnDownLeftIconHandle,
  ArrowTurnDownLeftIconProps
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
      <motion.svg
        animate={controls}
        fill="none"
        height={size}
        initial="normal"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        variants={STRETCH_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499" />
      </motion.svg>
    </div>
  );
});

ArrowTurnDownLeftIcon.displayName = "ArrowTurnDownLeftIcon";

export { ArrowTurnDownLeftIcon };
