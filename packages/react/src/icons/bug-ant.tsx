"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface BugAntIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BugAntIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const SVG_VARIANTS: Variants = {
  normal: { x: 0, rotate: 0 },
  animate: {
    x: [0, -1, 1, -1, 1, 0],
    rotate: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const BugAntIcon = forwardRef<BugAntIconHandle, BugAntIconProps>(
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
          variants={SVG_VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.9997 12.75C13.1482 12.75 14.2778 12.8307 15.3833 12.9867C16.4196 13.1329 17.2493 13.9534 17.2493 15C17.2493 18.7279 14.8988 21.75 11.9993 21.75C9.09977 21.75 6.74927 18.7279 6.74927 15C6.74927 13.9535 7.57879 13.1331 8.61502 12.9868C9.72081 12.8307 10.8508 12.75 11.9997 12.75Z" />
          <path d="M11.9997 12.75C14.8825 12.75 17.6469 13.2583 20.2075 14.1901C20.083 16.2945 19.6873 18.3259 19.0549 20.25M11.9997 12.75C9.11689 12.75 6.35312 13.2583 3.79248 14.1901C3.91702 16.2945 4.31272 18.3259 4.94512 20.25" />
          <path d="M11.9997 12.75C13.2423 12.75 14.2498 11.7426 14.2498 10.5C14.2498 10.4652 14.249 10.4306 14.2475 10.3961M11.9997 12.75C10.757 12.75 9.74979 11.7426 9.74979 10.5C9.74979 10.4652 9.75058 10.4306 9.75214 10.3961" />
          <path d="M12.0002 8.25C12.995 8.25 13.971 8.16929 14.922 8.01406C15.3246 7.94835 15.6628 7.65623 15.7168 7.25196C15.7388 7.08776 15.7502 6.92021 15.7502 6.75C15.7502 6.11844 15.594 5.52335 15.3183 5.00121M12.0002 8.25C11.0053 8.25 10.0293 8.16929 9.0783 8.01406C8.67576 7.94835 8.33754 7.65623 8.28346 7.25196C8.26149 7.08777 8.25015 6.92021 8.25015 6.75C8.25015 6.1175 8.40675 5.52157 8.68327 4.99887" />
          <path d="M12.0002 8.25C10.7923 8.25 9.80641 9.20171 9.75214 10.3961M12.0002 8.25C13.208 8.25 14.1932 9.20171 14.2475 10.3961" />
          <path d="M8.68327 4.99887C8.25654 4.71496 7.86824 4.37787 7.52783 3.99707C7.59799 3.36615 7.7986 2.7746 8.10206 2.25M8.68327 4.99887C9.31221 3.81004 10.5616 3 12.0002 3C13.4397 3 14.6897 3.8111 15.3183 5.00121M15.3183 5.00121C15.7445 4.71804 16.1325 4.38184 16.4728 4.00201C16.4031 3.36924 16.2023 2.77597 15.898 2.25" />
          <path d="M4.92097 6C4.71594 7.08086 4.58339 8.18738 4.52856 9.3143C6.19671 9.86025 7.94538 10.2283 9.75214 10.3961M19.0786 6C19.2836 7.08086 19.4162 8.18738 19.471 9.3143C17.8029 9.86024 16.0542 10.2283 14.2475 10.3961" />
        </motion.svg>
      </div>
    );
  }
);

BugAntIcon.displayName = "BugAntIcon";

export { BugAntIcon };
