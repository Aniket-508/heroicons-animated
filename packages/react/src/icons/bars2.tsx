"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface Bars2IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Bars2IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TRANSITION: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};

const CREATE_BAR_VARIANTS = (delay: number): Variants => ({
  normal: {
    scaleX: 1,
    transition: TRANSITION,
  },
  animate: {
    scaleX: [1, 0.6, 1],
    transition: {
      ...TRANSITION,
      delay,
    },
  },
});

const BARS = [
  { d: "M3.75 9h16.5", delay: 0 },
  { d: "M3.75 15.75h16.5", delay: 0.1 },
];

const Bars2Icon = forwardRef<Bars2IconHandle, Bars2IconProps>(
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
          {BARS.map((bar) => (
            <motion.path
              animate={controls}
              d={bar.d}
              initial="normal"
              key={bar.d}
              style={{ transformOrigin: "center" }}
              variants={CREATE_BAR_VARIANTS(bar.delay)}
            />
          ))}
        </svg>
      </div>
    );
  }
);

Bars2Icon.displayName = "Bars2Icon";

export { Bars2Icon };
