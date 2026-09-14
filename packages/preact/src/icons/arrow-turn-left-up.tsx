import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTurnLeftUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnLeftUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTurnLeftUpIcon = ({ className, size = 28, ...props }: ArrowTurnLeftUpIconProps) => {
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
        
        <path d="M11.99 7.5 8.24 3.75m0 0L4.49 7.5m3.75-3.75v16.499h11.25" />
      
      </svg>
    </div>
  );
};

ArrowTurnLeftUpIcon.displayName = "ArrowTurnLeftUpIcon";

export { ArrowTurnLeftUpIcon };
