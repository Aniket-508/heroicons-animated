import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface BarsArrowUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BarsArrowUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BarsArrowUpIcon = ({ className, size = 28, ...props }: BarsArrowUpIconProps) => {
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
        
          <path d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25" />
          <path
            d="M13.5 12.75L17.25 9L21 12.75M17.25 9v12"
          />
        
      </svg>
    </div>
  );
};

BarsArrowUpIcon.displayName = "BarsArrowUpIcon";

export { BarsArrowUpIcon };
