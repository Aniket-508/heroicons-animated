"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface CurrencyYenIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CurrencyYenIconProps extends HTMLAttributes<HTMLDivElement> {
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

const CurrencyYenIcon = forwardRef<CurrencyYenIconHandle, CurrencyYenIconProps>(
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
          style={{ originX: "50%", originY: "50%" }}
          variants={ROTATE_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 7.5L12 12M12 12L15 7.5M12 12V17.25M15 12H9M15 15H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        </motion.svg>
      </div>
    );
  }
);

CurrencyYenIcon.displayName = "CurrencyYenIcon";

export { CurrencyYenIcon };
