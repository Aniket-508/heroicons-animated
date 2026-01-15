"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface CurrencyPoundIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CurrencyPoundIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ROTATE_VARIANTS: Variants = {
  normal: {
    scaleX: 1,
  },
  animate: {
    scaleX: [1, -1, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const CurrencyPoundIcon = forwardRef<
  CurrencyPoundIconHandle,
  CurrencyPoundIconProps
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
        style={{ originX: "50%", originY: "50%" }}
        variants={ROTATE_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.1213 7.62877C12.9497 6.45719 11.0503 6.45719 9.87868 7.62877C9.37424 8.13321 9.08699 8.7726 9.01694 9.43073C8.9944 9.64251 9.01512 9.85582 9.04524 10.0667L9.5512 13.6084C9.68065 14.5146 9.5307 15.4386 9.12135 16.2573L9 16.5L10.5385 15.9872C11.0003 15.8332 11.4997 15.8332 11.9615 15.9872L12.6158 16.2053C13.182 16.394 13.7999 16.3501 14.3336 16.0832L15 15.75M8.25 12H12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
      </motion.svg>
    </div>
  );
});

CurrencyPoundIcon.displayName = "CurrencyPoundIcon";

export { CurrencyPoundIcon };
