import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUpCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUpCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUpCircleIcon = ({ className, size = 28, ...props }: ArrowUpCircleIconProps) => {
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
        <g>
          <path d="m15 11.25-3-3m0 0-3 3m3-3v7.5" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowUpCircleIcon.displayName = "ArrowUpCircleIcon";

export { ArrowUpCircleIcon };
