"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface Bars3BottomRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Bars3BottomRightIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CREATE_SLIDE_VARIANTS = (delay: number): Variants => ({
  normal: {
    translateX: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    translateX: [0, 3, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      delay,
    },
  },
});

const BOTTOM_BAR_VARIANTS: Variants = {
  normal: {
    translateX: 0,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    translateX: [0, 2, 0],
    pathLength: [1, 0.5, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.15,
    },
  },
};

const Bars3BottomRightIcon = forwardRef<
  Bars3BottomRightIconHandle,
  Bars3BottomRightIconProps
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
          d="M3.75 6.75h16.5"
          initial="normal"
          variants={CREATE_SLIDE_VARIANTS(0)}
        />
        <motion.path
          animate={controls}
          d="M3.75 12h16.5"
          initial="normal"
          variants={CREATE_SLIDE_VARIANTS(0.05)}
        />
        <motion.path
          animate={controls}
          d="M12 17.25h8.25"
          initial="normal"
          variants={BOTTOM_BAR_VARIANTS}
        />
      </svg>
    </div>
  );
});

Bars3BottomRightIcon.displayName = "Bars3BottomRightIcon";

export { Bars3BottomRightIcon };
