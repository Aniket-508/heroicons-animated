"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ViewfinderCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ViewfinderCircleIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CORNER_VARIANTS: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
  animate: {
    scale: 1.2,
    rotate: 45,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const CIRCLE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
  animate: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
};

const ViewfinderCircleIcon = forwardRef<
  ViewfinderCircleIconHandle,
  ViewfinderCircleIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: async () => {
        await controls.start("animate");
        await controls.start("normal");
      },
      stopAnimation: () => controls.start("normal"),
    };
  });

  const handleMouseEnter = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        await controls.start("animate");
        await controls.start("normal");
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
          d="M7.5 3.75H6C4.75736 3.75 3.75 4.75736 3.75 6V7.5"
          initial="normal"
          variants={CORNER_VARIANTS}
        />
        <motion.path
          animate={controls}
          d="M16.5 3.75H18C19.2426 3.75 20.25 4.75736 20.25 6V7.5"
          initial="normal"
          variants={CORNER_VARIANTS}
        />
        <motion.path
          animate={controls}
          d="M20.25 16.5V18C20.25 19.2426 19.2426 20.25 18 20.25H16.5"
          initial="normal"
          variants={CORNER_VARIANTS}
        />
        <motion.path
          animate={controls}
          d="M7.5 20.25H6C4.75736 20.25 3.75 19.2426 3.75 18V16.5"
          initial="normal"
          variants={CORNER_VARIANTS}
        />
        <motion.path
          animate={controls}
          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
          initial="normal"
          variants={CIRCLE_VARIANTS}
        />
      </svg>
    </div>
  );
});

ViewfinderCircleIcon.displayName = "ViewfinderCircleIcon";

export { ViewfinderCircleIcon };
