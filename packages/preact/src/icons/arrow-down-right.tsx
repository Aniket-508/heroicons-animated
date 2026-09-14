import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowDownRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowDownRightIcon = ({ className, size = 28, ...props }: ArrowDownRightIconProps) => {
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
          d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
        />
      
      </svg>
    </div>
  );
};

ArrowDownRightIcon.displayName = "ArrowDownRightIcon";

export { ArrowDownRightIcon };
