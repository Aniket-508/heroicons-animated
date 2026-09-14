import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface SunIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SunIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const SunIcon = ({ className, size = 28, ...props }: SunIconProps) => {
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
        
          <circle cx="12" cy="12" r="3.75" />
          <path
            d="M12 3V5.25"
          />
          <path
            d="M18.364 5.63604L16.773 7.22703"
          />
          <path
            d="M21 12H18.75"
          />
          <path
            d="M18.364 18.364L16.773 16.773"
          />
          <path
            d="M12 18.75V21"
          />
          <path
            d="M7.22703 16.773L5.63604 18.364"
          />
          <path
            d="M5.25 12H3"
          />
          <path
            d="M7.22703 7.22703L5.63604 5.63604"
          />
        
      </svg>
    </div>
  );
};

SunIcon.displayName = "SunIcon";

export { SunIcon };
