import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface NoSymbolIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface NoSymbolIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const NoSymbolIcon = ({ className, size = 28, ...props }: NoSymbolIconProps) => {
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
        
          <g
          >
            <path d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636" />
          </g>
          <path
            d="M18.364 18.364L5.636 5.636"
          />
        
      </svg>
    </div>
  );
};

NoSymbolIcon.displayName = "NoSymbolIcon";

export { NoSymbolIcon };
