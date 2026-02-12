"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface PauseCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PauseCircleIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BASE_VARIANTS: Variants = {
  normal: {
    y: 0,
  },
};

const BASE_TRANSITION = {
  transition: {
    times: [0, 0.2, 0.5, 1],
    duration: 0.5,
    stiffness: 260,
    damping: 20,
  },
};

const LEFT_BAR_VARIANTS: Variants = {
  ...BASE_VARIANTS,
  animate: {
    y: [0, 2, 0, 0],
    ...BASE_TRANSITION,
  },
};

const RIGHT_BAR_VARIANTS: Variants = {
  ...BASE_VARIANTS,
  animate: {
    y: [0, 0, 2, 0],
    ...BASE_TRANSITION,
  },
};

const PauseCircleIcon = forwardRef<PauseCircleIconHandle, PauseCircleIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
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
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <motion.path
            animate={controls}
            d="M9.75 9v6"
            variants={LEFT_BAR_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M14.25 9v6"
            variants={RIGHT_BAR_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

PauseCircleIcon.displayName = "PauseCircleIcon";

export { PauseCircleIcon };
