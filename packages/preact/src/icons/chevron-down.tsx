import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronDownIcon = ({ className, size = 28, ...props }: ChevronDownIconProps) => {
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
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        
      </svg>
    </div>
  );
};

ChevronDownIcon.displayName = "ChevronDownIcon";

export { ChevronDownIcon };
