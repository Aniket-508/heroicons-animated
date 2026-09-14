import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUpTrayIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUpTrayIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUpTrayIcon = ({ className, size = 28, ...props }: ArrowUpTrayIconProps) => {
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
            <path d="M7.5 7.5L12 3m0 0 4.5 4.5M12 3v13.5" />
          </g>
        
      </svg>
    </div>
  );
};

ArrowUpTrayIcon.displayName = "ArrowUpTrayIcon";

export { ArrowUpTrayIcon };
