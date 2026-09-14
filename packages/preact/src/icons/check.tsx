import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CheckIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CheckIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CheckIcon = ({ className, size = 28, ...props }: CheckIconProps) => {
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
            d="m4.5 12.75 6 6 9-13.5"
          />
        
      </svg>
    </div>
  );
};

CheckIcon.displayName = "CheckIcon";

export { CheckIcon };
