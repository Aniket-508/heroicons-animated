"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface QueueListIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface QueueListIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ITEM_DURATION = 0.2;
const INITIAL_DELAY = 0.1;
const STAGGER_DELAY = 0.15;

const CREATE_ITEM_VARIANTS = (delay: number): Variants => ({
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: ITEM_DURATION,
      ease: "easeOut",
      delay,
    },
  },
});

const LIST_ITEMS = [
  { y: 19.5, path: "M3.75 19.5H20.25" },
  { y: 15.75, path: "M3.75 15.75H20.25" },
  { y: 12, path: "M3.75 12H20.25" },
] as const;

const QueueListIcon = forwardRef<QueueListIconHandle, QueueListIconProps>(
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
          <path d="M5.625 4.5H18.375C19.4105 4.5 20.25 5.33947 20.25 6.375C20.25 7.41053 19.4105 8.25 18.375 8.25H5.625C4.58947 8.25 3.75 7.41053 3.75 6.375C3.75 5.33947 4.58947 4.5 5.625 4.5Z" />
          {LIST_ITEMS.map((item, index) => {
            const delay =
              INITIAL_DELAY + (LIST_ITEMS.length - 1 - index) * STAGGER_DELAY;
            return (
              <motion.path
                animate={controls}
                d={item.path}
                initial="normal"
                key={item.y}
                variants={CREATE_ITEM_VARIANTS(delay)}
              />
            );
          })}
        </svg>
      </div>
    );
  }
);

QueueListIcon.displayName = "QueueListIcon";

export { QueueListIcon };
