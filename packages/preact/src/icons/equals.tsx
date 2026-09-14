import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface EqualsIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface EqualsIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const EqualsIcon = ({ className, size = 28, ...props }: EqualsIconProps) => {
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
            d="M4.499 8.248h15m-15 7.501h15"
          />
        
      </svg>
    </div>
  );
};

EqualsIcon.displayName = "EqualsIcon";

export { EqualsIcon };
