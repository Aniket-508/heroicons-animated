"use client";

import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface WifiIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface WifiIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const WIFI_LEVELS = [
  {
    d: "M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0",
    delay: 0,
  },
  { d: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0", delay: 0.1 },
  {
    d: "M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0",
    delay: 0.2,
  },
  {
    d: "M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0",
    delay: 0.3,
  },
];

const WifiIcon = forwardRef<WifiIconHandle, WifiIconProps>(
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
          {WIFI_LEVELS.map((level, index) => (
            <motion.path
              animate={controls}
              d={level.d}
              initial="normal"
              key={index}
              variants={{
                normal: {
                  opacity: 1,
                },
                animate: {
                  opacity: index === 0 ? 1 : [1, 0, 1],
                  transition: {
                    duration: 0.6,
                    times: [0, 0.3, 1],
                    ease: "easeInOut",
                    delay: level.delay,
                  },
                },
              }}
            />
          ))}
        </svg>
      </div>
    );
  }
);

WifiIcon.displayName = "WifiIcon";

export { WifiIcon };
