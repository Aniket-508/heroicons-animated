import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUturnLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUturnLeftIcon = ({ className, size = 28, ...props }: ArrowUturnLeftIconProps) => {
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
        
        <path d="M3 9h12a6 6 0 0 1 0 12h-3" />
        <g>
          <path d="M9 15 3 9m0 0 6-6" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowUturnLeftIcon.displayName = "ArrowUturnLeftIcon";

export { ArrowUturnLeftIcon };
