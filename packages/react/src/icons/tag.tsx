"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface TagIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface TagIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const TAG_VARIANTS: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    rotate: [0, -10, 8, -5, 3, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const TagIcon = forwardRef<TagIconHandle, TagIconProps>(
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
          style={{ originX: "25%", originY: "25%" }}
          variants={TAG_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.56802 3H5.25C4.00736 3 3 4.00736 3 5.25V9.56802C3 10.1648 3.23705 10.7371 3.65901 11.159L13.2401 20.7401C13.9388 21.4388 15.0199 21.6117 15.8465 21.0705C17.9271 19.7084 19.7084 17.9271 21.0705 15.8465C21.6117 15.0199 21.4388 13.9388 20.7401 13.2401L11.159 3.65901C10.7371 3.23705 10.1648 3 9.56802 3Z" />
          <path d="M6 6H6.0075V6.0075H6V6Z" />
        </motion.svg>
      </div>
    );
  }
);

TagIcon.displayName = "TagIcon";

export { TagIcon };
