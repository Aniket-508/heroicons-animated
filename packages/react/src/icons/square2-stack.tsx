"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface Square2StackIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Square2StackIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FRONT_VARIANTS: Variants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 1, 0],
    y: [0, 1, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const BACK_VARIANTS: Variants = {
  normal: { x: 0, y: 0, opacity: 1 },
  animate: {
    x: [-4, 0],
    y: [-4, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Square2StackIcon = forwardRef<
  Square2StackIconHandle,
  Square2StackIconProps
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
        <motion.path
          animate={controls}
          d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25"
          initial="normal"
          variants={BACK_VARIANTS}
        />
        <motion.path
          animate={controls}
          d="M16.5 8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
          initial="normal"
          variants={FRONT_VARIANTS}
        />
      </svg>
    </div>
  );
});

Square2StackIcon.displayName = "Square2StackIcon";

export { Square2StackIcon };
