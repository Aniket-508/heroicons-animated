"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ChatBubbleOvalLeftEllipsisIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChatBubbleOvalLeftEllipsisIconProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DOT_VARIANTS: Variants = {
  normal: {
    opacity: 1,
  },
  animate: (custom: number) => ({
    opacity: [1, 0, 0, 1, 1, 0, 0, 1],
    transition: {
      opacity: {
        times: [
          0,
          0.1,
          0.1 + custom * 0.1,
          0.1 + custom * 0.1 + 0.1,
          0.5,
          0.6,
          0.6 + custom * 0.1,
          0.6 + custom * 0.1 + 0.1,
        ],
        duration: 1.5,
      },
    },
  }),
};

const ChatBubbleOvalLeftEllipsisIcon = forwardRef<
  ChatBubbleOvalLeftEllipsisIconHandle,
  ChatBubbleOvalLeftEllipsisIconProps
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
        {[
          {
            d: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0",
            index: 0,
          },
          {
            d: "M12.75 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0",
            index: 1,
          },
          {
            d: "M16.875 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0",
            index: 2,
          },
        ].map((dot) => (
          <motion.path
            animate={controls}
            custom={dot.index}
            d={dot.d}
            key={dot.index}
            variants={DOT_VARIANTS}
          />
        ))}
        <path d="M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    </div>
  );
});

ChatBubbleOvalLeftEllipsisIcon.displayName = "ChatBubbleOvalLeftEllipsisIcon";

export { ChatBubbleOvalLeftEllipsisIcon };
