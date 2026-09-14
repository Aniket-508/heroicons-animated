import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChartPieIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChartPieIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChartPieIcon = ({ className, size = 28, ...props }: ChartPieIconProps) => {
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
        
          <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path
            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
          />
        
      </svg>
    </div>
  );
};

ChartPieIcon.displayName = "ChartPieIcon";

export { ChartPieIcon };
