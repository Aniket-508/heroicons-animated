"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface RssIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface RssIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const WAVE_VARIANTS: Variants = {
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

const RssIcon = forwardRef<RssIconHandle, RssIconProps>(
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
          <path d="M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          <motion.path
            animate={controls}
            custom={1}
            d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5"
            initial="normal"
            variants={WAVE_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={2}
            d="M4.5 4.5h.75c7.87 0 14.25 6.38 14.25 14.25v.75"
            initial="normal"
            variants={WAVE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

RssIcon.displayName = "RssIcon";

export { RssIcon };
