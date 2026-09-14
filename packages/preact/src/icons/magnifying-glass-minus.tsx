import type { JSX } from "preact";
import { cn } from "@/lib/utils";

export interface MagnifyingGlassMinusIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MagnifyingGlassMinusIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MagnifyingGlassMinusIcon = ({ className, size = 28, ...props }: MagnifyingGlassMinusIconProps) => {
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
        
        <path d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z" />
        <path
          d="M13.5 10.5H7.5"
        />
      
      </svg>
    </div>
  );
};

MagnifyingGlassMinusIcon.displayName = "MagnifyingGlassMinusIcon";

export { MagnifyingGlassMinusIcon };
