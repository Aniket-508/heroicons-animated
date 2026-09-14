import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface Bars3BottomLeftIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Bars3BottomLeftIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Bars3BottomLeftIcon = ({ className, size = 28, ...props }: Bars3BottomLeftIconProps) => {
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
          d="M3.75 6.75h16.5"
        />
        <path
          d="M3.75 12h16.5"
        />
        <path
          d="M3.75 17.25H12"
        />
      
      </svg>
    </div>
  );
};

Bars3BottomLeftIcon.displayName = "Bars3BottomLeftIcon";

export { Bars3BottomLeftIcon };
