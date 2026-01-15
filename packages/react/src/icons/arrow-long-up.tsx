"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface ArrowLongUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLongUpIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ARROW_HEAD_VARIANTS: Variants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, 3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const LINE_VARIANTS: Variants = {
  normal: { d: "M12 3v18" },
  animate: {
    d: ["M12 3v18", "M12 6v15", "M12 3v18"],
    transition: {
      duration: 0.4,
    },
  },
};

const ArrowLongUpIcon = forwardRef<ArrowLongUpIconHandle, ArrowLongUpIconProps>(
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
          <motion.path
            animate={controls}
            d="M8.25 6.75 12 3m0 0 3.75 3.75"
            variants={ARROW_HEAD_VARIANTS}
          />
          <motion.path
            animate={controls}
            d="M12 3v18"
            variants={LINE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

ArrowLongUpIcon.displayName = "ArrowLongUpIcon";

export { ArrowLongUpIcon };
