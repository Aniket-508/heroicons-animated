"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BuildingOfficeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BuildingOfficeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const FLOOR_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: (custom: number) => ({
    opacity: [0, 1],
    transition: {
      duration: 0.3,
      ease: "linear",
      delay: 0.1 + custom * 0.15,
    },
  }),
};

const FLOOR_LINES = [
  { path: "M9 12.75h1.5", y: 12.75, index: 0 },
  { path: "M13.5 12.75H15", y: 12.75, index: 0 },
  { path: "M9 9.75h1.5", y: 9.75, index: 1 },
  { path: "M13.5 9.75H15", y: 9.75, index: 1 },
  { path: "M9 6.75h1.5", y: 6.75, index: 2 },
  { path: "M13.5 6.75H15", y: 6.75, index: 2 },
] as const;

const BuildingOfficeIcon = forwardRef<
  BuildingOfficeIconHandle,
  BuildingOfficeIconProps
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
        <path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        {FLOOR_LINES.map((floorLine, index) => {
          return (
            <motion.path
              animate={controls}
              custom={floorLine.index}
              d={floorLine.path}
              initial="normal"
              key={`${floorLine.y}-${index}`}
              variants={FLOOR_VARIANTS}
            />
          );
        })}
      </svg>
    </div>
  );
});

BuildingOfficeIcon.displayName = "BuildingOfficeIcon";

export { BuildingOfficeIcon };
