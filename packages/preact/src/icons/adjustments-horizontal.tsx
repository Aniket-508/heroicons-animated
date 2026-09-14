import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface AdjustmentsHorizontalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AdjustmentsHorizontalIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AdjustmentsHorizontalIcon = ({ className, size = 28, ...props }: AdjustmentsHorizontalIconProps) => {
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
        
        <line
          x1="10.5"
          x2="20.25"
          y1="6"
          y2="6"
        />
        <line
          x1="3.75"
          x2="7.5"
          y1="6"
          y2="6"
        />
        <circle
          cx="9"
          cy="6"
          fill="none"
          r="1.5"
        />

        <line
          x1="16.5"
          x2="20.25"
          y1="12"
          y2="12"
        />
        <line
          x1="3.75"
          x2="13.5"
          y1="12"
          y2="12"
        />
        <circle
          cx="15"
          cy="12"
          fill="none"
          r="1.5"
        />

        <line
          x1="10.5"
          x2="20.25"
          y1="18"
          y2="18"
        />
        <line
          x1="3.75"
          x2="7.5"
          y1="18"
          y2="18"
        />
        <circle
          cx="9"
          cy="18"
          fill="none"
          r="1.5"
        />
      
      </svg>
    </div>
  );
};

AdjustmentsHorizontalIcon.displayName = "AdjustmentsHorizontalIcon";

export { AdjustmentsHorizontalIcon };
