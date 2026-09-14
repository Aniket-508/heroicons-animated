import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowDownOnSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownOnSquareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowDownOnSquareIcon = ({ className, size = 28, ...props }: ArrowDownOnSquareIconProps) => {
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
          d="M9 12l3 3m0 0 3-3m-3 3V2.25"
        />
      
      </svg>
    </div>
  );
};

ArrowDownOnSquareIcon.displayName = "ArrowDownOnSquareIcon";

export { ArrowDownOnSquareIcon };
