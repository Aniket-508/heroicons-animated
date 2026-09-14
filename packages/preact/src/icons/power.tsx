import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface PowerIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PowerIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const PowerIcon = ({ className, size = 28, ...props }: PowerIconProps) => {
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
            d="M5.636 5.636a9 9 0 1 0 12.728 0"
          />
          <path
            d="M12 3v9"
          />
        
      </svg>
    </div>
  );
};

PowerIcon.displayName = "PowerIcon";

export { PowerIcon };
