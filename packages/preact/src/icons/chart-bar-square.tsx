import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChartBarSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChartBarSquareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChartBarSquareIcon = ({ className, size = 28, ...props }: ChartBarSquareIconProps) => {
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
        
        <path d="M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        <path
          d="M7.5 14.25v2.25"
        />
        <path
          d="M10.5 12v4.5"
        />
        <path
          d="M13.5 9.75v6.75"
        />
        <path
          d="M16.5 7.5v9"
        />
      
      </svg>
    </div>
  );
};

ChartBarSquareIcon.displayName = "ChartBarSquareIcon";

export { ChartBarSquareIcon };
