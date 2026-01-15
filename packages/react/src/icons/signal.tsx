"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface SignalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SignalIconProps extends HTMLAttributes<HTMLDivElement> {
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

const SignalIcon = forwardRef<SignalIconHandle, SignalIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const waveControls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;

      return {
        startAnimation: () => {
          waveControls.start("animate");
        },
        stopAnimation: () => {
          waveControls.start("normal");
        },
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          waveControls.start("animate");
        }
      },
      [waveControls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          waveControls.start("normal");
        }
      },
      [waveControls, onMouseLeave]
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
          <path d="M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          <motion.path
            animate={waveControls}
            custom={1}
            d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304"
            initial="normal"
            style={{ transformOrigin: "12px 12px" }}
            variants={WAVE_VARIANTS}
          />
          <motion.path
            animate={waveControls}
            custom={2}
            d="M7.227 16.773a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546"
            initial="normal"
            style={{ transformOrigin: "12px 12px" }}
            variants={WAVE_VARIANTS}
          />
          <motion.path
            animate={waveControls}
            custom={3}
            d="M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788"
            initial="normal"
            style={{ transformOrigin: "12px 12px" }}
            variants={WAVE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

SignalIcon.displayName = "SignalIcon";

export { SignalIcon };
