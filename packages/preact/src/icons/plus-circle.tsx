import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PlusCircleIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlusCircleIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PlusCircleIcon = ({ className, size = 28, ...props }: PlusCircleIconProps) => {
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
        
          <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
          <path
            d="M12 9v6"
          />
          <path
            d="M9 12h6"
          />
        
      </svg>
    </div>
  );
};

PlusCircleIcon.displayName = "PlusCircleIcon";

export { PlusCircleIcon };
