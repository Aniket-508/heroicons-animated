import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface XCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface XCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const XCircleIcon = ({ className, size = 28, ...props }: XCircleIconProps) => {
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
        
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          <path
            d="m9.75 9.75 4.5 4.5"
          />
          <path
            d="m14.25 9.75-4.5 4.5"
          />
        
      </svg>
    </div>
  );
};

XCircleIcon.displayName = "XCircleIcon";

export { XCircleIcon };
