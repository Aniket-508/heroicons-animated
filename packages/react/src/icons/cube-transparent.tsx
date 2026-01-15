"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface CubeTransparentIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CubeTransparentIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CUBE_VARIANTS: Variants = {
  normal: {
    rotateY: 0,
  },
  animate: {
    rotateY: [0, 20, -20, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const CubeTransparentIcon = forwardRef<
  CubeTransparentIconHandle,
  CubeTransparentIconProps
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
      <motion.svg
        animate={controls}
        fill="none"
        height={size}
        initial="normal"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        style={{ originX: "50%", originY: "50%" }}
        variants={CUBE_VARIANTS}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 7.5L18.75 6.1875M21 7.5V9.75M21 7.5L18.75 8.8125M3 7.5L5.25 6.1875M3 7.5L5.25 8.8125M3 7.5V9.75M12 12.75L14.25 11.4375M12 12.75L9.75 11.4375M12 12.75V15M12 21.75L14.25 20.4375M12 21.75V19.5M12 21.75L9.75 20.4375M9.75 3.5625L12 2.25L14.25 3.5625M21 14.25V16.5L18.75 17.8125M5.25 17.8125L3 16.5V14.25" />
      </motion.svg>
    </div>
  );
});

CubeTransparentIcon.displayName = "CubeTransparentIcon";

export { CubeTransparentIcon };
