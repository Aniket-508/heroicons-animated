"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import {
  forwardRef,
  useCallback,
  useId,
  useImperativeHandle,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

export interface Battery100IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Battery100IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const clipVariants: Variants = {
  normal: {
    width: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  animate: {
    width: 13.5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Battery100Icon = forwardRef<Battery100IconHandle, Battery100IconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);
    const clipId = useId();

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
          <defs>
            <clipPath id={clipId}>
              <motion.rect
                animate={controls}
                height="4.5"
                initial="normal"
                variants={clipVariants}
                x="4.5"
                y="10.5"
              />
            </clipPath>
          </defs>
          {/* Battery cap */}
          <path d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21" />
          {/* Battery container */}
          <path d="M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
          {/* Battery fill (100%) - outline */}
          <path d="M4.5 10.5H18V15H4.5v-4.5Z" />
          {/* Battery fill (100%) - animated fill */}
          <path
            clipPath={`url(#${clipId})`}
            d="M4.5 10.5H18V15H4.5v-4.5Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </div>
    );
  }
);

Battery100Icon.displayName = "Battery100Icon";

export { Battery100Icon };
