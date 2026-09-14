import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronDoubleRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronDoubleRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronDoubleRightIcon = ({ className, size = 28, ...props }: ChevronDoubleRightIconProps) => {
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
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
        />
      
      </svg>
    </div>
  );
};

ChevronDoubleRightIcon.displayName = "ChevronDoubleRightIcon";

export { ChevronDoubleRightIcon };
