import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTrendingUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTrendingUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTrendingUpIcon = ({ className, size = 28, ...props }: ArrowTrendingUpIconProps) => {
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
          d="M2.25 18L9 11.25L13.3064 15.5564C14.5101 13.188 16.5042 11.2022 19.1203 10.0375L21.8609 8.81726"
        />
        <path
          d="M21.8609 8.81726L15.9196 6.53662M21.8609 8.81726L19.5802 14.7585"
        />
      
      </svg>
    </div>
  );
};

ArrowTrendingUpIcon.displayName = "ArrowTrendingUpIcon";

export { ArrowTrendingUpIcon };
