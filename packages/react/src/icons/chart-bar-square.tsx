"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ChartBarSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChartBarSquareIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CREATE_BAR_VARIANTS = (delay: number): Variants => ({
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      delay,
      duration: 0.4,
      ease: "easeOut",
      opacity: { duration: 0.1, delay },
    },
  },
});

const ChartBarSquareIcon = forwardRef<
  ChartBarSquareIconHandle,
  ChartBarSquareIconProps
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
        <path d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        <motion.path
          animate={controls}
          d="M7.5 14.25v2.25"
          initial="normal"
          variants={CREATE_BAR_VARIANTS(0)}
        />
        <motion.path
          animate={controls}
          d="M10.5 12v4.5"
          initial="normal"
          variants={CREATE_BAR_VARIANTS(0.15)}
        />
        <motion.path
          animate={controls}
          d="M13.5 9.75v6.75"
          initial="normal"
          variants={CREATE_BAR_VARIANTS(0.3)}
        />
        <motion.path
          animate={controls}
          d="M16.5 7.5v9"
          initial="normal"
          variants={CREATE_BAR_VARIANTS(0.45)}
        />
      </svg>
    </div>
  );
});

ChartBarSquareIcon.displayName = "ChartBarSquareIcon";

export { ChartBarSquareIcon };
