import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowDownTrayIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownTrayIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowDownTrayIcon = ({ className, size = 28, ...props }: ArrowDownTrayIconProps) => {
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
        
        <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5" />
        <g>
          <path d="M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </g>
      
      </svg>
    </div>
  );
};

ArrowDownTrayIcon.displayName = "ArrowDownTrayIcon";

export { ArrowDownTrayIcon };
