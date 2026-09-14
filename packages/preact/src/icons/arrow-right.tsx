import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowRightIcon = ({ className, size = 28, ...props }: ArrowRightIconProps) => {
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
            d="M13.5 4.5 21 12m0 0-7.5 7.5"
          />
          <path
            d="M21 12H3"
          />
        
      </svg>
    </div>
  );
};

ArrowRightIcon.displayName = "ArrowRightIcon";

export { ArrowRightIcon };
