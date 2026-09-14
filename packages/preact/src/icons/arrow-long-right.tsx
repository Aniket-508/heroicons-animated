import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowLongRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLongRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowLongRightIcon = ({ className, size = 28, ...props }: ArrowLongRightIconProps) => {
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
        
        <path
          d="M17.25 8.25 21 12m0 0-3.75 3.75"
        />
        <path d="M21 12H3" />
      
      </svg>
    </div>
  );
};

ArrowLongRightIcon.displayName = "ArrowLongRightIcon";

export { ArrowLongRightIcon };
