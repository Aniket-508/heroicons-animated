import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUturnRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUturnRightIcon = ({ className, size = 28, ...props }: ArrowUturnRightIconProps) => {
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
        
        <path d="M21 9H9a6 6 0 0 0 0 12h3" />
        <g>
          <path d="m15 15 6-6m0 0-6-6m6 6" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowUturnRightIcon.displayName = "ArrowUturnRightIcon";

export { ArrowUturnRightIcon };
