"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface GifIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface GifIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const LETTER_VARIANTS: Variants = {
  normal: {
    x: 0,
    y: 0,
  },
  animate: {
    x: [0, -0.5, 0.5, -0.3, 0.3, -0.5, 0.5, 0],
    y: [0, 0.5, -0.5, 0.3, -0.3, 0.5, -0.5, 0],
    transition: {
      duration: 0.5,
      ease: "linear",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
    },
  },
};

const GifIcon = forwardRef<GifIconHandle, GifIconProps>(
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
          {/* Static frame */}
          <path d="M4.5 19.5H19.5C20.7426 19.5 21.75 18.4926 21.75 17.25V6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75V17.25C2.25 18.4926 3.25736 19.5 4.5 19.5Z" />
          {/* Jittering GIF letters */}
          <motion.g
            animate={controls}
            initial="normal"
            variants={LETTER_VARIANTS}
          >
            {/* G letter */}
            <path d="M9.75 9.34835C8.72056 7.88388 7.05152 7.88388 6.02208 9.34835C4.99264 10.8128 4.99264 13.1872 6.02208 14.6517C7.05152 16.1161 8.72056 16.1161 9.75 14.6517V12H8.25" />
            {/* I letter */}
            <path d="M12.75 8.25V15.75" />
            {/* F letter */}
            <path d="M18.75 8.25H15.75V12M15.75 12V15.75M15.75 12H18" />
          </motion.g>
        </svg>
      </div>
    );
  }
);

GifIcon.displayName = "GifIcon";

export { GifIcon };
