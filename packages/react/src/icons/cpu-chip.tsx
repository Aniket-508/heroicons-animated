"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface CpuChipIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CpuChipIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TRANSITION: Transition = {
  duration: 0.5,
  ease: "easeInOut",
  repeat: 1,
};

const Y_VARIANTS: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scaleY: [1, 1.5, 1],
    opacity: [1, 0.8, 1],
  },
};

const X_VARIANTS: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scaleX: [1, 1.5, 1],
    opacity: [1, 0.8, 1],
  },
};

const CpuChipIcon = forwardRef<CpuChipIconHandle, CpuChipIconProps>(
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
          <motion.path
            animate={controls}
            d="M8.25 3V4.5"
            transition={TRANSITION}
            variants={Y_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M12 3V4.5"
            transition={TRANSITION}
            variants={Y_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M15.75 3V4.5"
            transition={TRANSITION}
            variants={Y_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M4.5 8.25H3"
            transition={TRANSITION}
            variants={X_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M4.5 12H3"
            transition={TRANSITION}
            variants={X_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M4.5 15.75H3"
            transition={TRANSITION}
            variants={X_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M21 8.25H19.5"
            transition={TRANSITION}
            variants={X_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M21 12H19.5"
            transition={TRANSITION}
            variants={X_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M21 15.75H19.5"
            transition={TRANSITION}
            variants={X_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M8.25 19.5V21"
            transition={TRANSITION}
            variants={Y_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M12 19.5V21"
            transition={TRANSITION}
            variants={Y_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M15.75 19.5V21"
            transition={TRANSITION}
            variants={Y_VARIANTS}
          />
          <path d="M6.75 19.5H17.25C18.4926 19.5 19.5 18.4926 19.5 17.25V6.75C19.5 5.50736 18.4926 4.5 17.25 4.5H6.75C5.50736 4.5 4.5 5.50736 4.5 6.75V17.25C4.5 18.4926 5.50736 19.5 6.75 19.5ZM7.5 7.5H16.5V16.5H7.5V7.5Z" />
        </svg>
      </div>
    );
  }
);

CpuChipIcon.displayName = "CpuChipIcon";

export { CpuChipIcon };
