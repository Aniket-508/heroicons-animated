import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface BarsArrowDownIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BarsArrowDownIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BarsArrowDownIcon = ({ className, size = 28, ...props }: BarsArrowDownIconProps) => {
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
        
        <path d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75" />
        <path
          d="M17.25 9v12m0 0-3.75-3.75M17.25 21L21 17.25"
        />
      
      </svg>
    </div>
  );
};

BarsArrowDownIcon.displayName = "BarsArrowDownIcon";

export { BarsArrowDownIcon };
