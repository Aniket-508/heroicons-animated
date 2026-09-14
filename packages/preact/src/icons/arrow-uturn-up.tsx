import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUturnUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUturnUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUturnUpIcon = ({ className, size = 28, ...props }: ArrowUturnUpIconProps) => {
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
        
        <path d="M15 3v12a6 6 0 0 1-12 0v-3" />
        <g>
          <path d="m9 9 6-6m0 0 6 6m-6-6" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowUturnUpIcon.displayName = "ArrowUturnUpIcon";

export { ArrowUturnUpIcon };
