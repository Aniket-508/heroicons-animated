"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface InformationCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface InformationCircleIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const INFO_VARIANTS: Variants = {
  normal: { opacity: 1, scale: 1 },
  animate: {
    opacity: [1, 0.4, 1],
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.8,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

const InformationCircleIcon = forwardRef<
  InformationCircleIconHandle,
  InformationCircleIconProps
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
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
        <motion.g
          animate={controls}
          initial="normal"
          style={{ originX: "50%", originY: "50%" }}
          variants={INFO_VARIANTS}
        >
          <path d="M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75" />
          <path d="M12 8.25H12.0075V8.2575H12V8.25Z" />
        </motion.g>
      </svg>
    </div>
  );
});

InformationCircleIcon.displayName = "InformationCircleIcon";

export { InformationCircleIcon };
