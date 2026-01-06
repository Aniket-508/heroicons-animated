"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface FaceFrownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface FaceFrownIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FACE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    scale: [1, 1.15, 1.05, 1.08],
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut",
    },
  },
};

const MOUTH_VARIANTS: Variants = {
  normal: {
    d: "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
    pathLength: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    d: [
      "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
      "M15.5 17C14.5 16 13 15.5 12 15.5C11 15.5 9.5 16 8.5 17",
      "M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179",
    ],
    pathLength: [0.3, 1, 1],
    transition: {
      d: { duration: 0.5, ease: "easeOut" },
      pathLength: {
        duration: 0.5,
        times: [0, 0.5, 1],
        ease: "easeInOut",
      },
      delay: 0.1,
    },
  },
};

const LEFT_EYE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    scale: [1, 1.3, 0.9, 1.1],
    y: [0, -0.5, 0.3, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut",
    },
  },
};

const RIGHT_EYE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  animate: {
    scale: [1, 0.9, 1.3, 1.1],
    y: [0, -0.5, 0.3, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.3, 0.6, 1],
      ease: "easeInOut",
    },
  },
};

const FaceFrownIcon = forwardRef<FaceFrownIconHandle, FaceFrownIconProps>(
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
          variants={FACE_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="9" />
          <motion.path
            animate={controls}
            d="M15.1823 16.3179C14.3075 15.4432 13.1623 15.0038 12.0158 14.9999C10.859 14.996 9.70095 15.4353 8.81834 16.3179"
            initial="normal"
            variants={MOUTH_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M9.75 9.75C9.75 10.1642 9.58211 10.5 9.375 10.5C9.16789 10.5 9 10.1642 9 9.75C9 9.33579 9.16789 9 9.375 9C9.58211 9 9.75 9.33579 9.75 9.75Z"
            initial="normal"
            variants={LEFT_EYE_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M15 9.75C15 10.1642 14.8321 10.5 14.625 10.5C14.4179 10.5 14.25 10.1642 14.25 9.75C14.25 9.33579 14.4179 9 14.625 9C14.8321 9 15 9.33579 15 9.75Z"
            initial="normal"
            variants={RIGHT_EYE_VARIANTS}
          />
        </motion.svg>
      </div>
    );
  }
);

FaceFrownIcon.displayName = "FaceFrownIcon";

export { FaceFrownIcon };
