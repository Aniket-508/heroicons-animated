import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowLeftIcon = ({ className, size = 28, ...props }: ArrowLeftIconProps) => {
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
            d="M10.5 19.5 3 12m0 0 7.5-7.5"
          />
          <path
            d="M3 12h18"
          />
        
      </svg>
    </div>
  );
};

ArrowLeftIcon.displayName = "ArrowLeftIcon";

export { ArrowLeftIcon };
