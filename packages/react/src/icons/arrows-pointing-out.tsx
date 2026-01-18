"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ArrowsPointingOutIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsPointingOutIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TOP_LEFT_ARROW_VARIANTS: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, -2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const BOTTOM_LEFT_ARROW_VARIANTS: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, -2, 0],
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const TOP_RIGHT_ARROW_VARIANTS: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, -2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const BOTTOM_RIGHT_ARROW_VARIANTS: Variants = {
  normal: { translateX: 0, translateY: 0 },
  animate: {
    translateX: [0, 2, 0],
    translateY: [0, 2, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.4, 1],
    },
  },
};

const ArrowsPointingOutIcon = forwardRef<
  ArrowsPointingOutIconHandle,
  ArrowsPointingOutIconProps
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
        <motion.g animate={controls} variants={TOP_LEFT_ARROW_VARIANTS}>
          <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9" />
        </motion.g>
        <motion.g animate={controls} variants={BOTTOM_LEFT_ARROW_VARIANTS}>
          <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15" />
        </motion.g>
        <motion.g animate={controls} variants={TOP_RIGHT_ARROW_VARIANTS}>
          <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9" />
        </motion.g>
        <motion.g animate={controls} variants={BOTTOM_RIGHT_ARROW_VARIANTS}>
          <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </motion.g>
      </svg>
    </div>
  );
});

ArrowsPointingOutIcon.displayName = "ArrowsPointingOutIcon";

export { ArrowsPointingOutIcon };
