"use client";

import { cn } from "@heroicons-animated/shared";
import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface ListBulletIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ListBulletIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DOT_DURATION = 0.1;
const LINE_DURATION = 0.3;

const CREATE_BULLET_VARIANTS = (delay: number): Variants => ({
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
    transition: {
      duration: DOT_DURATION,
      ease: "easeInOut",
      delay,
    },
  },
});

const CREATE_LINE_VARIANTS = (delay: number): Variants => ({
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    transition: {
      pathLength: { duration: LINE_DURATION, ease: "easeInOut", delay },
      opacity: { duration: LINE_DURATION, ease: "easeInOut", delay },
    },
  },
});

const LIST_ITEMS = [
  {
    y: 6.75,
    bulletPath:
      "M3.75 6.75H3.7575V6.7575H3.75V6.75ZM4.125 6.75C4.125 6.95711 3.95711 7.125 3.75 7.125C3.54289 7.125 3.375 6.95711 3.375 6.75C3.375 6.54289 3.54289 6.375 3.75 6.375C3.95711 6.375 4.125 6.54289 4.125 6.75Z",
    linePath: "M8.25 6.75H20.25",
  },
  {
    y: 12,
    bulletPath:
      "M3.75 12H3.7575V12.0075H3.75V12ZM4.125 12C4.125 12.2071 3.95711 12.375 3.75 12.375C3.54289 12.375 3.375 12.2071 3.375 12C3.375 11.7929 3.54289 11.625 3.75 11.625C3.95711 11.625 4.125 11.7929 4.125 12Z",
    linePath: "M8.25 12H20.25",
  },
  {
    y: 17.25,
    bulletPath:
      "M3.75 17.25H3.7575V17.2575H3.75V17.25ZM4.125 17.25C4.125 17.4571 3.95711 17.625 3.75 17.625C3.54289 17.625 3.375 17.4571 3.375 17.25C3.375 17.0429 3.54289 16.875 3.75 16.875C3.95711 16.875 4.125 17.0429 4.125 17.25Z",
    linePath: "M8.25 17.25H20.25",
  },
] as const;

const ListBulletIcon = forwardRef<ListBulletIconHandle, ListBulletIconProps>(
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
          {LIST_ITEMS.map((item, index) => {
            const bulletDelay = index * (DOT_DURATION + LINE_DURATION);
            const lineDelay = bulletDelay + DOT_DURATION;

            return (
              <g key={item.y}>
                <motion.path
                  animate={controls}
                  d={item.bulletPath}
                  initial="normal"
                  variants={CREATE_BULLET_VARIANTS(bulletDelay)}
                />
                <motion.path
                  animate={controls}
                  d={item.linePath}
                  initial="normal"
                  variants={CREATE_LINE_VARIANTS(lineDelay)}
                />
              </g>
            );
          })}
        </svg>
      </div>
    );
  }
);

ListBulletIcon.displayName = "ListBulletIcon";

export { ListBulletIcon };
