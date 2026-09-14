import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowsRightLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowsRightLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowsRightLeftIcon = ({ className, size = 28, ...props }: ArrowsRightLeftIconProps) => {
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
          <path d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5" />
        </g>
        <g>
          <path d="M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowsRightLeftIcon.displayName = "ArrowsRightLeftIcon";

export { ArrowsRightLeftIcon };
