"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface EllipsisVerticalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface EllipsisVerticalIconProps extends HTMLAttributes<HTMLDivElement> {
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

const EllipsisVerticalIcon = forwardRef<
  EllipsisVerticalIconHandle,
  EllipsisVerticalIconProps
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
            d: "M12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75Z",
            index: 0,
          },
          {
            d: "M12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75Z",
            index: 1,
          },
          {
            d: "M12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75Z",
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

EllipsisVerticalIcon.displayName = "EllipsisVerticalIcon";

export { EllipsisVerticalIcon };
