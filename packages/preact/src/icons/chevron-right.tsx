import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronRightIcon = ({ className, size = 28, ...props }: ChevronRightIconProps) => {
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
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      
      </svg>
    </div>
  );
};

ChevronRightIcon.displayName = "ChevronRightIcon";

export { ChevronRightIcon };
