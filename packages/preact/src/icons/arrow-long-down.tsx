import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowLongDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLongDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowLongDownIcon = ({ className, size = 28, ...props }: ArrowLongDownIconProps) => {
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
          d="M15.75 17.25 12 21m0 0-3.75-3.75"
        />
        <path d="M12 21V3" />
      
      </svg>
    </div>
  );
};

ArrowLongDownIcon.displayName = "ArrowLongDownIcon";

export { ArrowLongDownIcon };
