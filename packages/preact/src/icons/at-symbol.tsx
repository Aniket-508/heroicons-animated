import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface AtSymbolIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface AtSymbolIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const AtSymbolIcon = ({ className, size = 28, ...props }: AtSymbolIconProps) => {
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
        
          <circle
            cx="12"
            cy="12"
            r="4.5"
          />
          <path
            d="M16.5 12c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
          />
        
      </svg>
    </div>
  );
};

AtSymbolIcon.displayName = "AtSymbolIcon";

export { AtSymbolIcon };
