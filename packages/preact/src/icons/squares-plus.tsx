import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface SquaresPlusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface SquaresPlusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const SquaresPlusIcon = ({ className, size = 28, ...props }: SquaresPlusIconProps) => {
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
        
          <path d="M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
          <path
            d="M16.875 13.5v6.75"
          />
          <path
            d="M13.5 16.875h6.75"
          />
        
      </svg>
    </div>
  );
};

SquaresPlusIcon.displayName = "SquaresPlusIcon";

export { SquaresPlusIcon };
