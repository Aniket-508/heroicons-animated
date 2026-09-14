import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface StopIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface StopIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const StopIcon = ({ className, size = 28, ...props }: StopIconProps) => {
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
        
          <path d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
        
      </svg>
    </div>
  );
};

StopIcon.displayName = "StopIcon";

export { StopIcon };
