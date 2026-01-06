"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface CursorArrowRaysIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CursorArrowRaysIconProps extends HTMLAttributes<HTMLDivElement> {
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

const RAY_VARIANTS: Variants = {
  normal: { opacity: 1, x: 0, y: 0 },
  spread: (custom: { x: number; y: number }) => ({
    opacity: [0, 1, 0, 0, 0, 0, 1],
    x: [0, custom.x, 0, 0],
    y: [0, custom.y, 0, 0],
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
      mass: 0.4,
    },
  }),
};

const CursorArrowRaysIcon = forwardRef<
  CursorArrowRaysIconHandle,
  CursorArrowRaysIconProps
>(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
  const cursorControls = useAnimation();
  const rayControls = useAnimation();
  const isControlledRef = useRef(false);

  useImperativeHandle(ref, () => {
    isControlledRef.current = true;

    return {
      startAnimation: () => {
        cursorControls.start("animate");
        rayControls.start("spread", { delay: 1.3 });
      },
      stopAnimation: () => {
        cursorControls.start("normal");
        rayControls.start("normal");
      },
    };
  });

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseEnter?.(e);
      } else {
        cursorControls.start("animate");
        rayControls.start("spread", { delay: 1.3 });
      }
    },
    [cursorControls, rayControls, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isControlledRef.current) {
        onMouseLeave?.(e);
      } else {
        cursorControls.start("normal");
        rayControls.start("normal");
      }
    },
    [cursorControls, rayControls, onMouseLeave]
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
          animate={rayControls}
          custom={{ x: 0, y: -2 }}
          d="M12 2.25V4.5"
          initial="normal"
          variants={RAY_VARIANTS}
        />
        <motion.path
          animate={rayControls}
          custom={{ x: 2, y: -2 }}
          d="M17.8336 4.66637L16.2426 6.25736"
          initial="normal"
          variants={RAY_VARIANTS}
        />
        <motion.path
          animate={rayControls}
          custom={{ x: 2, y: 0 }}
          d="M20.25 10.5H18"
          initial="normal"
          variants={RAY_VARIANTS}
        />
        <motion.path
          animate={rayControls}
          custom={{ x: -2, y: 2 }}
          d="M7.75736 14.7426L6.16637 16.3336"
          initial="normal"
          variants={RAY_VARIANTS}
        />
        <motion.path
          animate={rayControls}
          custom={{ x: -2, y: 0 }}
          d="M6 10.5H3.75"
          initial="normal"
          variants={RAY_VARIANTS}
        />
        <motion.path
          animate={rayControls}
          custom={{ x: -2, y: -2 }}
          d="M7.75736 6.25736L6.16637 4.66637"
          initial="normal"
          variants={RAY_VARIANTS}
        />
      </svg>
    </div>
  );
});

CursorArrowRaysIcon.displayName = "CursorArrowRaysIcon";

export { CursorArrowRaysIcon };
