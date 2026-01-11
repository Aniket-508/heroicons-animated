"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface PowerIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PowerIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CIRCLE_VARIANTS: Variants = {
  normal: { opacity: 1, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5, 1],
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const LINE_VARIANTS: Variants = {
  normal: { y: 0 },
  animate: {
    y: [0, -2, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const PowerIcon = forwardRef<PowerIconHandle, PowerIconProps>(
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
            d="M5.636 5.636a9 9 0 1 0 12.728 0"
            initial="normal"
            style={{ transformOrigin: "center center" }}
            variants={CIRCLE_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M12 3v9"
            initial="normal"
            variants={LINE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

PowerIcon.displayName = "PowerIcon";

export { PowerIcon };
