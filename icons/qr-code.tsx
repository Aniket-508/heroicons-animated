"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface QrCodeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface QrCodeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DOT_VARIANTS: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: (delay: number) => ({
    opacity: [0, 1],
    scale: [0, 1.2, 1],
    transition: {
      delay,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

const QrCodeIcon = forwardRef<QrCodeIconHandle, QrCodeIconProps>(
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
          <path d="M3.75 4.875C3.75 4.25368 4.25368 3.75 4.875 3.75H9.375C9.99632 3.75 10.5 4.25368 10.5 4.875V9.375C10.5 9.99632 9.99632 10.5 9.375 10.5H4.875C4.25368 10.5 3.75 9.99632 3.75 9.375V4.875Z" />
          <path d="M3.75 14.625C3.75 14.0037 4.25368 13.5 4.875 13.5H9.375C9.99632 13.5 10.5 14.0037 10.5 14.625V19.125C10.5 19.7463 9.99632 20.25 9.375 20.25H4.875C4.25368 20.25 3.75 19.7463 3.75 19.125V14.625Z" />
          <path d="M13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75H19.125C19.7463 3.75 20.25 4.25368 20.25 4.875V9.375C20.25 9.99632 19.7463 10.5 19.125 10.5H14.625C14.0037 10.5 13.5 9.99632 13.5 9.375V4.875Z" />
          <motion.path
            animate={controls}
            custom={0}
            d="M6.75 6.75H7.5V7.5H6.75V6.75Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.05}
            d="M6.75 16.5H7.5V17.25H6.75V16.5Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.1}
            d="M16.5 6.75H17.25V7.5H16.5V6.75Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.15}
            d="M13.5 13.5H14.25V14.25H13.5V13.5Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.2}
            d="M13.5 19.5H14.25V20.25H13.5V19.5Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.25}
            d="M19.5 13.5H20.25V14.25H19.5V13.5Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.3}
            d="M19.5 19.5H20.25V20.25H19.5V19.5Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
          <motion.path
            animate={controls}
            custom={0.35}
            d="M16.5 16.5H17.25V17.25H16.5V16.5Z"
            initial="normal"
            variants={DOT_VARIANTS}
          />
        </svg>
      </div>
    );
  }
);

QrCodeIcon.displayName = "QrCodeIcon";

export { QrCodeIcon };
