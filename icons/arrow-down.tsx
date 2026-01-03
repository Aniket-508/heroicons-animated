"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface HeroiconsArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface HeroiconsArrowDownIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ARROW_HEAD_VARIANTS: Variants = {
  normal: { translateY: 0 },
  animate: {
    translateY: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const LINE_VARIANTS: Variants = {
  normal: { d: "M12 21V3" },
  animate: {
    d: ["M12 21V3", "M12 21V9", "M12 21V3"],
    transition: {
      duration: 0.4,
    },
  },
};

const HeroiconsArrowDownIcon = forwardRef<
  HeroiconsArrowDownIconHandle,
  HeroiconsArrowDownIconProps
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
        <motion.g animate={controls} variants={ARROW_HEAD_VARIANTS}>
          <path d="M19.5 13.5 12 21m0 0-7.5-7.5" />
        </motion.g>
        <motion.path animate={controls} d="M12 21V3" variants={LINE_VARIANTS} />
      </svg>
    </div>
  );
});

HeroiconsArrowDownIcon.displayName = "HeroiconsArrowDownIcon";

export { HeroiconsArrowDownIcon };
