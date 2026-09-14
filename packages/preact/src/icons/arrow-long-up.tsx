import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowLongUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLongUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowLongUpIcon = ({ className, size = 28, ...props }: ArrowLongUpIconProps) => {
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
            d="M8.25 6.75 12 3m0 0 3.75 3.75"
          />
          <path
            d="M12 3v18"
          />
        
      </svg>
    </div>
  );
};

ArrowLongUpIcon.displayName = "ArrowLongUpIcon";

export { ArrowLongUpIcon };
