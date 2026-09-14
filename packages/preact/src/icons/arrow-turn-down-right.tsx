import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTurnDownRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnDownRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTurnDownRightIcon = ({ className, size = 28, ...props }: ArrowTurnDownRightIconProps) => {
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
        
        <path d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
      
      </svg>
    </div>
  );
};

ArrowTurnDownRightIcon.displayName = "ArrowTurnDownRightIcon";

export { ArrowTurnDownRightIcon };
