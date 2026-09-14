import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowsPointingOutIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsPointingOutIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowsPointingOutIcon = ({ className, size = 28, ...props }: ArrowsPointingOutIconProps) => {
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
          <path d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9" />
        </g>
        <g>
          <path d="M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15" />
        </g>
        <g>
          <path d="M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9" />
        </g>
        <g>
          <path d="M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowsPointingOutIcon.displayName = "ArrowsPointingOutIcon";

export { ArrowsPointingOutIcon };
