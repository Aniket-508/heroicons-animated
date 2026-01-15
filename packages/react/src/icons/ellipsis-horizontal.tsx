"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface EllipsisHorizontalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface EllipsisHorizontalIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DOT_VARIANTS: Variants = {
  normal: {
    scale: 1,
  },
  animate: (custom: number) => ({
    scale: [1, 1.3, 1],
    transition: {
      duration: 0.4,
      delay: custom * 0.05,
      ease: "easeInOut",
    },
  }),
};

const EllipsisHorizontalIcon = forwardRef<
  EllipsisHorizontalIconHandle,
  EllipsisHorizontalIconProps
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
        {[
          {
            d: "M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z",
            index: 0,
          },
          {
            d: "M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z",
            index: 1,
          },
          {
            d: "M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z",
            index: 2,
          },
        ].map((dot) => (
          <motion.path
            animate={controls}
            custom={dot.index}
            d={dot.d}
            initial="normal"
            key={dot.index}
            variants={DOT_VARIANTS}
          />
        ))}
      </svg>
    </div>
  );
});

EllipsisHorizontalIcon.displayName = "EllipsisHorizontalIcon";

export { EllipsisHorizontalIcon };
