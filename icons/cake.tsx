"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface CakeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CakeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CAKE_BODY_VARIANTS: Variants = {
  normal: {
    translateY: 0,
    opacity: 1,
  },
  animate: {
    translateY: [8, -1, 0],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const CANDLE_VARIANTS: Variants = {
  normal: {
    scaleY: 1,
    opacity: 1,
  },
  animate: {
    scaleY: [0, 1.2, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const FLAME_LEFT_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.5,
    },
  },
};

const FLAME_MIDDLE_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.65,
    },
  },
};

const FLAME_RIGHT_VARIANTS: Variants = {
  normal: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: [0, 1.3, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.25,
      ease: "easeOut",
      delay: 0.8,
    },
  },
};

const CakeIcon = forwardRef<CakeIconHandle, CakeIconProps>(
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
          {/* Cake body - frosting and base */}
          <motion.path
            animate={controls}
            d="M12 8.25c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m3 3.879-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12"
            initial="normal"
            style={{ originY: 1 }}
            variants={CAKE_BODY_VARIANTS}
          />
          {/* Candles */}
          <motion.g
            animate={controls}
            initial="normal"
            style={{ originY: 1 }}
            variants={CANDLE_VARIANTS}
          >
            <path d="M9 8.25v-1.5" />
            <path d="M12 8.25v-1.5" />
            <path d="M15 8.25v-1.5" />
          </motion.g>
          {/* Left flame */}
          <motion.path
            animate={controls}
            d="M9.265 3.11a.375.375 0 1 1-.53 0L9 2.845l.265.265Z"
            initial="normal"
            style={{ originX: 0.375, originY: 0.5 }}
            variants={FLAME_LEFT_VARIANTS}
          />
          {/* Middle flame */}
          <motion.path
            animate={controls}
            d="M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z"
            initial="normal"
            style={{ originX: 0.5, originY: 0.5 }}
            variants={FLAME_MIDDLE_VARIANTS}
          />
          {/* Right flame */}
          <motion.path
            animate={controls}
            d="M15.265 3.11a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
            initial="normal"
            style={{ originX: 0.625, originY: 0.5 }}
            variants={FLAME_RIGHT_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

CakeIcon.displayName = "CakeIcon";

export { CakeIcon };
