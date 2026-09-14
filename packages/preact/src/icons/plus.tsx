import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PlusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PlusIcon = ({ className, size = 28, ...props }: PlusIconProps) => {
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
        
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        
      </svg>
    </div>
  );
};

PlusIcon.displayName = "PlusIcon";

export { PlusIcon };
