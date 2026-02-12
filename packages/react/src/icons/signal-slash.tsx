"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SignalSlashIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SignalSlashIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const VARIANTS: Variants = {
  normal: { x: 0 },
  animate: {
    x: [0, "-7%", "7%", "-7%", "7%", 0],
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const SignalSlashIcon = forwardRef<SignalSlashIconHandle, SignalSlashIconProps>(
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
          variants={VARIANTS}
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m3 3 8.735 8.735m0 0a.374.374 0 1 1 .53.53m-.53-.53.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 0 1 0 5.304m2.121-7.425a6.75 6.75 0 0 1 0 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 0 1-1.06-2.122m-1.061 4.243a6.75 6.75 0 0 1-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12Z" />
        </motion.svg>
      </div>
    );
  }
);

SignalSlashIcon.displayName = "SignalSlashIcon";

export { SignalSlashIcon };
