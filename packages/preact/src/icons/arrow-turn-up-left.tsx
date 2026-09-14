import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTurnUpLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTurnUpLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTurnUpLeftIcon = ({ className, size = 28, ...props }: ArrowTurnUpLeftIconProps) => {
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
        
        <path d="M7.49 12 3.74 8.248m0 0 3.75-3.75m-3.75 3.75h16.5V19.5" />
      
      </svg>
    </div>
  );
};

ArrowTurnUpLeftIcon.displayName = "ArrowTurnUpLeftIcon";

export { ArrowTurnUpLeftIcon };
