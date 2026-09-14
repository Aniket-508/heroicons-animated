import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface Bars3BottomRightIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Bars3BottomRightIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Bars3BottomRightIcon = ({ className, size = 28, ...props }: Bars3BottomRightIconProps) => {
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
          d="M12 17.25h8.25"
        />
      
      </svg>
    </div>
  );
};

Bars3BottomRightIcon.displayName = "Bars3BottomRightIcon";

export { Bars3BottomRightIcon };
