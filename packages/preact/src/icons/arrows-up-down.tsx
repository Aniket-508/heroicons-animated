import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowsUpDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsUpDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowsUpDownIcon = ({ className, size = 28, ...props }: ArrowsUpDownIconProps) => {
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
        
        <g>
          <path d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5" />
        </g>
        <g>
          <path d="M21 16.5L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowsUpDownIcon.displayName = "ArrowsUpDownIcon";

export { ArrowsUpDownIcon };
