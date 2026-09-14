import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowUpOnSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowUpOnSquareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowUpOnSquareIcon = ({ className, size = 28, ...props }: ArrowUpOnSquareIconProps) => {
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
        
        <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15" />
        <path
          d="M15 5.25l-3-3m0 0-3 3m3-3V15"
        />
      
      </svg>
    </div>
  );
};

ArrowUpOnSquareIcon.displayName = "ArrowUpOnSquareIcon";

export { ArrowUpOnSquareIcon };
