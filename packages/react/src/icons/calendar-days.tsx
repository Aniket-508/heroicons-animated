"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "../lib/utils";

export interface CalendarDaysIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CalendarDaysIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DOT_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  animate: (custom: number) => ({
    opacity: [1, 0.3, 1],
    transition: {
      delay: custom * 0.1,
      duration: 0.4,
      times: [0, 0.5, 1],
    },
  }),
};

const DOTS = [
  { d: "M12 12.75h.008v.008H12v-.008Z", index: 0 },
  { d: "M14.25 12.75h.008v.008h-.008v-.008Z", index: 1 },
  { d: "M16.5 12.75h.008v.008H16.5v-.008Z", index: 2 },
  { d: "M7.5 15h.008v.008H7.5V15Z", index: 3 },
  { d: "M9.75 15h.008v.008H9.75V15Z", index: 4 },
  { d: "M12 15h.008v.008H12V15Z", index: 5 },
  { d: "M14.25 15h.008v.008h-.008V15Z", index: 6 },
  { d: "M16.5 15h.008v.008H16.5V15Z", index: 7 },
  { d: "M7.5 17.25h.008v.008H7.5v-.008Z", index: 8 },
  { d: "M9.75 17.25h.008v.008H9.75v-.008Z", index: 9 },
  { d: "M12 17.25h.008v.008H12v-.008Z", index: 10 },
  { d: "M14.25 17.25h.008v.008h-.008v-.008Z", index: 11 },
] as const;

const CalendarDaysIcon = forwardRef<
  CalendarDaysIconHandle,
  CalendarDaysIconProps
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
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        {DOTS.map((dot) => (
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

CalendarDaysIcon.displayName = "CalendarDaysIcon";

export { CalendarDaysIcon };
