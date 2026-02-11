"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface PaperAirplaneIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PaperAirplaneIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AIRPLANE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    x: 0,
  },
  animate: {
    scale: [1, 0.8, 1, 1, 1],
    x: [0, "-10%", "125%", "-150%", 0],
    transition: {
      default: { ease: "easeInOut", duration: 1.2 },
      x: {
        ease: "easeInOut",
        duration: 1.2,
        times: [0, 0.25, 0.5, 0.5, 1],
      },
    },
  },
};

const PaperAirplaneIcon = forwardRef<
  PaperAirplaneIconHandle,
  PaperAirplaneIconProps
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
        <motion.g
          animate={controls}
          initial="normal"
          variants={AIRPLANE_VARIANTS}
        >
          <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </motion.g>
      </svg>
    </div>
  );
});

PaperAirplaneIcon.displayName = "PaperAirplaneIcon";

export { PaperAirplaneIcon };
