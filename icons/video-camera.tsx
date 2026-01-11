"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface VideoCameraIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface VideoCameraIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CAMERA_VARIANTS: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const RECORD_VARIANTS: Variants = {
  normal: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 0, 1, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const VideoCameraIcon = forwardRef<VideoCameraIconHandle, VideoCameraIconProps>(
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
        <motion.svg
          animate={controls}
          fill="none"
          height={size}
          initial="normal"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          variants={CAMERA_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.75 10.5L20.4697 5.78033C20.9421 5.30786 21.75 5.64248 21.75 6.31066V17.6893C21.75 18.3575 20.9421 18.6921 20.4697 18.2197L15.75 13.5M4.5 18.75H13.5C14.7426 18.75 15.75 17.7426 15.75 16.5V7.5C15.75 6.25736 14.7426 5.25 13.5 5.25H4.5C3.25736 5.25 2.25 6.25736 2.25 7.5V16.5C2.25 17.7426 3.25736 18.75 4.5 18.75Z" />
          <motion.circle
            cx="5"
            cy="7.5"
            fill="red"
            initial="normal"
            r="1"
            stroke="none"
            variants={RECORD_VARIANTS}
          />
        </motion.svg>
      </div>
    );
  }
);

VideoCameraIcon.displayName = "VideoCameraIcon";

export { VideoCameraIcon };
