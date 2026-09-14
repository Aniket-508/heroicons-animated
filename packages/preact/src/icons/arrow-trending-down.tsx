import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTrendingDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTrendingDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTrendingDownIcon = ({ className, size = 28, ...props }: ArrowTrendingDownIconProps) => {
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
          d="M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919"
        />
        <path
          d="M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099"
        />
      
      </svg>
    </div>
  );
};

ArrowTrendingDownIcon.displayName = "ArrowTrendingDownIcon";

export { ArrowTrendingDownIcon };
