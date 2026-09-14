import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PresentationChartBarIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PresentationChartBarIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PresentationChartBarIcon = ({ className, size = 28, ...props }: PresentationChartBarIconProps) => {
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
        
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
        <path
          d="M9 11.25v1.5"
        />
        <path
          d="M12 9v3.75"
        />
        <path
          d="M15 6.75v6"
        />
      
      </svg>
    </div>
  );
};

PresentationChartBarIcon.displayName = "PresentationChartBarIcon";

export { PresentationChartBarIcon };
