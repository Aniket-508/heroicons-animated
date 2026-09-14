import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface StopCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface StopCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const StopCircleIcon = ({ className, size = 28, ...props }: StopCircleIconProps) => {
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
          <path d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 0 1 9 14.437V9.564Z" />
        
      </svg>
    </div>
  );
};

StopCircleIcon.displayName = "StopCircleIcon";

export { StopCircleIcon };
