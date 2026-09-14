import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTurnRightUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnRightUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTurnRightUpIcon = ({ className, size = 28, ...props }: ArrowTurnRightUpIconProps) => {
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
        
        <path d="m11.99 7.5 3.75-3.75m0 0 3.75 3.75m-3.75-3.75v16.499H4.49" />
      
      </svg>
    </div>
  );
};

ArrowTurnRightUpIcon.displayName = "ArrowTurnRightUpIcon";

export { ArrowTurnRightUpIcon };
