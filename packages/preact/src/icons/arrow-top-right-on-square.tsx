import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowTopRightOnSquareIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowTopRightOnSquareIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowTopRightOnSquareIcon = ({ className, size = 28, ...props }: ArrowTopRightOnSquareIconProps) => {
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
        
        <path d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5" />
        <path
          d="M7.5 16.5L21 3m0 0h-5.25M21 3v5.25"
        />
      
      </svg>
    </div>
  );
};

ArrowTopRightOnSquareIcon.displayName = "ArrowTopRightOnSquareIcon";

export { ArrowTopRightOnSquareIcon };
