"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface SpeakerWaveIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SpeakerWaveIconProps extends HTMLAttributes<HTMLDivElement> {
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

const SpeakerWaveIcon = forwardRef<SpeakerWaveIconHandle, SpeakerWaveIconProps>(
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
          waveControls.start("expand");
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
          <path d="M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          <motion.path
            animate={waveControls}
            custom={1}
            d="M16.463 8.288a5.25 5.25 0 0 1 0 7.424"
            initial="normal"
            variants={WAVE_VARIANTS}
          />
          <motion.path
            animate={waveControls}
            custom={2}
            d="M19.114 5.636a9 9 0 0 1 0 12.728"
            initial="normal"
            variants={WAVE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

SpeakerWaveIcon.displayName = "SpeakerWaveIcon";

export { SpeakerWaveIcon };
