"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BellSnoozeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BellSnoozeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BELL_VARIANTS: Variants = {
  normal: { rotate: 0, scale: 1 },
  animate: {
    rotate: [0, -8, -8, 0],
    scale: [1, 0.97, 0.97, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const SNOOZE_VARIANTS: Variants = {
  normal: { opacity: 1, y: 0, scale: 1 },
  animate: {
    opacity: [1, 1, 0.6, 1],
    y: [0, -1, -2, 0],
    scale: [1, 1.1, 1.15, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const BellSnoozeIcon = forwardRef<BellSnoozeIconHandle, BellSnoozeIconProps>(
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
          <motion.g
            animate={controls}
            initial="normal"
            variants={BELL_VARIANTS}
          >
            <path d="M14.8569 17.0817C16.7514 16.857 18.5783 16.4116 20.3111 15.7719C18.8743 14.177 17.9998 12.0656 17.9998 9.75V9.04919C17.9999 9.03281 18 9.01641 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9L5.9998 9.75C5.9998 12.0656 5.12527 14.177 3.68848 15.7719C5.4214 16.4116 7.24843 16.857 9.14314 17.0818M14.8569 17.0817C13.92 17.1928 12.9666 17.25 11.9998 17.25C11.0332 17.25 10.0799 17.1929 9.14314 17.0818M14.8569 17.0817C14.9498 17.3711 15 17.6797 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 17.6797 9.05019 17.3712 9.14314 17.0818" />
          </motion.g>
          <motion.path
            animate={controls}
            d="M10.5 8.25H13.5L10.5 12.75H13.5"
            initial="normal"
            variants={SNOOZE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

BellSnoozeIcon.displayName = "BellSnoozeIcon";

export { BellSnoozeIcon };
