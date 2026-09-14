import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface BoltIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface BoltIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const BoltIcon = ({ className, size = 28, ...props }: BoltIconProps) => {
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
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        
      </svg>
    </div>
  );
};

BoltIcon.displayName = "BoltIcon";

export { BoltIcon };
