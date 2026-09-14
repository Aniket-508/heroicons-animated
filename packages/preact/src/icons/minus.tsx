import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MinusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MinusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MinusIcon = ({ className, size = 28, ...props }: MinusIconProps) => {
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
            d="M5 12h14"
          />
        
      </svg>
    </div>
  );
};

MinusIcon.displayName = "MinusIcon";

export { MinusIcon };
