import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MinusCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MinusCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MinusCircleIcon = ({ className, size = 28, ...props }: MinusCircleIconProps) => {
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
        
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
          <path
            d="M15 12H9"
          />
        
      </svg>
    </div>
  );
};

MinusCircleIcon.displayName = "MinusCircleIcon";

export { MinusCircleIcon };
