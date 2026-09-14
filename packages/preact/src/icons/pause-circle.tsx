import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PauseCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PauseCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PauseCircleIcon = ({ className, size = 28, ...props }: PauseCircleIconProps) => {
  return (
    <div
      className={cn("heroicon-animated heroicon-animate-scale", className)}
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
        
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path
            d="M9.75 9v6"
          />
          <path
            d="M14.25 9v6"
          />
        
      </svg>
    </div>
  );
};

PauseCircleIcon.displayName = "PauseCircleIcon";

export { PauseCircleIcon };
