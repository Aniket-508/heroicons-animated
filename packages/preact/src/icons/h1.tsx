import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface H1IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface H1IconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const H1Icon = ({ className, size = 28, ...props }: H1IconProps) => {
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
        
          <path d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501" />
          <path
            d="M17.244 10.868l2.25-1.5v10.126h-2.25m2.25 0h2.25"
          />
        
      </svg>
    </div>
  );
};

H1Icon.displayName = "H1Icon";

export { H1Icon };
