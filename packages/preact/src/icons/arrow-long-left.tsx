import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowLongLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowLongLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowLongLeftIcon = ({ className, size = 28, ...props }: ArrowLongLeftIconProps) => {
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
          d="M6.75 15.75 3 12m0 0 3.75-3.75"
        />
        <path d="M3 12h18" />
      
      </svg>
    </div>
  );
};

ArrowLongLeftIcon.displayName = "ArrowLongLeftIcon";

export { ArrowLongLeftIcon };
