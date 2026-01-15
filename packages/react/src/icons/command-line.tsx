"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface CommandLineIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CommandLineIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TEXT_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
    },
  },
};

const CommandLineIcon = forwardRef<CommandLineIconHandle, CommandLineIconProps>(
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
          <path d="M5.25 20.25H18.75C19.9926 20.25 21 19.2426 21 18V6C21 4.75736 19.9926 3.75 18.75 3.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25Z" />
          <path d="M6.75 7.5L9.75 9.75L6.75 12" />
          <motion.path
            animate={controls}
            d="M11.25 12H14.25"
            initial="normal"
            variants={TEXT_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

CommandLineIcon.displayName = "CommandLineIcon";

export { CommandLineIcon };
