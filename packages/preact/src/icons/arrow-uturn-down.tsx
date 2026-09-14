import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUturnDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUturnDownIcon = ({ className, size = 28, ...props }: ArrowUturnDownIconProps) => {
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
        
        <path d="M9 21V9a6 6 0 0 1 12 0v3" />
        <g>
          <path d="m15 15-6 6m0 0-6-6m6 6" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowUturnDownIcon.displayName = "ArrowUturnDownIcon";

export { ArrowUturnDownIcon };
