import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronUpDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronUpDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronUpDownIcon = ({ className, size = 28, ...props }: ChevronUpDownIconProps) => {
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
          d="M8.25 9 12 5.25 15.75 9"
        />
        <path
          d="M8.25 15 12 18.75 15.75 15"
        />
      
      </svg>
    </div>
  );
};

ChevronUpDownIcon.displayName = "ChevronUpDownIcon";

export { ChevronUpDownIcon };
