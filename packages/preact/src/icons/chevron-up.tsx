import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronUpIcon = ({ className, size = 28, ...props }: ChevronUpIconProps) => {
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
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        
      </svg>
    </div>
  );
};

ChevronUpIcon.displayName = "ChevronUpIcon";

export { ChevronUpIcon };
