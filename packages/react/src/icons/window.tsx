"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface WindowIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WindowIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BUTTON_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: (delay: number) => ({
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const WindowIcon = forwardRef<WindowIconHandle, WindowIconProps>(
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
          <path d="M3 8.25V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V8.25M3 8.25V6C3 4.75736 4.00736 3.75 5.25 3.75H18.75C19.9926 3.75 21 4.75736 21 6V8.25M3 8.25H21" />
          <motion.path
            animate={controls}
            custom={0}
            d="M5.25 6H5.2575V6.0075H5.25V6Z"
            initial="normal"
            variants={BUTTON_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.1}
            d="M7.5 6H7.5075V6.0075H7.5V6Z"
            initial="normal"
            variants={BUTTON_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.2}
            d="M9.75 6H9.7575V6.0075H9.75V6Z"
            initial="normal"
            variants={BUTTON_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

WindowIcon.displayName = "WindowIcon";

export { WindowIcon };
