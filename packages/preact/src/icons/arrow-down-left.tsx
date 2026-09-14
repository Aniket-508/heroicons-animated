import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface ArrowDownLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface ArrowDownLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ArrowDownLeftIcon = ({ className, size = 28, ...props }: ArrowDownLeftIconProps) => {
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
          d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
        />
      
      </svg>
    </div>
  );
};

ArrowDownLeftIcon.displayName = "ArrowDownLeftIcon";

export { ArrowDownLeftIcon };
