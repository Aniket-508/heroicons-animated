import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ChevronDoubleLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ChevronDoubleLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ChevronDoubleLeftIcon = ({ className, size = 28, ...props }: ChevronDoubleLeftIconProps) => {
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
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
        />
      
      </svg>
    </div>
  );
};

ChevronDoubleLeftIcon.displayName = "ChevronDoubleLeftIcon";

export { ChevronDoubleLeftIcon };
