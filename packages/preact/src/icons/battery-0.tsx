import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface Battery0IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface Battery0IconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Battery0Icon = ({ className, size = 28, ...props }: Battery0IconProps) => {
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
        
          <path d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
        
      </svg>
    </div>
  );
};

Battery0Icon.displayName = "Battery0Icon";

export { Battery0Icon };
