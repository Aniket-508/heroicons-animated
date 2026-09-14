import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTurnRightDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnRightDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTurnRightDownIcon = ({ className, size = 28, ...props }: ArrowTurnRightDownIconProps) => {
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
        
        <path d="m11.99 16.5 3.75 3.75m0 0 3.75-3.75m-3.75 3.75V3.75H4.49" />
      
      </svg>
    </div>
  );
};

ArrowTurnRightDownIcon.displayName = "ArrowTurnRightDownIcon";

export { ArrowTurnRightDownIcon };
