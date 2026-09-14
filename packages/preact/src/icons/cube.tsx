import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface CubeIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface CubeIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CubeIcon = ({ className, size = 28, ...props }: CubeIconProps) => {
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
        
          <path d="M21 7.5L12 2.25L3 7.5M21 7.5L12 12.75M21 7.5V16.5L12 21.75M3 7.5L12 12.75M3 7.5V16.5L12 21.75M12 12.75V21.75" />
        
      </svg>
    </div>
  );
};

CubeIcon.displayName = "CubeIcon";

export { CubeIcon };
