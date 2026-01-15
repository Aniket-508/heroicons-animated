"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface CursorArrowRippleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CursorArrowRippleIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CURSOR_VARIANTS: Variants = {
  normal: { x: 0, y: 0 },
  animate: {
    x: [0, 0, -3, 0],
    y: [0, -4, 0, 0],
    transition: {
      duration: 1,
      bounce: 0.3,
    },
  },
};

const RIPPLE_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  ripple: (custom: number) => ({
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      delay: 1 + custom * 0.3, // Start after cursor animation (1s) + stagger
      ease: "easeOut",
    },
  }),
};

const CursorArrowRippleIcon = forwardRef<
  CursorArrowRippleIconHandle,
  CursorArrowRippleIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const cursorControls = useAnimation();
  const rippleControls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => {
        cursorControls.start("animate");
        rippleControls.start("ripple");
      },
      stopAnimation: () => {
        cursorControls.start("normal");
        rippleControls.start("normal");
      },
    };
  });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        cursorControls.start("animate");
        rippleControls.start("ripple");
      }
    },
    [cursorControls, rippleControls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e);
      } else {
        cursorControls.start("normal");
        rippleControls.start("normal");
      }
    },
    [cursorControls, rippleControls, onMouseLeave]
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
          animate={cursorControls}
          d="M15.0423 21.6718L13.6835 16.6007M13.6835 16.6007L11.1741 18.826L11.7425 9.35623L16.9697 17.2731L13.6835 16.6007Z"
          initial="normal"
          variants={CURSOR_VARIANTS}
        />
        <motion.path
          animate={rippleControls}
          custom={1}
          d="M6.16637 16.3336C2.94454 13.1118 2.94454 7.88819 6.16637 4.66637C9.38819 1.44454 14.6118 1.44454 17.8336 4.66637C19.4445 6.27724 20.25 8.38854 20.25 10.4999"
          initial="normal"
          variants={RIPPLE_VARIANTS}
        />
        <motion.path
          animate={rippleControls}
          custom={0}
          d="M8.28769 14.2123C6.23744 12.1621 6.23744 8.83794 8.28769 6.78769C10.3379 4.73744 13.6621 4.73744 15.7123 6.78769C16.7374 7.8128 17.25 9.15637 17.25 10.4999"
          initial="normal"
          variants={RIPPLE_VARIANTS}
        />
      </svg>
    </div>
  );
});

CursorArrowRippleIcon.displayName = "CursorArrowRippleIcon";

export { CursorArrowRippleIcon };
