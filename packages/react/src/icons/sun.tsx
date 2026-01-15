"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface SunIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SunIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const RAY_VARIANTS: Variants = {
  normal: { opacity: 1 },
  animate: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const SunIcon = forwardRef<SunIconHandle, SunIconProps>(
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
          <circle cx="12" cy="12" r="3.75" />
          <motion.path
            animate={controls}
            custom={0}
            d="M12 3V5.25"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={1}
            d="M18.364 5.63604L16.773 7.22703"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={2}
            d="M21 12H18.75"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={3}
            d="M18.364 18.364L16.773 16.773"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={4}
            d="M12 18.75V21"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={5}
            d="M7.22703 16.773L5.63604 18.364"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={6}
            d="M5.25 12H3"
            variants={RAY_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={7}
            d="M7.22703 7.22703L5.63604 5.63604"
            variants={RAY_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

SunIcon.displayName = "SunIcon";

export { SunIcon };
