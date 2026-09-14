import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ClockIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ClockIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ClockIcon = ({ className, size = 28, ...props }: ClockIconProps) => {
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
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        
      </svg>
    </div>
  );
};

ClockIcon.displayName = "ClockIcon";

export { ClockIcon };
