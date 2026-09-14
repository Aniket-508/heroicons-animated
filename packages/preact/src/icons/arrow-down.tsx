import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowDownIcon = ({ className, size = 28, ...props }: ArrowDownIconProps) => {
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
            d="M19.5 13.5 12 21m0 0-7.5-7.5"
          />
          <path
            d="M12 21V3"
          />
        
      </svg>
    </div>
  );
};

ArrowDownIcon.displayName = "ArrowDownIcon";

export { ArrowDownIcon };
