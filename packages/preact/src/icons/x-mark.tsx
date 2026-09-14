import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface XMarkIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface XMarkIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const XMarkIcon = ({ className, size = 28, ...props }: XMarkIconProps) => {
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
            d="M6 6l12 12"
          />
          <path
            d="M18 6l-12 12"
          />
        
      </svg>
    </div>
  );
};

XMarkIcon.displayName = "XMarkIcon";

export { XMarkIcon };
