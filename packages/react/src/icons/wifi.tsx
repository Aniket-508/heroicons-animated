"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface WifiIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WifiIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ARC_VARIANTS: Variants = {
  normal: { opacity: 1, scale: 1 },
  animate: (custom: number) => ({
    opacity: 0,
    scale: 0,
    transition: {
      opacity: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 0.2,
        delay: 0.2 * (custom - 1),
      },
      scale: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "reverse",
        repeatDelay: 0.2,
        delay: 0.2 * (custom - 1),
      },
    },
  }),
};

const WifiIcon = forwardRef<WifiIconHandle, WifiIconProps>(
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
          <path d="M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0" />
          <motion.path
            animate={controls}
            custom={1}
            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0"
            initial="normal"
            variants={ARC_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={2}
            d="M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0"
            initial="normal"
            variants={ARC_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={3}
            d="M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"
            initial="normal"
            variants={ARC_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

WifiIcon.displayName = "WifiIcon";

export { WifiIcon };
