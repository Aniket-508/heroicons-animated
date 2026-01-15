"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface ArrowTrendingUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTrendingUpIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const SVG_VARIANTS: Variants = {
  normal: {
    translateX: 0,
    translateY: 0,
  },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
    },
  },
};

const PATH_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
};

const ARROW_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [0.5, 0],
    transition: {
      delay: 0.3,
      duration: 0.3,
      opacity: { duration: 0.1, delay: 0.3 },
    },
  },
};

const ArrowTrendingUpIcon = forwardRef<
  ArrowTrendingUpIconHandle,
  ArrowTrendingUpIconProps
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
      <motion.svg
        animate={controls}
        fill="none"
        height={size}
        initial="normal"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        variants={SVG_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={controls}
          d="M2.25 18L9 11.25L13.3064 15.5564C14.5101 13.188 16.5042 11.2022 19.1203 10.0375L21.8609 8.81726"
          initial="normal"
          variants={PATH_VARIANTS}
        />
        <motion.path
          animate={controls}
          d="M21.8609 8.81726L15.9196 6.53662M21.8609 8.81726L19.5802 14.7585"
          initial="normal"
          variants={ARROW_VARIANTS}
        />
      </motion.svg>
    </div>
  );
});

ArrowTrendingUpIcon.displayName = "ArrowTrendingUpIcon";

export { ArrowTrendingUpIcon };
