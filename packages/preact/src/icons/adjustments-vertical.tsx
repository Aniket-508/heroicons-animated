import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface AdjustmentsVerticalIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AdjustmentsVerticalIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AdjustmentsVerticalIcon = ({ className, size = 28, ...props }: AdjustmentsVerticalIconProps) => {
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
          x1="6"
          x2="6"
          y1="3.75"
          y2="13.5"
        />
        <line
          x1="6"
          x2="6"
          y1="16.5"
          y2="20.25"
        />
        <circle
          cx="6"
          cy="15"
          fill="none"
          r="1.5"
        />

        <line
          x1="12"
          x2="12"
          y1="3.75"
          y2="7.5"
        />
        <line
          x1="12"
          x2="12"
          y1="10.5"
          y2="20.25"
        />
        <circle
          cx="12"
          cy="9"
          fill="none"
          r="1.5"
        />

        <line
          x1="18"
          x2="18"
          y1="3.75"
          y2="13.5"
        />
        <line
          x1="18"
          x2="18"
          y1="16.5"
          y2="20.25"
        />
        <circle
          cx="18"
          cy="15"
          fill="none"
          r="1.5"
        />
      
      </svg>
    </div>
  );
};

AdjustmentsVerticalIcon.displayName = "AdjustmentsVerticalIcon";

export { AdjustmentsVerticalIcon };
