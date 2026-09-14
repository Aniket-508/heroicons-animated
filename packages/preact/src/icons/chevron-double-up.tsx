import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronDoubleUpIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronDoubleUpIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronDoubleUpIcon = ({ className, size = 28, ...props }: ChevronDoubleUpIconProps) => {
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
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      
      </svg>
    </div>
  );
};

ChevronDoubleUpIcon.displayName = "ChevronDoubleUpIcon";

export { ChevronDoubleUpIcon };
