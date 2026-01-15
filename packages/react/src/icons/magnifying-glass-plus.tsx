"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface MagnifyingGlassPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MagnifyingGlassPlusIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const VERTICAL_LINE_VARIANT: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.3,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
};

const HORIZONTAL_LINE_VARIANT: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      delay: 0.6,
      duration: 0.2,
      opacity: { duration: 0.1, delay: 0.6 },
    },
  },
};

const MagnifyingGlassPlusIcon = forwardRef<
  MagnifyingGlassPlusIconHandle,
  MagnifyingGlassPlusIconProps
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
        <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        <motion.path
          animate={controls}
          d="M10.5 7.5v6"
          initial="normal"
          variants={VERTICAL_LINE_VARIANT}
        />
        <motion.path
          animate={controls}
          d="M7.5 10.5h6"
          initial="normal"
          variants={HORIZONTAL_LINE_VARIANT}
        />
      </svg>
    </div>
  );
});

MagnifyingGlassPlusIcon.displayName = "MagnifyingGlassPlusIcon";

export { MagnifyingGlassPlusIcon };
