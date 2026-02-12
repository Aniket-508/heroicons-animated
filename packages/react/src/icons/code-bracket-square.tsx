"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface CodeBracketSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CodeBracketSquareIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CODE_VARIANTS: Variants = {
  normal: { x: 0, rotate: 0, opacity: 1 },
  animate: (direction: number) => ({
    x: [0, direction * 1.5, 0],
    rotate: [0, direction * -6, 0],
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const CodeBracketSquareIcon = forwardRef<
  CodeBracketSquareIconHandle,
  CodeBracketSquareIconProps
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
        <path d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        <motion.path
          animate={controls}
          custom={-1}
          d="M9.75 9.75L7.5 12l2.25 2.25"
          initial="normal"
          variants={CODE_VARIANTS}
        />
        <motion.path
          animate={controls}
          custom={1}
          d="M14.25 9.75 16.5 12l-2.25 2.25"
          initial="normal"
          variants={CODE_VARIANTS}
        />
      </svg>
    </div>
  );
});

CodeBracketSquareIcon.displayName = "CodeBracketSquareIcon";

export { CodeBracketSquareIcon };
