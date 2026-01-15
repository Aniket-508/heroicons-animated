"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface RectangleGroupIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface RectangleGroupIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const RECT_VARIANTS = (delay: number): Variants => ({
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0.9, 1.05, 1],
    opacity: [0.5, 1, 1],
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  },
});

const RectangleGroupIcon = forwardRef<
  RectangleGroupIconHandle,
  RectangleGroupIconProps
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
          d="M2.25 7.125C2.25 6.50368 2.75368 6 3.375 6H9.375C9.99632 6 10.5 6.50368 10.5 7.125V10.875C10.5 11.4963 9.99632 12 9.375 12H3.375C2.75368 12 2.25 11.4963 2.25 10.875V7.125Z"
          initial="normal"
          variants={RECT_VARIANTS(0)}
        />
        <motion.path
          animate={controls}
          d="M14.25 8.625C14.25 8.00368 14.7537 7.5 15.375 7.5H20.625C21.2463 7.5 21.75 8.00368 21.75 8.625V16.875C21.75 17.4963 21.2463 18 20.625 18H15.375C14.7537 18 14.25 17.4963 14.25 16.875V8.625Z"
          initial="normal"
          variants={RECT_VARIANTS(0.1)}
        />
        <motion.path
          animate={controls}
          d="M3.75 16.125C3.75 15.5037 4.25368 15 4.875 15H10.125C10.7463 15 11.25 15.5037 11.25 16.125V18.375C11.25 18.9963 10.7463 19.5 10.125 19.5H4.875C4.25368 19.5 3.75 18.9963 3.75 18.375V16.125Z"
          initial="normal"
          variants={RECT_VARIANTS(0.2)}
        />
      </svg>
    </div>
  );
});

RectangleGroupIcon.displayName = "RectangleGroupIcon";

export { RectangleGroupIcon };
