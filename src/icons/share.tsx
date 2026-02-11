"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ShareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ShareIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const NODE_VARIANTS: Variants = {
  normal: {
    scale: 1,
  },
  animate: (delay: number) => ({
    scale: [1, 1.3, 1],
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const LINE_VARIANTS: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ShareIcon = forwardRef<ShareIconHandle, ShareIconProps>(
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
            d="M7.21721 10.9071C7.39737 11.2307 7.5 11.6034 7.5 12C7.5 12.3966 7.39737 12.7693 7.21721 13.0929M7.21721 10.9071L16.7828 5.5929M7.21721 13.0929L16.7828 18.4071"
            initial="normal"
            variants={LINE_VARIANTS}
          />
          <motion.circle
            animate={controls}
            custom={0}
            cx="5.25"
            cy="12"
            initial="normal"
            r="2.25"
            variants={NODE_VARIANTS}
          />
          <motion.circle
            animate={controls}
            custom={0.15}
            cx="18.75"
            cy="4.5"
            initial="normal"
            r="2.25"
            variants={NODE_VARIANTS}
          />
          <motion.circle
            animate={controls}
            custom={0.3}
            cx="18.75"
            cy="19.5"
            initial="normal"
            r="2.25"
            variants={NODE_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

ShareIcon.displayName = "ShareIcon";

export { ShareIcon };
